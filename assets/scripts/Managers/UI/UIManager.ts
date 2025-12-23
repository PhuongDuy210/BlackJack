import { _decorator, Button, Component, Node, Sprite, Label } from 'cc';
import { EventManager } from '../EventManager';
import { GameEvent } from '../../enums/GameEvent';

import { Player } from '../../Player';

import { GameState } from '../../enums/GameState';
import { GameStateEntry } from '../../GameStateEntry';

import { SFXID } from '../../AudioSystem/SFXEnums';

import { GenericPopup } from '../../Popup/GenericPopup';
import { PopupButtonData } from '../../Popup/PopupButtonData';
import { PopupPage } from '../../Popup/PopupPage';

import { GenericAnimation } from '../../Animation/GenericAnimation';
import { AnimationType } from '../../enums/AnimationType';

const { ccclass, property } = _decorator;

@ccclass('UIManager')
export class UIManager extends Component {
    @property(Sprite)
    private stateSprite: Sprite = null!;

    @property({ type: GameStateEntry})
    private gameStateEntries: GameStateEntry[] = []!;

    private buttonWrapperAnim: GenericAnimation = null!;

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

    @property(Button)
    private splitButton: Button = null!;

    @property(GenericPopup)
    private popup: GenericPopup = null!;

    @property(GenericPopup)
    private smallPopup: GenericPopup = null!;

    @property(Label)
    private timerLabel: Label = null!;

    private playerHandCount = 0;

    start() {
        EventManager.instance.gameEvents.on(GameEvent.START_TIMER, this.onTimerStart, this);
        EventManager.instance.gameEvents.on(GameEvent.ADD_CHIP_UI, this.onChipAdd, this);
        EventManager.instance.gameEvents.on(GameEvent.GAME_STARTED, this.onGameStarted, this);
        EventManager.instance.gameEvents.on(GameEvent.OFFER_INSURANCE, this.showInsurancePopup, this);
        EventManager.instance.gameEvents.on(GameEvent.SPLIT_HAND, this.disableSplitButton, this);
        EventManager.instance.gameEvents.on(GameEvent.GAME_ENDED, this.displayResult, this);
        EventManager.instance.gameEvents.on(GameEvent.GAMESTATE_CHANGED, this.displayGameState, this);
        EventManager.instance.gameEvents.on(GameEvent.GAME_RESET, this.resetUI, this);
        EventManager.instance.gameEvents.on(GameEvent.LOCK_INPUT, this.lockInput, this);
        EventManager.instance.gameEvents.on(GameEvent.UNLOCK_INPUT, this.unlockInput, this);

        this.attachPlaySFXToButton(this.hitButton.node.parent);
        this.resetUI();
    }

    private resetUI() {
        console.log('Resetting UI...');
        if (this.buttonWrapperAnim == null) {
            const buttonWrapper = this.hitButton.node.parent.parent;
            this.buttonWrapperAnim = buttonWrapper.getComponent(GenericAnimation);
            this.buttonWrapperAnim.setTargetAsOriginalPos();
        }
        this.buttonWrapperAnim.animateExit();
        this.dealButton.interactable = false;
        this.dealButton.node.active = true;
        this.hitButton.node.active = false;
        this.standButton.node.active = false;
        this.doubleButton.node.active = false;
        this.stateSprite.node.active = false;
        this.resetButton.node.active = false;
        this.splitButton.node.active = false;
        this.playerHandCount = 0;
    }

    protected onDestroy(): void {
        EventManager.instance.gameEvents.on(GameEvent.START_TIMER, this.onTimerStart, this);
        EventManager.instance.gameEvents.off(GameEvent.ADD_CHIP_UI, this.onChipAdd, this);
        EventManager.instance.gameEvents.off(GameEvent.SPLIT_HAND, this.disableSplitButton, this);
        EventManager.instance.gameEvents.off(GameEvent.GAME_STARTED, this.onGameStarted, this);
        EventManager.instance.gameEvents.off(GameEvent.OFFER_INSURANCE, this.showInsurancePopup, this);
        EventManager.instance.gameEvents.off(GameEvent.GAME_ENDED, this.displayResult, this);
        EventManager.instance.gameEvents.off(GameEvent.GAME_RESET, this.resetUI, this);
        EventManager.instance.gameEvents.off(GameEvent.GAMESTATE_CHANGED, this.displayGameState, this);
        EventManager.instance.gameEvents.off(GameEvent.LOCK_INPUT, this.lockInput, this);
        EventManager.instance.gameEvents.off(GameEvent.UNLOCK_INPUT, this.unlockInput, this);
    }

    private onChipAdd() {
        this.dealButton.interactable = true;
    }

    private onTimerStart(startTime: number) {
        let remaining = startTime;
        this.unscheduleAllCallbacks();
        this.schedule(() => {
            remaining--;
            this.timerLabel.string = "Time left: " + remaining.toString();
        
            if (remaining <= 0) {
                this.unscheduleAllCallbacks();
            }
        }, 1);
    }

