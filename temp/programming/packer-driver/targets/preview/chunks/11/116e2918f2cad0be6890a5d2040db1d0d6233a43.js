System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Component, Node, Prefab, instantiate, Vec3, Label, tween, EventManager, GameEvent, Card, Player, Dealer, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _crd, ccclass, property, UIManager;

  function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b1d26QNaihKl45SG/arX042", "UIManager", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'Node', 'Prefab', 'instantiate', 'Vec3', 'Label', 'tween']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UIManager", UIManager = (_dec = ccclass('UIManager'), _dec2 = property(Prefab), _dec3 = property(Label), _dec4 = property(Button), _dec5 = property(Button), _dec6 = property(Button), _dec7 = property(Button), _dec8 = property(Button), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec(_class = (_class2 = class UIManager extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "cardPrefab", _descriptor, this);

          _initializerDefineProperty(this, "resultLabel", _descriptor2, this);

          _initializerDefineProperty(this, "dealButton", _descriptor3, this);

          _initializerDefineProperty(this, "hitButton", _descriptor4, this);

          _initializerDefineProperty(this, "standButton", _descriptor5, this);

          _initializerDefineProperty(this, "doubleButton", _descriptor6, this);

          _initializerDefineProperty(this, "resetButton", _descriptor7, this);

          _initializerDefineProperty(this, "deckPosition", _descriptor8, this);

          _initializerDefineProperty(this, "playerCardContainer", _descriptor9, this);

          _initializerDefineProperty(this, "dealerCardContainer", _descriptor10, this);

          this.playerCardNodes = [];
          this.dealerCardNodes = [];
        }

        start() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).instance.gameEvents.on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).DECK_LOADED, this.onDeckLoaded, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).instance.gameEvents.on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).GAME_STARTED, this.onGameStarted, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).instance.gameEvents.on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).CARD_DEALED, this.addCardToParticipant, this);
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
          this.playerCardContainer.removeAllChildren();
          this.dealerCardContainer.removeAllChildren();
        }

        onDestroy() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).instance.gameEvents.off((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).DECK_LOADED, this.onDeckLoaded, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).instance.gameEvents.off((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).GAME_STARTED, this.onGameStarted, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).instance.gameEvents.off((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).CARD_DEALED, this.addCardToParticipant, this);
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
        }

        onDeckLoaded() {
          this.dealButton.interactable = true;
        }

        onGameStarted() {
          this.dealButton.node.active = false;
          this.hitButton.node.active = true;
          this.standButton.node.active = true;
          this.doubleButton.node.active = true;
        }

        addCardToParticipant(participant) {
          var _this = this;

          return _asyncToGenerator(function* () {
            var handArea = null;

            if (participant instanceof (_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
              error: Error()
            }), Player) : Player)) {
              handArea = _this.playerCardContainer;
            } else if (participant instanceof (_crd && Dealer === void 0 ? (_reportPossibleCrUseOfDealer({
              error: Error()
            }), Dealer) : Dealer)) {
              handArea = _this.dealerCardContainer;
            }

            var hand = participant.getHand();

            for (var i = handArea.children.length; i < hand.length; i++) {
              yield _this.animateCardToHand(participant, handArea);
            }
          })();
        }

        animateCardToHand(participant, handArea) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            var hand = participant.getHand();
            var displayedCardCount = handArea.children.length;
            var latestCardData = hand[displayedCardCount]; // Get or create visual card node

            var cardNode = instantiate(_this2.cardPrefab);
            var card = cardNode.addComponent(_crd && Card === void 0 ? (_reportPossibleCrUseOfCard({
              error: Error()
            }), Card) : Card);
            card.init(latestCardData); // Position at deck first

            cardNode.setWorldPosition(_this2.deckPosition.getWorldPosition()); // Add to scene

            if (participant instanceof (_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
              error: Error()
            }), Player) : Player)) {
              latestCardData.isFaceDown = false;
            } else if (participant instanceof (_crd && Dealer === void 0 ? (_reportPossibleCrUseOfDealer({
              error: Error()
            }), Dealer) : Dealer)) {
              latestCardData.isFaceDown = displayedCardCount === 0 && !participant.revealAll;
            }

            handArea.addChild(cardNode); // Animate to hand position

            var targetPos = _this2.getCardTargetPosition(displayedCardCount);

            console.log("Animating card " + latestCardData.rank + " of " + latestCardData.suit + " to " + (participant instanceof (_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
              error: Error()
            }), Player) : Player) ? 'Player' : 'Dealer') + "'s hand");
            yield new Promise(resolve => {
              tween(cardNode).to(0.5, {
                position: targetPos
              }).call(() => {
                if (!latestCardData.isFaceDown) {
                  card.flipCard();
                }

                resolve();
              }).start();
            });
            console.log("Card " + latestCardData.rank + " of " + latestCardData.suit + " animated to hand");
          })();
        }

        updateCardDisplay(hand) {
          if (hand instanceof (_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
            error: Error()
          }), Player) : Player)) {
            // Update player card display
            var cardDataList = hand.getHand();
            this.playerCardContainer.removeAllChildren();

            for (var i = 0; i < cardDataList.length; i++) {
              var cardData = _extends({}, cardDataList[i]); // Clone to avoid mutating original


              var cardNode = instantiate(this.cardPrefab);
              this.playerCardNodes.push(cardNode);
              cardNode.setPosition(i % 13 * 30, Math.floor(i / 13) * -40, 0);
              this.playerCardContainer.addChild(cardNode);
              var card = cardNode.addComponent(_crd && Card === void 0 ? (_reportPossibleCrUseOfCard({
                error: Error()
              }), Card) : Card);
              card.init(cardData);
            }
          } else if (hand instanceof (_crd && Dealer === void 0 ? (_reportPossibleCrUseOfDealer({
            error: Error()
          }), Dealer) : Dealer)) {
            // Update dealer card display
            var _cardDataList = hand.getHand();

            for (var _i = 0; _i < _cardDataList.length; _i++) {
              var _cardData = _extends({}, _cardDataList[_i]); // Clone to avoid mutating original


              _cardData.isFaceDown = _i === 0 && !hand.revealAll;

              var _cardNode = instantiate(this.cardPrefab);

              this.dealerCardNodes.push(_cardNode);

              _cardNode.setPosition(_i % 13 * 30, Math.floor(_i / 13) * -40, 0);

              this.dealerCardContainer.addChild(_cardNode);

              var _card = _cardNode.addComponent(_crd && Card === void 0 ? (_reportPossibleCrUseOfCard({
                error: Error()
              }), Card) : Card);

              _card.init(_cardData);
            }
          }
        }

        getCardTargetPosition(cardIndex) {
          var xOffset = 30;
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
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "deckPosition", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "playerCardContainer", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "dealerCardContainer", [_dec11], {
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
//# sourceMappingURL=116e2918f2cad0be6890a5d2040db1d0d6233a43.js.map