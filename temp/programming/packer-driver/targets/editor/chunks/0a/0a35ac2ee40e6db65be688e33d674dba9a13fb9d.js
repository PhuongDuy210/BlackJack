System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, JsonAsset, resources, SpriteFrame, Deck, EventManager, GameEvent, _dec, _class, _crd, ccclass, property, DeckManager;

  function _reportPossibleCrUseOfCardData(extras) {
    _reporterNs.report("CardData", "../CardData", _context.meta, extras);
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
      Deck = _unresolved_2.Deck;
    }, function (_unresolved_3) {
      EventManager = _unresolved_3.EventManager;
    }, function (_unresolved_4) {
      GameEvent = _unresolved_4.GameEvent;
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
        constructor(...args) {
          super(...args);
          this.loadedCardData = [];
          this.cardDeck = null;
        }

        start() {
          let deckCount = this.loadedCardData.length;

          for (let i = 0; i < deckCount; i++) {
            const cardData = this.loadedCardData[i];
          }
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
          const promises = this.loadedCardData.map(card => this.loadSpriteFrame('sprites/Cards/' + card.sprite + '/spriteFrame').then(spriteFrame => {
            card.spriteFrame = spriteFrame;
          }).catch(err => {
            console.error(`Failed to load sprite for ${card.rank} of ${card.suit}:`, err);
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

        dealCard() {
          if (this.cardDeck) {
            return this.cardDeck.deal();
          }

          return null;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0a35ac2ee40e6db65be688e33d674dba9a13fb9d.js.map