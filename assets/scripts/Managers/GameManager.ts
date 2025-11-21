import { _decorator, Component } from 'cc';
const { ccclass, property } = _decorator;
import { Deck } from '../Deck';
import { DeckManager } from './DeckManager';
import { EventManager } from './EventManager';
import { GameEvent } from '../enums/GameEvent';
import { GameState } from '../enums/GameState';
import { GameResult } from '../enums/GameResult';
import { PlayerData } from '../PlayerData';
import { Player } from '../Player';
import { Dealer } from '../Dealer';
import { SFXID } from '../AudioSystem/SFXEnums';

@ccclass('GameManager')
export class GameManager extends Component {

    @property(DeckManager)
    private deckManager: DeckManager = null!;

    private playerDatas: PlayerData[] = [];

    private myPlayerID = 1;

    private players: Map<number, Player[]> = new Map<number, Player[]>;

    private playersThisTurn: Map<number, Player[]>;
    private currentPlayer: Player[] = [];
    private dealer = new Dealer();

    private gameState: GameState = GameState.BetPhase;

    private currentHandIndex = 0;

    private phaseTimer: number = 30;

    start() {
        EventManager.instance.gameEvents.on(GameEvent.DECK_LOADED, this.onDeckLoaded, this);
        EventManager.instance.gameEvents.on(GameEvent.ANIMATION_FINISHED, this.onAnimationFinished, this);
        EventManager.instance.gameEvents.emit(GameEvent.GAMESTATE_CHANGED, this.gameState);

        this.playerDatas.push(new PlayerData(this.myPlayerID, 1000));
        // this.playerDatas.push(new PlayerData(2, 1000));
        this.playerDatas.forEach(playerData => {
            const player = [new Player(0, playerData.getID())]; 
            this.players.set(playerData.getID(), player);
        });
        this.playersThisTurn = new Map(this.players);

        this.startPhaseTimer();
    }

    protected onDestroy(): void {
        EventManager.instance.gameEvents.off(GameEvent.DECK_LOADED, this.onDeckLoaded, this);
        EventManager.instance.gameEvents.off(GameEvent.ANIMATION_FINISHED, this.onAnimationFinished, this);
    }

    private onDeckLoaded(deck: Deck) {
        // Start the game logic here, e.g., deal initial cards
        console.log('Game started with deck:', deck);
    }

    private getNextPlayer(): Player[] {
        for (const [playerID, player] of this.playersThisTurn) {
            if (player.length > 0) {
                this.currentHandIndex = 0;
                return player;
            }
        }
    }

    public initialDeal() {
        this.changeGameState(GameState.InitialDeal);
        EventManager.instance.gameEvents.emit(GameEvent.LOCK_INPUT);
        for (let i = 0; i < 2; i++) {
            this.playerDatas.forEach(playerData => {
                const playerCardData = this.deckManager.dealCard();
                if (playerCardData) {
                    this.playersThisTurn.get(playerData.getID())[this.currentHandIndex].addCard(playerCardData);
                }
                EventManager.instance.gameEvents.emit(GameEvent.DEAL_CARD, this.playersThisTurn.get(playerData.getID())[this.currentHandIndex]);
            });
            
            const dealerCardData = this.deckManager.dealCard();
            
            if (dealerCardData) {
                this.dealer.addCard(dealerCardData);
            }
            EventManager.instance.gameEvents.emit(GameEvent.DEAL_CARD, this.dealer);
        }
    }
    
    private checkForInsurance() {
        if (this.dealer.hasAceFaceUp()) {
            this.changeGameState(GameState.InsuranceOffer);
            EventManager.instance.gameEvents.emit(GameEvent.OFFER_INSURANCE, () => this.startGame());
        } else {
            this.startGame();
        }
    }
    
    private startGame() {
        EventManager.instance.gameEvents.emit(GameEvent.GAME_STARTED, this.currentPlayer[this.currentHandIndex]);
        this.changeGameState(GameState.PlayerTurn);
        // Check for immediate blackjack
        if (this.currentPlayer[this.currentHandIndex].hasBlackjack() || this.dealer.hasBlackjack()) {
            this.dealer.revealAll = true;
            this.endGame();
        }
    }
    
