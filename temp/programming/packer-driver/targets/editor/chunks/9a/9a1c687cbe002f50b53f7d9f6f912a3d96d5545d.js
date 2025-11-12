System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Sprite, tween, Vec3, CardAsset, _dec, _class, _crd, ccclass, property, Card;

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
        constructor(...args) {
          super(...args);
          this.cardSprite = null;
          this.rankLabel = null;
          this.suitLabel = null;
          this.suit = '';
          this.rank = '';
          this.values = [];
          this.isFaceDown = true;
        }

        onLoad() {
          this.cardSprite = this.node.getComponent(Sprite);
        }

        init(cardData) {
          this.suit = cardData.suit;
          this.rank = cardData.rank;
          this.values = cardData.values;

          if (cardData.isFaceDown) {
            this.cardSprite.spriteFrame = (_crd && CardAsset === void 0 ? (_reportPossibleCrUseOfCardAsset({
              error: Error()
            }), CardAsset) : CardAsset).backSpriteFrame;
          }

          if (!cardData.isFaceDown && cardData.spriteFrame) {
            this.cardSprite.spriteFrame = cardData.spriteFrame;
          }

          this.node.name = `${cardData.rank}_of_${cardData.suit}`;
        }

        getValues() {
          return this.values;
        }

        getName() {
          return `${this.rank} of ${this.suit}`;
        }

        flipCard(cardData) {
          // Flip from front to back
          const cardScale = this.node.scale.clone();
          tween(this.node).to(0.2, {
            scale: new Vec3(0, cardScale.y, cardScale.z)
          }) // Shrink to edge
          .call(() => {
            // Swap sprite/frame here
            this.cardSprite.spriteFrame = (_crd && CardAsset === void 0 ? (_reportPossibleCrUseOfCardAsset({
              error: Error()
            }), CardAsset) : CardAsset).backSpriteFrame;
          }).to(0.2, {
            scale: cardScale
          }) // Expand back out
          .start();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9a1c687cbe002f50b53f7d9f6f912a3d96d5545d.js.map