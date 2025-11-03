import { SpriteFrame } from 'cc';

export interface CardData {
    suit: string;
    rank: string;
    values: number[];
    sprite: string;
    spriteFrame: SpriteFrame;
    isFaceDown?: boolean;
}