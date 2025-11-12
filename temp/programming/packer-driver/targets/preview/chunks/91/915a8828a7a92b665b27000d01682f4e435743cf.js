System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, JsonAsset, resources, SpriteFrame, Prefab, instantiate, Card, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, DeckManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCardData(extras) {
    _reporterNs.report("CardData", "./CardData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCard(extras) {
    _reporterNs.report("Card", "./Card", _context.meta, extras);
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
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      Card = _unresolved_2.Card;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ed462+8DFFGPJCNknxnkNxE", "DeckManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'JsonAsset', 'Node', 'resources', 'SpriteFrame', 'Prefab', 'instantiate']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("DeckManager", DeckManager = (_dec = ccclass('DeckManager'), _dec2 = property(Prefab), _dec(_class = (_class2 = class DeckManager extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "cardPrefab", _descriptor, this);

          this.loadedCardData = [];
        }

        start() {
          var deckCount = this.loadedCardData.length;

          for (var i = 0; i < deckCount; i++) {
            var cardData = this.loadedCardData[i];
          }

          this.shuffleDeck(this.deck);
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
          Promise.all(promises).then(() => {
            console.log('All sprites loaded, starting game...');
            this.initCardDeck();
          }).catch(err => {
            console.error('Error loading sprites:', err);
          });
        }

        loadSpriteFrame(path) {
          return new Promise((resolve, reject) => {
            resources.load(path, SpriteFrame, (err, spriteFrame) => {
              if (err) reject(err);else resolve(spriteFrame);
            });
          });
        }

        initCardDeck(loadedCardData) {
          var deckCount = this.loadedCardData.length;

          for (var i = 0; i < deckCount; i++) {
            var cardData = this.loadedCardData[i];
            console.log('Creating card:', cardData.rank, 'of', cardData.suit, cardData.spriteFrame);
            var cardNode = instantiate(this.cardPrefab);
            cardNode.setPosition(i % 13 * 30, Math.floor(i / 13) * -40, 0);
            this.node.addChild(cardNode);
            var card = cardNode.addComponent(_crd && Card === void 0 ? (_reportPossibleCrUseOfCard({
              error: Error()
            }), Card) : Card);
            card.init(cardData);
          }
        }

        shuffleDeck(deck) {
          for (var i = deck.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]]; // Swap
          }
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "cardPrefab", [_dec2], {
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
//# sourceMappingURL=915a8828a7a92b665b27000d01682f4e435743cf.js.map