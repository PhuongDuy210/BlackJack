import { CardData } from './CardData'; // Your interface
import { SpriteFrame } from 'cc';

export class Deck {
    private cards: CardData[] = [];

    constructor(cardSet: CardData[], deckCount: number = 1) {
        this.buildDeck(cardSet, deckCount);
        this.shuffle();
    }

    private buildDeck(cardSet: CardData[], deckCount: number) {
        this.cards = [];
        for (let i = 0; i < deckCount; i++) {
            this.cards.push(...cardSet.map(card => ({ ...card })));
        }
    }

    public shuffle(): void {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }

    public peak(index: number): CardData | null {
        return index >= 0 && index < this.cards.length ? this.cards[index] : null;
    }

    public deal(): CardData | null {
        return this.cards.length > 0 ? this.cards.pop()! : null;
    }

    public remaining(): number {
        return this.cards.length;
    }

    public reset(cardSet: CardData[], deckCount: number = 1): void {
        this.buildDeck(cardSet, deckCount);
        this.shuffle();
    }
}