System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Sprite, tween, Vec3, CardAsset, _dec, _class, _crd, ccclass, property, Card;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfCardData(extras) {
    _reporterNs.report("CardData", "./CardData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardAsset(extras) {
    _reporterNs.report("CardAsset", "./CardAsset", _context.meta, extras);
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
      Sprite = _cc.Sprite;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      CardAsset = _unresolved_2.CardAsset;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e396avruaJIdbdNpR39MdzA", "Card", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Sprite', 'Label', 'SpriteFrame', 'tween', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Card", Card = (_dec = ccclass('Card'), _dec(_class = class Card extends Component {
        constructor() {
          super(...arguments);
          this.cardSprite = null;
          this.rankLabel = null;
          this.suitLabel = null;
          this.suit = '';
          this.rank = '';
          this.values = [];
          this.isFaceDown = true;
          this.cardData = null;
        }

        onLoad() {
          this.cardSprite = this.node.getComponent(Sprite);
        }

        init(cardData) {
          this.suit = cardData.suit;
          this.rank = cardData.rank;
          this.values = cardData.values;

          if (!this.cardSprite) {
            this.cardSprite = this.node.getComponent(Sprite);
          }

          this.cardSprite.spriteFrame = (_crd && CardAsset === void 0 ? (_reportPossibleCrUseOfCardAsset({
            error: Error()
          }), CardAsset) : CardAsset).backSpriteFrame;
          this.node.name = cardData.rank + "_of_" + cardData.suit;
          this.cardData = cardData;
        }

        getValues() {
          return this.values;
        }

        getName() {
          return this.rank + " of " + this.suit;
        }

        flipCard() {
          var _this = this;

          return _asyncToGenerator(function* () {
            // Flip from front to back
            var cardScale = _this.node.scale.clone();

            console.log('Flipping card:', _this.getName(), 'Is face down:', _this.cardData.isFaceDown);
            yield new Promise(resolve => {
              tween(_this.node).to(0.2, {
                scale: new Vec3(0, cardScale.y, cardScale.z)
              }) // Shrink to edge
              .call(() => {
                // Swap sprite/frame here
                if (_this.isFaceDown) {
                  _this.cardSprite.spriteFrame = _this.cardData.spriteFrame;
                } else {
                  _this.cardSprite.spriteFrame = (_crd && CardAsset === void 0 ? (_reportPossibleCrUseOfCardAsset({
                    error: Error()
                  }), CardAsset) : CardAsset).backSpriteFrame;
                }
              }).to(0.2, {
                scale: cardScale
              }) // Expand back out
              .call(() => {
                _this.isFaceDown = !_this.isFaceDown;
                console.log('Card flipped:', _this.getName(), 'Is face down now:', _this.isFaceDown);
                resolve();
              }).start();
            });
          })();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e9eaf53ac1a91eb332a7f00d6ed38b595fb2ee72.js.map