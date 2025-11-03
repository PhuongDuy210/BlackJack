import { _decorator, Component, JsonAsset, Node, resources, SpriteFrame, Prefab, instantiate } from 'cc';
const { ccclass, property } = _decorator;
import { CardData } from '../CardData';
import { CardAsset } from '../CardAsset';
import { Deck } from '../Deck';
import { EventManager } from './EventManager';
import { GameEvent } from '../enums/GameEvent';

@ccclass('DeckManager')
export class DeckManager extends Component {

    private loadedCardData: CardData[] = [];

    private cardDeck: Deck | null = null;

    start() {
        let deckCount = this.loadedCardData.length;

        EventManager.instance.gameEvents.on(GameEvent.GAME_RESET, this.resetDeck, this);
    }

    protected onDestroy(): void {
        EventManager.instance.gameEvents.off(GameEvent.GAME_RESET, this.resetDeck, this);
    }

    onLoad() {
        resources.load('deck', JsonAsset, (err, asset) => {
            if (err) {
                console.error('Failed to load card data:', err);
                return;
            }
            this.loadedCardData = asset.json as CardData[];
            this.loadSprites();
        });
    }

    private loadSprites() {
        const promises = this.loadedCardData.map(card =>
            this.loadSpriteFrame('sprites/Cards/'+card.sprite+'/spriteFrame').then(spriteFrame => {
                card.spriteFrame = spriteFrame;
            }).catch(err => {
                console.error(`Failed to load sprite for ${card.rank} of ${card.suit}:`, err);
            })
        );

        promises.push(CardAsset.backSpriteFrame ? Promise.resolve() : this.loadSpriteFrame('sprites/Cards/back01/spriteFrame').then(spriteFrame => {
            CardAsset.backSpriteFrame = spriteFrame;
        }));

        Promise.all(promises).then(() => {
            console.log('All sprites loaded, starting game...');
            this.cardDeck = new Deck(this.loadedCardData, 2);
            EventManager.instance.gameEvents.emit(GameEvent.DECK_LOADED);
        }).catch(err => {
            console.error('Error loading deck:', err);
        });
    }

    private loadSpriteFrame(path: string): Promise<SpriteFrame> {
        return new Promise((resolve, reject) => {
            resources.load(path, SpriteFrame, (err, spriteFrame) => {
                if (err) reject(err);
                else resolve(spriteFrame);
            });
        });
    }

    public dealCard(): CardData | null {
        if (this.cardDeck) {
            return this.cardDeck.deal();
        }
        return null;
    }

    public resetDeck() {
        if (this.loadedCardData.length > 0) {
            console.log('Resetting deck...');
            this.cardDeck.reset(this.loadedCardData, 2);
            EventManager.instance.gameEvents.emit(GameEvent.DECK_LOADED);
        }
    }
}

