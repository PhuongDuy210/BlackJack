System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, JsonAsset, resources, SpriteFrame, CardAsset, Deck, EventManager, GameEvent, _dec, _class, _crd, ccclass, property, DeckManager;

  function _reportPossibleCrUseOfCardData(extras) {
    _reporterNs.report("CardData", "../CardData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardAsset(extras) {
    _reporterNs.report("CardAsset", "../CardAsset", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDeck(extras) {
    _reporterNs.report("Deck", "../Deck", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "./EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "../enums/GameEvent", _context.meta, extras);
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
      JsonAsset = _cc.JsonAsset;
      resources = _cc.resources;
      SpriteFrame = _cc.SpriteFrame;
    }, function (_unresolved_2) {
      CardAsset = _unresolved_2.CardAsset;
    }, function (_unresolved_3) {
      Deck = _unresolved_3.Deck;
    }, function (_unresolved_4) {
      EventManager = _unresolved_4.EventManager;
    }, function (_unresolved_5) {
      GameEvent = _unresolved_5.GameEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ed462+8DFFGPJCNknxnkNxE", "DeckManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'JsonAsset', 'Node', 'resources', 'SpriteFrame', 'Prefab', 'instantiate']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("DeckManager", DeckManager = (_dec = ccclass('DeckManager'), _dec(_class = class DeckManager extends Component {
        constructor() {
          super(...arguments);
          this.loadedCardData = [];
          this.cardDeck = null;
        }

        start() {
          var deckCount = this.loadedCardData.length;
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).instance.gameEvents.on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).GAME_RESET, this.resetDeck, this);
        }

        onDestroy() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).instance.gameEvents.off((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).GAME_RESET, this.resetDeck, this);
        }

        onLoad() {
          resources.load('deck', JsonAsset, (err, asset) => {
            if (err) {
              console.error('Failed to load card data:', err);
              return;
            }

            this.loadedCardData = asset.json;
            this.loadSprites();
          });
        }

        loadSprites() {
          var promises = this.loadedCardData.map(card => this.loadSpriteFrame('sprites/Cards/' + card.sprite + '/spriteFrame').then(spriteFrame => {
            card.spriteFrame = spriteFrame;
          }).catch(err => {
            console.error("Failed to load sprite for " + card.rank + " of " + card.suit + ":", err);
          }));
          promises.push((_crd && CardAsset === void 0 ? (_reportPossibleCrUseOfCardAsset({
            error: Error()
          }), CardAsset) : CardAsset).backSpriteFrame ? Promise.resolve() : this.loadSpriteFrame('sprites/Cards/back01/spriteFrame').then(spriteFrame => {
            (_crd && CardAsset === void 0 ? (_reportPossibleCrUseOfCardAsset({
              error: Error()
            }), CardAsset) : CardAsset).backSpriteFrame = spriteFrame;
          }));
          Promise.all(promises).then(() => {
            console.log('All sprites loaded, starting game...');
            this.cardDeck = new (_crd && Deck === void 0 ? (_reportPossibleCrUseOfDeck({
              error: Error()
            }), Deck) : Deck)(this.loadedCardData, 2);
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).instance.gameEvents.emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
              error: Error()
            }), GameEvent) : GameEvent).DECK_LOADED);
          }).catch(err => {
            console.error('Error loading deck:', err);
          });
        }

        loadSpriteFrame(path) {
          return new Promise((resolve, reject) => {
            resources.load(path, SpriteFrame, (err, spriteFrame) => {
              if (err) reject(err);else resolve(spriteFrame);
            });
          });
        }

        loadSpriteAlat() {
          var promise = new Promise((resolve, reject) => {});
        }

        dealCard() {
          if (this.cardDeck) {
            return this.cardDeck.deal();
          }

          return null;
        }

        resetDeck() {
          if (this.loadedCardData.length > 0) {
            console.log('Resetting deck...');
            this.cardDeck.reset(this.loadedCardData, 2);
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).instance.gameEvents.emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
              error: Error()
            }), GameEvent) : GameEvent).DECK_LOADED);
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7c03b8ab4228bd72800b0b723c84568a0d477176.js.map