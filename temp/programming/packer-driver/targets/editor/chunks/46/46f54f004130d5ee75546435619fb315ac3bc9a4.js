System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Component, Node, Prefab, instantiate, Vec3, Label, tween, Vec2, EventManager, GameEvent, Card, Player, Dealer, ChipButton, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _crd, ccclass, property, MAX_STACK_COUNT, MAX_STACK_PER_TYPE, UIManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "./EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "../enums/GameEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCard(extras) {
    _reporterNs.report("Card", "../Card", _context.meta, extras);
  }

  function _reportPossibleCrUseOfParticipant(extras) {
    _reporterNs.report("Participant", "../Participant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayer(extras) {
    _reporterNs.report("Player", "../Player", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDealer(extras) {
    _reporterNs.report("Dealer", "../Dealer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChipEntry(extras) {
    _reporterNs.report("ChipEntry", "../Chip/ChipEntry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChipButton(extras) {
    _reporterNs.report("ChipButton", "../Chip/ChipButton", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Button = _cc.Button;
      Component = _cc.Component;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      Vec3 = _cc.Vec3;
      Label = _cc.Label;
      tween = _cc.tween;
      Vec2 = _cc.Vec2;
    }, function (_unresolved_2) {
      EventManager = _unresolved_2.EventManager;
    }, function (_unresolved_3) {
      GameEvent = _unresolved_3.GameEvent;
    }, function (_unresolved_4) {
      Card = _unresolved_4.Card;
    }, function (_unresolved_5) {
      Player = _unresolved_5.Player;
    }, function (_unresolved_6) {
      Dealer = _unresolved_6.Dealer;
    }, function (_unresolved_7) {
      ChipButton = _unresolved_7.ChipButton;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b1d26QNaihKl45SG/arX042", "UIManager", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'Node', 'Prefab', 'instantiate', 'Vec3', 'Label', 'tween', 'UITransform', 'Vec2']);

      ({
        ccclass,
        property
      } = _decorator);
      MAX_STACK_COUNT = 5;
      MAX_STACK_PER_TYPE = 4;

      _export("UIManager", UIManager = (_dec = ccclass('UIManager'), _dec2 = property(Prefab), _dec3 = property(Label), _dec4 = property(Button), _dec5 = property(Button), _dec6 = property(Button), _dec7 = property(Button), _dec8 = property(Button), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Label), _dec12 = property(Label), _dec13 = property(Node), _dec14 = property(Node), _dec15 = property(Node), _dec16 = property(Prefab), _dec17 = property(Label), _dec(_class = (_class2 = class UIManager extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "cardPrefab", _descriptor, this);

          _initializerDefineProperty(this, "resultLabel", _descriptor2, this);

          _initializerDefineProperty(this, "dealButton", _descriptor3, this);

          _initializerDefineProperty(this, "hitButton", _descriptor4, this);

          _initializerDefineProperty(this, "standButton", _descriptor5, this);

          _initializerDefineProperty(this, "doubleButton", _descriptor6, this);

          _initializerDefineProperty(this, "resetButton", _descriptor7, this);

          _initializerDefineProperty(this, "deckPosition", _descriptor8, this);

          _initializerDefineProperty(this, "playerCardContainer", _descriptor9, this);

          _initializerDefineProperty(this, "playerScoreLabel", _descriptor10, this);

          _initializerDefineProperty(this, "dealerScoreLabel", _descriptor11, this);

          _initializerDefineProperty(this, "dealerCardContainer", _descriptor12, this);

          _initializerDefineProperty(this, "bettingArea", _descriptor13, this);

          _initializerDefineProperty(this, "potArea", _descriptor14, this);

          _initializerDefineProperty(this, "chipButtonPrefab", _descriptor15, this);

          _initializerDefineProperty(this, "totalBet", _descriptor16, this);

          this.chipButtons = [];
          this.chipStacks = new Map();
          this.chipStackPositions = new Map();
          this.playerAnimationInProgress = 0;
          this.dealerAnimationInProgress = 0;
        }

        start() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).instance.gameEvents.on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).CHIP_ENTRY_READY, this.setupChipButtons, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).instance.gameEvents.on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).ADD_CHIP_UI, this.addChip, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).instance.gameEvents.on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).UPDATE_BET_VALUE, this.updateBetValue, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).instance.gameEvents.on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).GAME_STARTED, this.onGameStarted, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).instance.gameEvents.on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).DEAL_CARD, this.addCardToParticipant, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).instance.gameEvents.on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).GAME_ENDED, this.displayResult, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).instance.gameEvents.on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).GAME_RESET, this.resetUI, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).instance.gameEvents.on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).DEALER_TURN_END, this.flipDealerCards, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).instance.gameEvents.on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).LOCK_INPUT, this.lockInput, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).instance.gameEvents.on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).UNLOCK_INPUT, this.unlockInput, this);
          this.resetUI();
        }

        resetUI() {
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
          this.chipButtons.forEach(chipButton => {
            chipButton.setInteractable(true);
          });
          this.potArea.removeAllChildren();
        }

        onDestroy() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).instance.gameEvents.off((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).CHIP_ENTRY_READY, this.setupChipButtons, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).instance.gameEvents.off((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).ADD_CHIP_UI, this.addChip, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).instance.gameEvents.off((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).UPDATE_BET_VALUE, this.updateBetValue, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).instance.gameEvents.off((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).GAME_STARTED, this.onGameStarted, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).instance.gameEvents.off((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).DEAL_CARD, this.addCardToParticipant, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).instance.gameEvents.off((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).GAME_ENDED, this.displayResult, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).instance.gameEvents.off((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).GAME_RESET, this.resetUI, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).instance.gameEvents.off((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).DEALER_TURN_END, this.flipDealerCards, this);
        }

        setupChipButtons(chipEntries) {
          for (let i = 0; i < chipEntries.length; i++) {
            const entry = chipEntries[i];
            const chipNode = instantiate(this.chipButtonPrefab);
            chipNode.setParent(this.bettingArea);
            const chipButton = chipNode.getComponent(_crd && ChipButton === void 0 ? (_reportPossibleCrUseOfChipButton({
              error: Error()
            }), ChipButton) : ChipButton);
            this.chipButtons.push(chipButton);
            chipButton.setup(entry);
            chipNode.setPosition(0, 0);
          }
        }

        addChip(chipEntry) {
          const baseX = 0;
          const baseY = 0;
          const offsetX = 60;
          const offsetY = 10; // Get current stack count and position

          let stackPositionY = 0;

          if (!this.chipStackPositions.has(chipEntry.value)) {
            this.chipStacks.set(chipEntry.value, 0);
            this.chipStackPositions.set(chipEntry.value, new Vec2(this.chipStackPositions.size, 0));
          }

          let stackCount = this.chipStacks.get(chipEntry.value);
          let stackPositionX = this.chipStackPositions.get(chipEntry.value).x;
          stackPositionY = this.chipStackPositions.get(chipEntry.value).y + 1;

          if (stackCount >= MAX_STACK_PER_TYPE * MAX_STACK_COUNT) {
            console.log('Too many chips for one type, stop displaying new chip');
            return;
          }

          if (stackCount % MAX_STACK_COUNT == 0) {
            stackPositionY = stackPositionY - MAX_STACK_COUNT - 4;
          }

          const chipNode = instantiate(this.chipButtonPrefab);
          chipNode.setParent(this.potArea);
          const chipButton = chipNode.getComponent(_crd && ChipButton === void 0 ? (_reportPossibleCrUseOfChipButton({
            error: Error()
          }), ChipButton) : ChipButton);
          chipButton.setup(chipEntry);
          chipButton.setInteractable(false);
          chipNode.setPosition(baseX + stackPositionX * offsetX, baseY + stackPositionY * offsetY);
          this.chipStacks.set(chipEntry.value, stackCount + 1);
          this.chipStackPositions.set(chipEntry.value, new Vec2(stackPositionX, stackPositionY));
        }

        updateBetValue(betValue) {
          this.totalBet.string = "Bet: $" + betValue;

          if (betValue > 0) {
            this.dealButton.interactable = true;
          } else {
            this.dealButton.interactable = false;
          }
        }

        resetPot() {
          this.potArea.removeAllChildren();
        }

        onGameStarted() {
          this.dealButton.node.active = false;
          this.hitButton.node.active = true;
          this.standButton.node.active = true;
          this.doubleButton.node.active = true;
          this.chipButtons.forEach(chipButton => {
            chipButton.setInteractable(false);
          });
        }

        async addCardToParticipant(participant) {
          let handArea = null;

          if (participant instanceof (_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
            error: Error()
          }), Player) : Player)) {
            handArea = this.playerCardContainer;
          } else if (participant instanceof (_crd && Dealer === void 0 ? (_reportPossibleCrUseOfDealer({
            error: Error()
          }), Dealer) : Dealer)) {
            handArea = this.dealerCardContainer;
          }

          const hand = participant.getHand();

          for (let i = handArea.children.length; i < hand.length; i++) {
            await this.animateCardToHand(participant, handArea);
          }

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).instance.gameEvents.emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).ANIMATION_FINISHED, participant);
        }

        async animateCardToHand(participant, handArea) {
          const hand = participant.getHand();
          const displayedCardCount = handArea.children.length;

          if (displayedCardCount >= hand.length) {
            return;
          }

          const latestCardData = hand[displayedCardCount]; // Get or create visual card node

          const cardNode = instantiate(this.cardPrefab);
          let card = cardNode.addComponent(_crd && Card === void 0 ? (_reportPossibleCrUseOfCard({
            error: Error()
          }), Card) : Card);
          card.init(latestCardData); // Add to scene

          let scoreLabel;

          if (participant instanceof (_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
            error: Error()
          }), Player) : Player)) {
            latestCardData.isFaceDown = false;
            this.playerAnimationInProgress++;
            scoreLabel = this.playerScoreLabel;
          } else if (participant instanceof (_crd && Dealer === void 0 ? (_reportPossibleCrUseOfDealer({
            error: Error()
          }), Dealer) : Dealer)) {
            latestCardData.isFaceDown = displayedCardCount === 0 && !participant.revealAll;
            this.dealerAnimationInProgress++;
            scoreLabel = this.dealerScoreLabel;
          }

          handArea.addChild(cardNode); // Position at deck first

          cardNode.setWorldPosition(this.deckPosition.getWorldPosition()); // Animate to hand position

          const targetPos = this.getCardTargetPosition(displayedCardCount);
          await new Promise(resolve => {
            tween(cardNode).to(0.5, {
              position: targetPos
            }).call(async () => {
              if (!latestCardData.isFaceDown) {
                await card.flipCard();
                this.checkRemainingAnimation(participant);
                scoreLabel.string = 'Hand Value: ' + participant.getHandValue();
              }

              resolve();
            }).start();
          });
        }

        async flipDealerCards() {
          const dealerCardNodes = this.dealerCardContainer.children;

          for (let i = 0; i < dealerCardNodes.length; i++) {
            const cardNode = dealerCardNodes[0];
            const card = cardNode.getComponent(_crd && Card === void 0 ? (_reportPossibleCrUseOfCard({
              error: Error()
            }), Card) : Card);

            if (card.isFaceDown) {
              await card.flipCard();
              this.checkRemainingAnimation(new (_crd && Dealer === void 0 ? (_reportPossibleCrUseOfDealer({
                error: Error()
              }), Dealer) : Dealer)());
            }
          }
        }

        checkRemainingAnimation(participant) {
          if (participant instanceof (_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
            error: Error()
          }), Player) : Player)) {
            this.playerAnimationInProgress--;
          } else if (participant instanceof (_crd && Dealer === void 0 ? (_reportPossibleCrUseOfDealer({
            error: Error()
          }), Dealer) : Dealer)) {
            this.dealerAnimationInProgress--;
          }

          console.log('Player animations left:', this.playerAnimationInProgress, 'Dealer animations left:', this.dealerAnimationInProgress);

          if (this.playerAnimationInProgress <= 0 && participant instanceof (_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
            error: Error()
          }), Player) : Player) || this.dealerAnimationInProgress <= 0 && participant instanceof (_crd && Dealer === void 0 ? (_reportPossibleCrUseOfDealer({
            error: Error()
          }), Dealer) : Dealer)) {
            console.log('All animations finished.');
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).instance.gameEvents.emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
              error: Error()
            }), GameEvent) : GameEvent).ANIMATION_FINISHED, participant);
          }
        }

        getCardTargetPosition(cardIndex) {
          const xOffset = 50;
          const yOffset = -40;
          const x = cardIndex % 13 * xOffset;
          const y = Math.floor(cardIndex / 13) * yOffset;
          return new Vec3(x, y, 0);
        }

        displayResult(result) {
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

        lockInput() {
          this.dealButton.interactable = false;
          this.hitButton.interactable = false;
          this.standButton.interactable = false;
          this.doubleButton.interactable = false;
          this.resetButton.interactable = false;
        }

        unlockInput() {
          this.dealButton.interactable = true;
          this.hitButton.interactable = true;
          this.standButton.interactable = true;
          this.doubleButton.interactable = true;
          this.resetButton.interactable = true;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "cardPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "resultLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "dealButton", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "hitButton", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "standButton", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "doubleButton", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "resetButton", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "deckPosition", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "playerCardContainer", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "playerScoreLabel", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "dealerScoreLabel", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "dealerCardContainer", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "bettingArea", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "potArea", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "chipButtonPrefab", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "totalBet", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=46f54f004130d5ee75546435619fb315ac3bc9a4.js.map