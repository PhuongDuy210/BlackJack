import { _decorator, Button, Component, Node, Prefab, instantiate, Vec3, Label, tween } from 'cc';
import { EventManager } from './EventManager';
import { GameEvent } from '../enums/GameEvent';
import { Card } from '../Card';

import { Participant } from '../Participant';
import { Player } from '../Player';
import { Dealer } from '../Dealer';

const { ccclass, property } = _decorator;

@ccclass('UIManager')
export class UIManager extends Component {
    @property(Prefab)
    private cardPrefab: Prefab = null!;

    @property(Label)
    private resultLabel: Label = null!;

    @property(Button)
    private dealButton: Button = null!;

    @property(Button)
    private hitButton: Button = null!;

    @property(Button)
    private standButton: Button = null!;

    @property(Button)
    private doubleButton: Button = null!;

    @property(Button)
    private resetButton: Button = null!;

    @property(Node)
    private deckPosition: Node = null!;

    @property(Node)
    private playerCardContainer: Node = null!;

    @property(Label)
    private playerScoreLabel: Label = null!;

    @property(Label)
    private dealerScoreLabel: Label = null!;

    @property(Node)
    private dealerCardContainer: Node = null!;

    private playerAnimationInProgress: number = 0;
    private dealerAnimationInProgress: number = 0;

    start() {
        EventManager.instance.gameEvents.on(GameEvent.DECK_LOADED, this.onDeckLoaded, this);
        EventManager.instance.gameEvents.on(GameEvent.GAME_STARTED, this.onGameStarted, this);
        EventManager.instance.gameEvents.on(GameEvent.DEAL_CARD, this.addCardToParticipant, this);
        EventManager.instance.gameEvents.on(GameEvent.GAME_ENDED, this.displayResult, this);
        EventManager.instance.gameEvents.on(GameEvent.GAME_RESET, this.resetUI, this);
        EventManager.instance.gameEvents.on(GameEvent.DEALER_TURN_END, this.flipDealerCards, this);
        EventManager.instance.gameEvents.on(GameEvent.LOCK_INPUT, this.lockInput, this);
        EventManager.instance.gameEvents.on(GameEvent.UNLOCK_INPUT, this.unlockInput, this);

        this.resetUI();
    }

    private resetUI() {
        console.log('Resetting UI...');
        this.dealButton.interactable = false;
        this.dealButton.node.active = true;
        this.hitButton.node.active = false;
        this.standButton.node.active = false;
        this.doubleButton.node.active = false;
        this.resultLabel.node.active = false;
        this.resetButton.node.active = false;
        this.playerScoreLabel.node.active = false;
        this.dealerScoreLabel.node.active = false;

        this.playerCardContainer.removeAllChildren();
        this.dealerCardContainer.removeAllChildren();
    }

    protected onDestroy(): void {
        EventManager.instance.gameEvents.off(GameEvent.DECK_LOADED, this.onDeckLoaded, this);
        EventManager.instance.gameEvents.off(GameEvent.GAME_STARTED, this.onGameStarted, this);
        EventManager.instance.gameEvents.off(GameEvent.DEAL_CARD, this.addCardToParticipant, this);
        EventManager.instance.gameEvents.off(GameEvent.GAME_ENDED, this.displayResult, this);
        EventManager.instance.gameEvents.off(GameEvent.GAME_RESET, this.resetUI, this);
        EventManager.instance.gameEvents.off(GameEvent.DEALER_TURN_END, this.flipDealerCards, this);
    }

    private onDeckLoaded() {
        this.dealButton.interactable = true;
    }

    private onGameStarted() {
        this.dealButton.node.active = false;
        this.hitButton.node.active = true;
        this.standButton.node.active = true;
        this.doubleButton.node.active = true;
    }

    async addCardToParticipant(participant: Participant) {
        let handArea = null;
        if (participant instanceof Player) {
            handArea = this.playerCardContainer;
        } else if (participant instanceof Dealer) {
            handArea = this.dealerCardContainer;
        }

        const hand = participant.getHand();
        for (let i = handArea.children.length; i < hand.length; i++) {
            await this.animateCardToHand(participant, handArea);
        }
        EventManager.instance.gameEvents.emit(GameEvent.ANIMATION_FINISHED, participant);
    }

