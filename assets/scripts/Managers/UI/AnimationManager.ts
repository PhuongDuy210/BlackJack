import { _decorator, Component } from 'cc';
import { EventManager } from '../EventManager';
import { GameEvent } from '../../enums/GameEvent';

const { ccclass, property } = _decorator;

@ccclass('AnimationManager')
export class AnimationManager extends Component {
    // Array of functions that return Promise<void>
    private pendingAnimations: Array<() => Promise<void>> = [];

    private isAnimating: boolean = false;

    start() {
        EventManager.instance.gameEvents.on(GameEvent.QUEUE_ANIMATION, this.queueAnimation, this);
    }

    protected onDestroy(): void {
        EventManager.instance.gameEvents.off(GameEvent.QUEUE_ANIMATION, this.queueAnimation, this);
    }    

    private onAllAnimationFinished() {
        this.isAnimating = false;
        if (this.pendingAnimations.length === 0) {
            EventManager.instance.gameEvents.emit(GameEvent.ANIMATION_FINISHED);
        }
    }

    async playAnimation() {
        this.isAnimating = true;
        while (this.pendingAnimations.length > 0) {
            const animFunc = this.pendingAnimations.shift()!;
            await animFunc();
        }
        this.scheduleOnce(this.onAllAnimationFinished, 0.2);
    }

    private queueAnimation(animPromise?: () => Promise<void>) {
        this.pendingAnimations.push(animPromise);
        this.unschedule(this.onAllAnimationFinished);
        if (!this.isAnimating) {
            this.playAnimation();
        }
    }
}