    public onAnimationFinished() {
        if (this.gameState === GameState.InitialDeal) {
            this.currentPlayer = this.getNextPlayer();
            this.checkForInsurance();
        }

        if (this.gameState === GameState.PlayerTurn) {
            if (this.currentPlayer[this.currentHandIndex].isBusted()) {
                if ((this.currentHandIndex + 1) == this.currentPlayer.length) {
                    this.dealerPlay();
                } else {
                    this.currentHandIndex++;
                    EventManager.instance.gameEvents.emit(GameEvent.CHANGE_HAND, this.currentHandIndex);
                }
            }
        }

        if (this.gameState === GameState.PlayerTurnEnd) {
            if (this.playersThisTurn.size <= 0) {
                this.dealer.revealAll = true;
                this.dealerPlay();
            } else {
                this.playersThisTurn.delete(this.currentPlayer[this.currentHandIndex].getPlayerID());
                this.currentPlayer = this.getNextPlayer();
                console.log('Current Player: '+ this.currentPlayer);
            }
        }

        if (this.gameState === GameState.DealerTurnEnd) {
            this.changeGameState(GameState.GameEnd);
            const results = [];
            this.players.forEach(currentPlayer => {
                currentPlayer.forEach(player => {
                    results.push(this.determineWinner(player.getIndex()));
                });
                EventManager.instance.gameEvents.emit(GameEvent.GAME_ENDED, results, currentPlayer, this.dealer);
            });
        }

        EventManager.instance.gameEvents.emit(GameEvent.UNLOCK_INPUT);
    }

    public playerHit() {
        EventManager.instance.gameEvents.emit(GameEvent.LOCK_INPUT);
        const cardData = this.deckManager.dealCard();
        if (cardData) {
            this.currentPlayer[this.currentHandIndex].addCard(cardData);
            console.log('Hand ' + this.currentHandIndex + ' count: ' + this.currentPlayer[this.currentHandIndex].getHand().length);
            EventManager.instance.gameEvents.emit(GameEvent.DEAL_CARD, this.currentPlayer[this.currentHandIndex]);
        }
    }

    public playerStand() {
        EventManager.instance.gameEvents.emit(GameEvent.LOCK_INPUT);
        console.log('Player stands with hand:', this.currentPlayer[this.currentHandIndex].getHand());
        if ((this.currentHandIndex + 1) == this.currentPlayer.length) {
            this.dealerPlay();
        } else {
            this.currentHandIndex++;
            EventManager.instance.gameEvents.emit(GameEvent.CHANGE_HAND, this.currentHandIndex);
            EventManager.instance.gameEvents.emit(GameEvent.UNLOCK_INPUT);
        }
    }

    public playerDouble() {
        EventManager.instance.gameEvents.emit(GameEvent.LOCK_INPUT);
        const cardData = this.deckManager.dealCard();
        if (cardData) {
            this.currentPlayer[this.currentHandIndex].addCard(cardData);
            EventManager.instance.gameEvents.emit(GameEvent.DEAL_CARD, this.currentPlayer[this.currentHandIndex]);
        }
        if ((this.currentHandIndex + 1) == this.currentPlayer.length) {
            this.changeGameState(GameState.PlayerTurnEnd);
        } else {
            this.currentHandIndex++;
            EventManager.instance.gameEvents.emit(GameEvent.CHANGE_HAND, this.currentHandIndex);
        }

        this.currentPlayer[this.currentHandIndex].doublingDown();
    }

    public playerSplit() {
        if (!this.currentPlayer[this.currentHandIndex].canSplit()) {
            return;
        }
        let currentHand = this.currentPlayer[this.currentHandIndex];
        const splitCard = currentHand.splitHand();

        let newHand = new Player(this.currentHandIndex + 1, currentHand.getPlayerID());
        newHand.addCard(splitCard);
        this.currentPlayer.push(newHand);
        EventManager.instance.gameEvents.emit(GameEvent.SPLIT_HAND);
    }

