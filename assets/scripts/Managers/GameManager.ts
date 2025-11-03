import { _decorator, Component } from 'cc';
const { ccclass, property } = _decorator;
import { Deck } from '../Deck';
import { DeckManager } from './DeckManager';
import { EventManager } from './EventManager';
import { GameEvent } from '../enums/GameEvent';
import { GameState } from '../enums/GameState';
import { Player } from '../Player';
import { Dealer } from '../Dealer';

@ccclass('GameManager')
export class GameManager extends Component {

    @property(DeckManager)
    private deckManager: DeckManager = null!;

    private player = new Player('Player 1');
    private dealer = new Dealer();

    private gameState: GameState = GameState.InitialDeal;

    start() {
        EventManager.instance.gameEvents.on(GameEvent.DECK_LOADED, this.onDeckLoaded, this);
        EventManager.instance.gameEvents.on(GameEvent.ANIMATION_FINISHED, this.onAnimationFinished, this);
    }

    protected onDestroy(): void {
        EventManager.instance.gameEvents.off(GameEvent.DECK_LOADED, this.onDeckLoaded, this);
        EventManager.instance.gameEvents.off(GameEvent.ANIMATION_FINISHED, this.onAnimationFinished, this);
    }

    private onDeckLoaded(deck: Deck) {
        // Start the game logic here, e.g., deal initial cards
        console.log('Game started with deck:', deck);
    }

    public initialDeal() {
        for (let i = 0; i < 2; i++) {
            const playerCardData = this.deckManager.dealCard();
            const dealerCardData = this.deckManager.dealCard();

            if (playerCardData) {
                this.player.addCard(playerCardData);
            }
            if (dealerCardData) {
                this.dealer.addCard(dealerCardData);
            }
        }

        // EventManager.instance.gameEvents.emit(GameEvent.GAME_STARTED);
        EventManager.instance.gameEvents.emit(GameEvent.DEAL_CARD, this.player);
        EventManager.instance.gameEvents.emit(GameEvent.DEAL_CARD, this.dealer);

        // Check for immediate blackjack
        if (this.player.hasBlackjack() || this.dealer.hasBlackjack()) {
            this.dealer.revealAll = true;
            this.endGame();
        }
    }

    public onAnimationFinished(participant: Player | Dealer) {
        console.log('Animation finished for:', participant instanceof Player ? 'Player' : 'Dealer');
        if (this.gameState === GameState.InitialDeal && participant instanceof Player) {
            this.gameState = GameState.PlayerTurn;
            EventManager.instance.gameEvents.emit(GameEvent.GAME_STARTED);
        }

        if (this.gameState === GameState.PlayerTurn && participant instanceof Player) {
            if (this.player.isBusted()) {
                this.dealerPlay();
            }
        }

        if (this.gameState === GameState.GameEnd) {
            const result = this.determineWinner();
            EventManager.instance.gameEvents.emit(GameEvent.GAME_ENDED, result);
        }
    }

    public playerHit() {
        const cardData = this.deckManager.dealCard();
        if (cardData) {
            this.player.addCard(cardData);
            EventManager.instance.gameEvents.emit(GameEvent.DEAL_CARD, this.player);
        }
    }

    public playerStand() {
        console.log('Player stands with hand:', this.player.getHand());
        this.dealerPlay();
    }

    public playerDouble() {
        const cardData = this.deckManager.dealCard();
        if (cardData) {
            this.player.addCard(cardData);
            EventManager.instance.gameEvents.emit(GameEvent.DEAL_CARD, this.player);
        }

        this.dealer.revealAll = true;
        this.dealerPlay();
    }

    public dealerPlay() {
        this.gameState = GameState.DealerTurn;
        while (this.dealer.shouldHit() && !this.player.isBusted()) {
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

    private determineWinner() {
        console.log('Determining winner...');
        const playerValue = this.player.getHandValue();
        const dealerValue = this.dealer.getHandValue();

        let result = '';
        if (this.player.hasBlackjack() && this.dealer.hasBlackjack()) {
            result = 'It\'s a tie with both having Blackjack!';
        } else if (this.player.hasBlackjack()) {
            result = 'Player wins with Blackjack!';
        } else if (this.dealer.hasBlackjack()) {
            result = 'Dealer wins with Blackjack!';
        } else if (this.player.isBusted()) {
            result = 'Dealer wins! Player busted.';
        } else if (this.dealer.isBusted()) {
            result = 'Player wins! Dealer busted.';
        } else if (playerValue > dealerValue) {
            result = 'Player wins!';
        } else if (dealerValue > playerValue) {
            result = 'Dealer wins!';
        } else {
            result = 'It\'s a tie!';
        }
        
        return result;
    }
    
    private endGame() {
        EventManager.instance.gameEvents.emit(GameEvent.DEALER_TURN_END);
        this.gameState = GameState.GameEnd;
    }

    private resetGame() {
        this.player.resetHand();
        this.dealer.resetHand();
        this.dealer.revealAll = false;
        EventManager.instance.gameEvents.emit(GameEvent.GAME_RESET);
        this.gameState = GameState.InitialDeal;
    }
}