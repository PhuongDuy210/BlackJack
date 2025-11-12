System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Sprite, _dec, _class, _crd, ccclass, property, Card;

  function _reportPossibleCrUseOfCardData(extras) {
    _reporterNs.report("CardData", "./CardData", _context.meta, extras);
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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e396avruaJIdbdNpR39MdzA", "Card", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Sprite', 'Label', 'SpriteFrame']);

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
        }

        onLoad() {
          this.cardSprite = this.node.getComponent(Sprite);
        }

        init(cardData) {
          this.suit = cardData.suit;
          this.rank = cardData.rank;
          this.values = cardData.values;

          if (this.cardSprite) {
            console.log('Setting sprite frame for', cardData.rank, 'of', cardData.suit, cardData.spriteFrame);
            this.cardSprite.spriteFrame = cardData.spriteFrame;
          }

          this.node.name = cardData.rank + "_of_" + cardData.suit;
        } // Optional: expose card value logic


        getValues() {
          return this.values;
        }

        getName() {
          return this.rank + " of " + this.suit;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=90c8ea617ce854d45f0b49ef1d51ebc5f9768a16.js.map