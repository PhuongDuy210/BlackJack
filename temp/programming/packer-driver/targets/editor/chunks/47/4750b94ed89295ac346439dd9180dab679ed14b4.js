System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, DeckManager, EventManager, GameEvent, GameState, Player, Dealer, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, GameManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfDeck(extras) {
    _reporterNs.report("Deck", "../Deck", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDeckManager(extras) {
    _reporterNs.report("DeckManager", "./DeckManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "./EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "../enums/GameEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameState(extras) {
    _reporterNs.report("GameState", "../enums/GameState", _context.meta, extras);
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
      Component = _cc.Component;
    }, function (_unresolved_2) {
      DeckManager = _unresolved_2.DeckManager;
    }, function (_unresolved_3) {
      EventManager = _unresolved_3.EventManager;
    }, function (_unresolved_4) {
      GameEvent = _unresolved_4.GameEvent;
    }, function (_unresolved_5) {
      GameState = _unresolved_5.GameState;
    }, function (_unresolved_6) {
      Player = _unresolved_6.Player;
    }, function (_unresolved_7) {
      Dealer = _unresolved_7.Dealer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "08c86QVXQtNfqsdntmI/7E9", "GameManager", undefined);

      __checkObsolete__(['_decorator', 'Component']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameManager", GameManager = (_dec = ccclass('GameManager'), _dec2 = property(_crd && DeckManager === void 0 ? (_reportPossibleCrUseOfDeckManager({
        error: Error()
      }), DeckManager) : DeckManager), _dec(_class = (_class2 = class GameManager extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "deckManager", _descriptor, this);

          this.player = new (_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
            error: Error()
          }), Player) : Player)('Player 1');
          this.dealer = new (_crd && Dealer === void 0 ? (_reportPossibleCrUseOfDealer({
            error: Error()
          }), Dealer) : Dealer)();
          this.gameState = (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).InitialDeal;
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
          }), GameEvent) : GameEvent).ANIMATION_FINISHED, this.onAnimationFinished, this);
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
          }), GameEvent) : GameEvent).ANIMATION_FINISHED, this.onAnimationFinished, this);
        }

        onDeckLoaded(deck) {
          // Start the game logic here, e.g., deal initial cards
          console.log('Game started with deck:', deck);
        }

        initialDeal() {
          for (let i = 0; i < 2; i++) {
            const playerCardData = this.deckManager.dealCard();
            const dealerCardData = this.deckManager.dealCard();

            if (playerCardData) {
              this.player.addCard(playerCardData);
            }

            if (dealerCardData) {
              this.dealer.addCard(dealerCardData);
            }
          } // EventManager.instance.gameEvents.emit(GameEvent.GAME_STARTED);


          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).instance.gameEvents.emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).DEAL_CARD, this.player);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).instance.gameEvents.emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).DEAL_CARD, this.dealer); // Check for immediate blackjack

          if (this.player.hasBlackjack() || this.dealer.hasBlackjack()) {
            this.dealer.revealAll = true;
            this.endGame();
          }
        }

        onAnimationFinished(participant) {
          if (this.gameState === (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).InitialDeal && participant instanceof (_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
            error: Error()
          }), Player) : Player)) {
            this.gameState = (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
              error: Error()
            }), GameState) : GameState).PlayerTurn;
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).instance.gameEvents.emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
              error: Error()
            }), GameEvent) : GameEvent).GAME_STARTED);
          }

          if (this.gameState === (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).DealerTurn && participant instanceof (_crd && Dealer === void 0 ? (_reportPossibleCrUseOfDealer({
            error: Error()
          }), Dealer) : Dealer)) {
            this.determineWinner();
          }

          if (this.gameState === (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).GameEnd) {
            const result = this.determineWinner();
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).instance.gameEvents.emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
              error: Error()
            }), GameEvent) : GameEvent).GAME_ENDED, result);
          }
        }

        playerHit() {
          const cardData = this.deckManager.dealCard();

          if (cardData) {
            this.player.addCard(cardData);
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).instance.gameEvents.emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
              error: Error()
            }), GameEvent) : GameEvent).DEAL_CARD, this.player);
          }

          if (this.player.isBusted()) {
            console.log('Player busted with hand:', this.player.getHand());
            this.dealerPlay();
          }
        }

        playerStand() {
          console.log('Player stands with hand:', this.player.getHand());
          this.dealerPlay();
        }

        playerDouble() {
          const cardData = this.deckManager.dealCard();

          if (cardData) {
            this.player.addCard(cardData);
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).instance.gameEvents.emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
              error: Error()
            }), GameEvent) : GameEvent).DEAL_CARD, this.player);
          }

          this.dealer.revealAll = true;
          this.dealerPlay();
        }

        dealerPlay() {
          while (this.dealer.shouldHit() && !this.player.isBusted()) {
            const cardData = this.deckManager.dealCard();

            if (cardData) {
              this.dealer.addCard(cardData);
              console.log('Dealer hits and receives:', cardData);
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).instance.gameEvents.emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
                error: Error()
              }), GameEvent) : GameEvent).DEAL_CARD, this.dealer);
            }
          }

          console.log('Dealer Hand now:', this.dealer.getHand());
          this.dealer.revealAll = true;
          this.endGame();
        }

        determineWinner() {
          const playerValue = this.player.getHandValue();
          const dealerValue = this.dealer.getHandValue();
          let result = '';

          if (this.player.hasBlackjack() && this.dealer.hasBlackjack()) {
            result = 'It\'s a tie with both having Blackjack!';
          } else if (this.player.hasBlackjack()) {
            result = 'Player wins with Blackjack!';
          } else if (this.dealer.hasBlackjack()) {
            result = 'Dealer wins with Blackjack!';
          }

          if (this.player.isBusted()) {
            result = 'Dealer wins! Player busted.';
          } else if (this.dealer.isBusted()) {
            result = 'Player wins! Dealer busted.';
          } else if (playerValue > dealerValue) {
            result = 'Player wins!';
          } else if (dealerValue > playerValue) {
            result = 'Dealer wins!';
          } else {
            result = 'It\'s a tie!';
          }

          return result;
        }

        endGame() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).instance.gameEvents.emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).DEALER_TURN_END);
          this.gameState = (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).GameEnd;
        }

        resetGame() {
          this.player.resetHand();
          this.dealer.resetHand();
          this.dealer.revealAll = false;
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).instance.gameEvents.emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).GAME_RESET);
          this.gameState = (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).InitialDeal;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "deckManager", [_dec2], {
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
//# sourceMappingURL=4750b94ed89295ac346439dd9180dab679ed14b4.js.map