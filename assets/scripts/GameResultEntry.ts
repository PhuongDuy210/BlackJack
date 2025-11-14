import { _decorator, SpriteFrame, Enum } from 'cc';
const { ccclass, property } = _decorator;

import { GameResult } from "./enums/GameResult";

@ccclass('GameResultEntry')
export class GameResultEntry {
    @property({ type: Enum(GameResult) })
    result: GameResult = GameResult.Win;

    @property({ type: SpriteFrame })
    spriteFrame: SpriteFrame = null!;
}