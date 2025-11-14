import { _decorator, SpriteFrame, Enum } from 'cc';
const { ccclass, property } = _decorator;

import { GameState } from "./enums/GameState";

@ccclass('GameStateEntry')
export class GameStateEntry {
    @property({ type: Enum(GameState) })
    gameState: GameState = GameState.BetPhase;

    @property({ type: SpriteFrame })
    spriteFrame: SpriteFrame = null!;
}