    private async onGameStarted(player: Player) {
        if (this.buttonWrapperAnim == null) {
            const buttonWrapper = this.dealButton.node.parent.parent;
            this.buttonWrapperAnim = buttonWrapper.getComponent(GenericAnimation);
            this.buttonWrapperAnim.setTargetAsOriginalPos();
        }
        this.buttonWrapperAnim.animateEntry();
        this.dealButton.node.active = false;
        this.hitButton.node.active = true;
        this.standButton.node.active = true;
        this.doubleButton.node.active = true;
        this.splitButton.node.active = true;

        if (player.canSplit()) {
            this.splitButton.interactable = true;
        } else {
            this.splitButton.interactable = false;
            const original = this.splitButton.transition;
            this.splitButton.transition = Button.Transition.COLOR;
            this.splitButton.transition = original;
        }
        this.playerHandCount++;
    }

    private displayResult() {
        this.hitButton.node.active = false;
        this.standButton.node.active = false;
        this.resetButton.node.active = true;
        this.doubleButton.node.active = false;
        this.splitButton.node.active = false;
    }

    private displayGameState(state: GameState) {
        const entry = this.gameStateEntries.find(e => e.gameState === state);
        if (entry) {
            this.stateSprite.node.active = true;
            this.stateSprite.spriteFrame = entry.spriteFrame;
        } else {
            this.stateSprite.node.active = false;
        }
    }

    private attachPlaySFXToButton(root: Node) {
        const buttons = root.getComponentsInChildren(Button);
        for (const button of buttons) {
            button.node.on(Button.EventType.CLICK, this.playButtonSFX, this);
        }
    }

    private playButtonSFX() {
        EventManager.instance.gameEvents.emit(GameEvent.PLAY_SFX, SFXID.ButtonClick);
    }

    public disableSplitButton() {
        // Only for disabling the splitButton after clicking it once
        this.splitButton.interactable = false;
    }

    private showInsurancePopup(callback?: (accept: boolean) => void) {
        let insurancePopupBtns = [];
        insurancePopupBtns.push(new PopupButtonData('Yes', () => {
            EventManager.instance.gameEvents.emit(GameEvent.ACCEPT_INSURANCE); // Might not need this later when we send signal to server
            if (callback) callback(true);
        }));
        insurancePopupBtns.push(new PopupButtonData('No', () => {
            if (callback) callback(false);
        }));
        // Fade for the popup mask, FlyTop for the popup
        let entryAnims = [AnimationType.Fade, AnimationType.FlyTop];
        let exitAnims = [AnimationType.Fade, AnimationType.FlyTop];
        this.smallPopup.show('Notice', 'Do you want to use Insurance?\n(Payout 2:1)', insurancePopupBtns, entryAnims, exitAnims);
    }

    private lockInput() {
        this.dealButton.interactable = false;
        this.hitButton.interactable = false;
        this.standButton.interactable = false;
        this.doubleButton.interactable = false;
        this.resetButton.interactable = false;
        this.splitButton.interactable = false;
    }

    private unlockInput() {
        this.hitButton.interactable = true;
        this.standButton.interactable = true;
        this.doubleButton.interactable = true;
        this.resetButton.interactable = true;
    }

    public displayRule() {
        let rulePopupBtns = [];
        rulePopupBtns.push(new PopupButtonData('Close'));

        let popupPages = [];
        popupPages.push(new PopupPage(0, '⁃	Player và Dealer chỉ có 2 lá. Dealer luôn có 1 lá úp cho tới khi mở bài (kết thúc game)\n'+
	'⁃	Nếu player hoặc dealer được blackjack (1 lá A và 1 lá có giá trị = 10) thì auto thắng trừ khi người còn lại cũng có blackjack\n'+
	'⁃	Player sau khi nhận được 2 lá ban đầu sẽ có 4 lựa chọn.\n'+
	'+ Hit: rút thêm 1 lá, sau khi rút không kết thúc lượt\n'+
	'+ Double: nhân đôi số cược, rút thêm 1 lá và kết thúc lượt\n'+
	'+ Stand: không rút và kết thúc lượt. Player có thể Stand bất cứ lúc nào, không có tổng giá trị bài tối thiểu cần đạt được\n'+
	'+ Split: player có thể tách 2 lá hiện tại của mình thành 2 tụ khác nhau với điều kiện là 2 lá phải cùng cấp (hiện tại cho mục đích test, player luôn luôn được phép split)'));
        popupPages.push(new PopupPage(1, '⁃	Nếu player tổng giá trị bài trong tay vượt quá 21 (> 21) thì sẽ kết thúc lượt và bị tính là thua bất kể giá trị trong tay của Dealer là bao nhiêu\n'+
	'⁃	Sau khi Player kết thúc lượt sẽ đến lượt của Dealer. Dealer luôn rút bài cho đến khi giá trị bài trong tay đạt ít nhất là 17, sau đó Dealer kết thúc lượt\n'+
	'⁃	Sau khi Dealer kết thúc lượt, cả 2 bên cùng mở bài và so sánh tổng giá trị, bên nào cao hơn sẽ thắng\n'+
	'⁃	Nếu Dealer có tổng giá trị bài trong tay vượt quá 21 (> 21) thì sẽ bị tính là thua bất kể giá trị trong tay của Player là bao nhiêu'));
        // Fade for the popup mask, FlyTop for the popup
        let entryAnims = [AnimationType.Fade, AnimationType.FlyTop];
        let exitAnims = [AnimationType.Fade, AnimationType.FlyTop];
        this.popup.show('Rules', popupPages, rulePopupBtns, entryAnims, exitAnims);
    }

    public toggleSFX() {
        EventManager.instance.gameEvents.emit(GameEvent.PLAY_SFX, SFXID.ButtonClick);
    }
}