    public dealerPlay() {
        EventManager.instance.gameEvents.emit(GameEvent.LOCK_INPUT);
        this.changeGameState(GameState.DealerTurn);
        if (this.currentPlayer.every(player => player.isBusted())) {
            console.log('All player\'s hands are busted');
            this.endGame();
        };
        while (this.dealer.shouldHit()) {
            const cardData = this.deckManager.dealCard();
            if (cardData) {
                this.dealer.addCard(cardData);
                console.log('Dealer hits and receives:', cardData);
                EventManager.instance.gameEvents.emit(GameEvent.DEAL_CARD, this.dealer);
            }
        }
        console.log('Dealer Hand now:', this.dealer.getHand());
        this.endGame();
    }

    private determineWinner(index: number): GameResult {
        const player = this.currentPlayer[index];
        const playerValue = player.getHandValue();
        const dealerValue = this.dealer.getHandValue();

        let result;
        if (player.hasBlackjack() && this.dealer.hasBlackjack()) {
            // result = 'It\'s a tie with both having Blackjack!';
            result = GameResult.Draw;
        } else if (player.hasBlackjack()) {
            // result = 'Player wins with Blackjack!';
            result = GameResult.WinBlackJack;
            EventManager.instance.gameEvents.emit(GameEvent.PLAY_SFX, SFXID.Win, this);
        } else if (this.dealer.hasBlackjack()) {
            // result = 'Dealer wins with Blackjack!';
            result = GameResult.Lose;
            EventManager.instance.gameEvents.emit(GameEvent.PLAY_SFX, SFXID.Lose, this);
        } else if (player.isBusted()) {
            // result = 'Dealer wins! Player busted.';
            result = GameResult.Lose;
            EventManager.instance.gameEvents.emit(GameEvent.PLAY_SFX, SFXID.Lose, this);
        } else if (this.dealer.isBusted()) {
            // result = 'Player wins! Dealer busted.';
            result = GameResult.Win;
            EventManager.instance.gameEvents.emit(GameEvent.PLAY_SFX, SFXID.Win, this);
        } else if (playerValue > dealerValue) {
            // result = 'Player wins!';
            result = GameResult.Win;
            EventManager.instance.gameEvents.emit(GameEvent.PLAY_SFX, SFXID.Win, this);
        } else if (dealerValue > playerValue) {
            // result = 'Dealer wins!';
            result = GameResult.Lose;
            EventManager.instance.gameEvents.emit(GameEvent.PLAY_SFX, SFXID.Lose, this);
        } else {
            // result = 'It\'s a tie!';
            result = GameResult.Draw;
        }
        
        return result;
    }
    
    private endGame() {
        EventManager.instance.gameEvents.emit(GameEvent.DEALER_TURN_END);
        this.changeGameState(GameState.DealerTurnEnd);
    }

    private resetGame() {
        for (const [playerID, player] of this.playersThisTurn) {
            player.forEach(playerHand => {
                playerHand.resetHand();   
            });
        }
        this.playersThisTurn = new Map(this.players);

        this.dealer.resetHand();
        this.dealer.revealAll = false;
        EventManager.instance.gameEvents.emit(GameEvent.GAME_RESET);
        this.changeGameState(GameState.BetPhase);
        this.currentHandIndex = 0;
    }
    
    private changeGameState(gameState: GameState) {
        this.gameState = gameState;
        EventManager.instance.gameEvents.emit(GameEvent.GAMESTATE_CHANGED, this.gameState);
    }

    private startPhaseTimer() {
        this.scheduleOnce(() => {
            this.phaseTimeUp();
        }, this.phaseTimer);
        EventManager.instance.gameEvents.emit(GameEvent.START_TIMER, this.phaseTimer);
    }

    private phaseTimeUp() {
        console.log("Time up");
        switch (this.gameState) {
            case GameState.BetPhase:
                break;

            case GameState.InitialDeal:
                break;

            case GameState.PlayerTurn:
                break;

            case GameState.DealerTurn:
                break;

            case GameState.GameEnd:
                this.resetGame();
                break;
        }
        EventManager.instance.gameEvents.emit(GameEvent.TIME_UP, this.phaseTimer);
    }
}