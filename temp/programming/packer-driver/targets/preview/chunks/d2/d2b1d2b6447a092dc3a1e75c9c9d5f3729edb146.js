System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, JsonAsset, resources, SpriteFrame, SpriteAtlas, EventManager, GameEvent, _dec, _class, _crd, ccclass, property, DeckManager;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
      SpriteAtlas = _cc.SpriteAtlas;
    }, function (_unresolved_2) {
      EventManager = _unresolved_2.EventManager;
    }, function (_unresolved_3) {
      GameEvent = _unresolved_3.GameEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ed462+8DFFGPJCNknxnkNxE", "DeckManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'JsonAsset', 'Node', 'resources', 'SpriteFrame', 'SpriteAtlas', 'instantiate']);

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

        loadSprites() {// const promises = this.loadedCardData.map(card =>
          //     this.loadSpriteFrame('sprites/Cards/'+card.sprite+'/spriteFrame').then(spriteFrame => {
          //         card.spriteFrame = spriteFrame;
          //     }).catch(err => {
          //         console.error(`Failed to load sprite for ${card.rank} of ${card.suit}:`, err);
          //     })
          // );
          // promises.push(CardAsset.backSpriteFrame ? Promise.resolve() : this.loadSpriteFrame('sprites/Cards/back01/spriteFrame').then(spriteFrame => {
          //     CardAsset.backSpriteFrame = spriteFrame;
          // }));
          // Promise.all(promises).then(() => {
          //     console.log('All sprites loaded, starting game...');
          //     this.cardDeck = new Deck(this.loadedCardData, 2);
          //     EventManager.instance.gameEvents.emit(GameEvent.DECK_LOADED);
          // }).catch(err => {
          //     console.error('Error loading deck:', err);
          // });
        }

        loadSpriteFrame(path) {
          return new Promise((resolve, reject) => {
            resources.load(path, SpriteFrame, (err, spriteFrame) => {
              if (err) reject(err);else resolve(spriteFrame);
            });
          });
        }

        loadSpriteAtlas() {
          return new Promise((resolve, reject) => {
            resources.load('Cards/card/spriteAtlas'), SpriteAtlas, (err, atlas) => {
              if (err) reject(err);else resolve(atlas);
            };
          });
        }

        loadSpriteFromAtlas() {
          var _this = this;

          return _asyncToGenerator(function* () {
            var atlas = yield _this.loadSpriteAtlas();

            _this.loadedCardData.map(card => {
              var frame = atlas.getSpriteFrame(card.sprite);

              if (frame) {
                card.spriteFrame = frame;
              } else {
                console.error('Failed to load spriteFrame:' + card.sprite);
              }
            });
          })();
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
//# sourceMappingURL=d2b1d2b6447a092dc3a1e75c9c9d5f3729edb146.js.map