System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Component, Node, Prefab, instantiate, Vec3, Label, tween, Vec2, EventManager, GameEvent, Card, Player, Dealer, ChipButton, SFXID, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _crd, ccclass, property, MAX_STACK_COUNT, MAX_STACK_PER_TYPE, UIManager;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

  function _reportPossibleCrUseOfSFXID(extras) {
    _reporterNs.report("SFXID", "../AudioSystem/SFXEnums", _context.meta, extras);
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
    }, function (_unresolved_8) {
      SFXID = _unresolved_8.SFXID;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b1d26QNaihKl45SG/arX042", "UIManager", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'Node', 'Prefab', 'instantiate', 'Vec3', 'Label', 'tween', 'UITransform', 'Vec2', 'Game']);

      ({
        ccclass,
        property
      } = _decorator);
      MAX_STACK_COUNT = 5;
      MAX_STACK_PER_TYPE = 4;

      _export("UIManager", UIManager = (_dec = ccclass('UIManager'), _dec2 = property(Prefab), _dec3 = property(Label), _dec4 = property(Button), _dec5 = property(Button), _dec6 = property(Button), _dec7 = property(Button), _dec8 = property(Button), _dec9 = property(Button), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Label), _dec13 = property(Node), _dec14 = property(Label), _dec15 = property(Node), _dec16 = property(Button), _dec17 = property(Node), _dec18 = property(Node), _dec19 = property(Prefab), _dec20 = property(Label), _dec(_class = (_class2 = class UIManager extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "cardPrefab", _descriptor, this);

          _initializerDefineProperty(this, "resultLabel", _descriptor2, this);

          _initializerDefineProperty(this, "dealButton", _descriptor3, this);

          _initializerDefineProperty(this, "hitButton", _descriptor4, this);

          _initializerDefineProperty(this, "standButton", _descriptor5, this);

          _initializerDefineProperty(this, "doubleButton", _descriptor6, this);

          _initializerDefineProperty(this, "resetButton", _descriptor7, this);

          _initializerDefineProperty(this, "splitButton", _descriptor8, this);

          _initializerDefineProperty(this, "deckPosition", _descriptor9, this);

          _initializerDefineProperty(this, "playerCardContainers", _descriptor10, this);

          _initializerDefineProperty(this, "playerScoreLabels", _descriptor11, this);

          _initializerDefineProperty(this, "handIndicators", _descriptor12, this);

          _initializerDefineProperty(this, "dealerScoreLabel", _descriptor13, this);

          _initializerDefineProperty(this, "dealerCardContainer", _descriptor14, this);

          _initializerDefineProperty(this, "potResetButton", _descriptor15, this);

          _initializerDefineProperty(this, "bettingArea", _descriptor16, this);

          _initializerDefineProperty(this, "potArea", _descriptor17, this);

          _initializerDefineProperty(this, "chipButtonPrefab", _descriptor18, this);

          _initializerDefineProperty(this, "totalBet", _descriptor19, this);

          this.chipButtons = [];
          this.chipStacks = new Map();
          this.chipStackPositions = new Map();
          this.playerAnimationInProgress = 0;
          this.dealerAnimationInProgress = 0;
          this.playerHandCount = 0;
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
          }), GameEvent) : GameEvent).SPLIT_HAND, this.animateSplitHand, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).instance.gameEvents.on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).CHANGE_HAND, this.changeHand, this);
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
          this.attachPlaySFXToButton(this.node.parent);
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
          this.splitButton.node.active = false;
          this.playerScoreLabels.forEach(playerScoreLabel => {
            playerScoreLabel.node.active = false;
          });
          this.dealerScoreLabel.node.active = false;
          this.playerCardContainers.forEach(playerCardContainer => {
            playerCardContainer.removeAllChildren();
          });
          this.dealerCardContainer.removeAllChildren();
          this.chipButtons.forEach(chipButton => {
            chipButton.setInteractable(true);
          });
          this.handIndicators.forEach(handIndicator => {
            handIndicator.active = false;
          });
          this.potArea.removeAllChildren();
          this.resetPot();
          this.playerHandCount = 0;
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
          for (var i = 0; i < chipEntries.length; i++) {
            var entry = chipEntries[i];
            var chipNode = instantiate(this.chipButtonPrefab);
            chipNode.setParent(this.bettingArea);
            var chipButton = chipNode.getComponent(_crd && ChipButton === void 0 ? (_reportPossibleCrUseOfChipButton({
              error: Error()
            }), ChipButton) : ChipButton);
            this.chipButtons.push(chipButton);
            chipButton.setup(entry);
            chipNode.setPosition(0, 0);
          }
        }

        addChip(chipEntry) {
          var baseX = 0;
          var baseY = 0;
          var offsetX = 60;
          var offsetY = 10; // Get current stack count and position

          var stackPositionY = 0;

          if (!this.chipStackPositions.has(chipEntry.value)) {
            this.chipStacks.set(chipEntry.value, 0);
            this.chipStackPositions.set(chipEntry.value, new Vec2(this.chipStackPositions.size, 0));
          }

          var stackCount = this.chipStacks.get(chipEntry.value);
          var stackPositionX = this.chipStackPositions.get(chipEntry.value).x;
          stackPositionY = this.chipStackPositions.get(chipEntry.value).y + 1;

          if (stackCount >= MAX_STACK_PER_TYPE * MAX_STACK_COUNT) {
            console.log('Too many chips for one type, stop displaying new chip');
            return;
          }

          if (stackCount % MAX_STACK_COUNT == 0) {
            stackPositionY = stackPositionY - MAX_STACK_COUNT - 4;
          }

          var chipNode = instantiate(this.chipButtonPrefab);
          chipNode.setParent(this.potArea);
          var chipButton = chipNode.getComponent(_crd && ChipButton === void 0 ? (_reportPossibleCrUseOfChipButton({
            error: Error()
          }), ChipButton) : ChipButton);
          chipButton.setup(chipEntry);
          chipButton.setInteractable(false);
          chipNode.setPosition(baseX + stackPositionX * offsetX, baseY + stackPositionY * offsetY);
          this.chipStacks.set(chipEntry.value, stackCount + 1);
          this.chipStackPositions.set(chipEntry.value, new Vec2(stackPositionX, stackPositionY));
          this.potResetButton.interactable = true;
        }

        updateBetValue(betValue) {
          this.totalBet.string = "Bet: $" + betValue;

          if (betValue > 0) {
            this.dealButton.interactable = true;
          } else {
            this.dealButton.interactable = false;
            this.resetPot();
          }
        }

        resetPot() {
          this.potArea.removeAllChildren();
          this.chipStacks.clear();
          this.chipStackPositions.clear();
          this.potResetButton.interactable = false;
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).instance.gameEvents.emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).PLAY_SFX, (_crd && SFXID === void 0 ? (_reportPossibleCrUseOfSFXID({
            error: Error()
          }), SFXID) : SFXID).Chip, this);
        }

        onGameStarted(player) {
          this.dealButton.node.active = false;
          this.hitButton.node.active = true;
          this.standButton.node.active = true;
          this.doubleButton.node.active = true;
          this.chipButtons.forEach(chipButton => {
            chipButton.setInteractable(false);
          });
          this.splitButton.node.active = true;

          if (player.canSplit()) {
            this.splitButton.interactable = true;
          } else {
            this.splitButton.interactable = false;
          }

          this.playerHandCount++;
        }

        addCardToParticipant(participant) {
          var _this = this;

          return _asyncToGenerator(function* () {
            _this.potResetButton.interactable = false;
            var handArea = null;

            if (participant instanceof (_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
              error: Error()
            }), Player) : Player)) {
              var handIndex = participant.getIndex();
              handArea = _this.playerCardContainers[handIndex];
            } else if (participant instanceof (_crd && Dealer === void 0 ? (_reportPossibleCrUseOfDealer({
              error: Error()
            }), Dealer) : Dealer)) {
              handArea = _this.dealerCardContainer;
            }

            var hand = participant.getHand();

            for (var i = handArea.children.length; i < hand.length; i++) {
              yield _this.animateCardToHand(participant, handArea);
            }

            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).instance.gameEvents.emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
              error: Error()
            }), GameEvent) : GameEvent).ANIMATION_FINISHED, participant);
          })();
        }

        animateCardToHand(participant, handArea) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).instance.gameEvents.emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
              error: Error()
            }), GameEvent) : GameEvent).PLAY_SFX, (_crd && SFXID === void 0 ? (_reportPossibleCrUseOfSFXID({
              error: Error()
            }), SFXID) : SFXID).CardDeal);
            var hand = participant.getHand();
            var displayedCardCount = handArea.children.length;

            if (displayedCardCount >= hand.length) {
              return;
            }

            var latestCardData = hand[displayedCardCount]; // Get or create visual card node

            var cardNode = instantiate(_this2.cardPrefab);
            var card = cardNode.addComponent(_crd && Card === void 0 ? (_reportPossibleCrUseOfCard({
              error: Error()
            }), Card) : Card);
            card.init(latestCardData); // Add to scene

            var scoreLabel;

            if (participant instanceof (_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
              error: Error()
            }), Player) : Player)) {
              latestCardData.isFaceDown = false;
              _this2.playerAnimationInProgress++;
              var handIndex = participant.getIndex();
              scoreLabel = _this2.playerScoreLabels[handIndex];
            } else if (participant instanceof (_crd && Dealer === void 0 ? (_reportPossibleCrUseOfDealer({
              error: Error()
            }), Dealer) : Dealer)) {
              latestCardData.isFaceDown = displayedCardCount === 0 && !participant.revealAll;
              _this2.dealerAnimationInProgress++;
              scoreLabel = _this2.dealerScoreLabel;
            }

            handArea.addChild(cardNode); // Position at deck first

            cardNode.setWorldPosition(_this2.deckPosition.getWorldPosition()); // Animate to hand position

            var targetPos = _this2.getCardTargetPosition(displayedCardCount);

            yield new Promise(resolve => {
              tween(cardNode).to(0.5, {
                position: targetPos
              }).call( /*#__PURE__*/_asyncToGenerator(function* () {
                if (!latestCardData.isFaceDown) {
                  if (participant instanceof (_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
                    error: Error()
                  }), Player) : Player)) {
                    console.log('Animating for Player');
                  }

                  yield card.flipCard();

                  if (participant instanceof (_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
                    error: Error()
                  }), Player) : Player)) {
                    console.log('Done animating for Player');
                  }

                  _this2.checkRemainingAnimation(participant);

                  scoreLabel.string = 'Hand Value: ' + participant.getHandValue();
                }
              })).call(resolve).start();
            });
          })();
        }

        flipDealerCards() {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            var dealerCardNodes = _this3.dealerCardContainer.children;

            for (var i = 0; i < dealerCardNodes.length; i++) {
              var cardNode = dealerCardNodes[0];
              var card = cardNode.getComponent(_crd && Card === void 0 ? (_reportPossibleCrUseOfCard({
                error: Error()
              }), Card) : Card);

              if (card.isFaceDown) {
                yield card.flipCard();

                _this3.checkRemainingAnimation(new (_crd && Dealer === void 0 ? (_reportPossibleCrUseOfDealer({
                  error: Error()
                }), Dealer) : Dealer)());
              }
            }
          })();
        }

        animateSplitHand() {
          var _this4 = this;

          return _asyncToGenerator(function* () {
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).instance.gameEvents.emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
              error: Error()
            }), GameEvent) : GameEvent).PLAY_SFX, (_crd && SFXID === void 0 ? (_reportPossibleCrUseOfSFXID({
              error: Error()
            }), SFXID) : SFXID).CardDeal);
            var originHandArea = _this4.playerCardContainers[0];
            var targetHandArea = _this4.playerCardContainers[1];
            var targetCard = originHandArea.children[1];
            var worldPos = targetCard.worldPosition.clone();
            targetCard.removeFromParent();
            targetHandArea.addChild(targetCard);
            targetCard.setWorldPosition(worldPos);

            var targetPos = _this4.getCardTargetPosition(0);

            yield new Promise(resolve => {
              tween(targetCard).to(0.5, {
                position: targetPos
              }).call(resolve).start();
            });
            _this4.splitButton.interactable = false;
            _this4.handIndicators[0].active = true;
            _this4.playerHandCount++;
          })();
        }

        changeHand(handIndex) {
          if (this.playerHandCount == 1) return;
          this.handIndicators.forEach(handIndicator => {
            handIndicator.active = false;
          });
          this.handIndicators[handIndex].active = true;
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
          var xOffset = 50;
          var yOffset = -40;
          var x = cardIndex % 13 * xOffset;
          var y = Math.floor(cardIndex / 13) * yOffset;
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
          this.splitButton.node.active = false;

          for (var i = 0; i < this.playerHandCount; i++) {
            this.playerScoreLabels[i].node.active = true;
          }

          this.handIndicators.forEach(handIndicator => {
            handIndicator.active = false;
          });
          this.dealerScoreLabel.node.active = true;
        }

        attachPlaySFXToButton(root) {
          var buttons = root.getComponentsInChildren(Button);

          for (var button of buttons) {
            button.node.on(Button.EventType.CLICK, this.playButtonSFX, this);
          }
        }

        playButtonSFX() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).instance.gameEvents.emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).PLAY_SFX, (_crd && SFXID === void 0 ? (_reportPossibleCrUseOfSFXID({
            error: Error()
          }), SFXID) : SFXID).ButtonClick);
        }

        lockInput() {
          this.dealButton.interactable = false;
          this.hitButton.interactable = false;
          this.standButton.interactable = false;
          this.doubleButton.interactable = false;
          this.resetButton.interactable = false;
          this.splitButton.interactable = false;
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
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "resultLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "dealButton", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "hitButton", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "standButton", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "doubleButton", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "resetButton", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "splitButton", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "deckPosition", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "playerCardContainers", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "playerScoreLabels", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "handIndicators", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "dealerScoreLabel", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "dealerCardContainer", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "potResetButton", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "bettingArea", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "potArea", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "chipButtonPrefab", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "totalBet", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d76d51828c5103140421a1d5ba9f364e9fed367d.js.map