    async animateCardToHand(participant: Participant, handArea: Node): Promise<void> {
        const hand = participant.getHand();
        const displayedCardCount = handArea.children.length;
        if (displayedCardCount >= hand.length) {
            return;
        }
        const latestCardData = hand[displayedCardCount];

        // Get or create visual card node
        const cardNode = instantiate(this.cardPrefab);
        let card = cardNode.addComponent(Card);
        card.init(latestCardData);
        
        // Add to scene
        let scoreLabel;
        if (participant instanceof Player) {
            latestCardData.isFaceDown = false;
            this.playerAnimationInProgress++;
            scoreLabel = this.playerScoreLabel;
        } else if (participant instanceof Dealer) {
            latestCardData.isFaceDown = (displayedCardCount === 0 && !participant.revealAll);
            this.dealerAnimationInProgress++;
            scoreLabel = this.dealerScoreLabel;
        }
        handArea.addChild(cardNode);
        
        // Position at deck first
        cardNode.setWorldPosition(this.deckPosition.getWorldPosition());
        
        // Animate to hand position
        const targetPos = this.getCardTargetPosition(displayedCardCount);
        await new Promise<void>((resolve) => {
            tween(cardNode)
            .to(0.5, { position: targetPos })
            .call(async () => {
                if (!latestCardData.isFaceDown) {
                    await card.flipCard();
                    this.checkRemainingAnimation(participant);
                    scoreLabel.string = 'Hand Value: ' + participant.getHandValue();
                }
                resolve();
            })
            .start();
        });
    }
    
    async flipDealerCards() {
        const dealerCardNodes = this.dealerCardContainer.children;
        for (let i = 0; i < dealerCardNodes.length; i++) {
            const cardNode = dealerCardNodes[0];
            const card = cardNode.getComponent(Card);
            if (card.isFaceDown) {
                await card.flipCard();
                this.checkRemainingAnimation(new Dealer);
            }
        }
    }
    
    private checkRemainingAnimation(participant: Participant) {
        if (participant instanceof Player) {
            this.playerAnimationInProgress--;
        } else if (participant instanceof Dealer) {
            this.dealerAnimationInProgress--;
        }
        console.log('Player animations left:', this.playerAnimationInProgress, 'Dealer animations left:', this.dealerAnimationInProgress);
        if ((this.playerAnimationInProgress <= 0 && participant instanceof Player) ||
            (this.dealerAnimationInProgress <= 0 && participant instanceof Dealer)) {
            console.log('All animations finished.');
            EventManager.instance.gameEvents.emit(GameEvent.ANIMATION_FINISHED, participant);
        }
    }

    private getCardTargetPosition(cardIndex: number): Vec3 {
        const xOffset = 30;
        const yOffset = -40;
        const x = (cardIndex % 13) * xOffset;
        const y = Math.floor(cardIndex / 13) * yOffset;
        return new Vec3(x, y, 0);
    }

    private displayResult(result: string) {
        // Implement result display logic (e.g., show a popup or update a label)
        console.log('Game Result:', result);
        this.resultLabel.node.active = true;
        this.resultLabel.string = result;
        this.hitButton.node.active = false;
        this.standButton.node.active = false;
        this.resetButton.node.active = true;
        this.doubleButton.node.active = false;

        this.playerScoreLabel.node.active = true;
        this.dealerScoreLabel.node.active = true;
    }

    private lockInput() {
        this.dealButton.interactable = false;
        this.hitButton.interactable = false;
        this.standButton.interactable = false;
        this.doubleButton.interactable = false;
        this.resetButton.interactable = false;
    }

    private unlockInput() {
        this.dealButton.interactable = true;
        this.hitButton.interactable = true;
        this.standButton.interactable = true;
        this.doubleButton.interactable = true;
        this.resetButton.interactable = true;
    }

}

