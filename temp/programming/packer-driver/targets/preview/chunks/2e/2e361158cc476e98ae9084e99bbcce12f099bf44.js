System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, JsonAsset, resources, SpriteFrame, _dec, _class, _crd, ccclass, property, DeckManager;

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
      JsonAsset = _cc.JsonAsset;
      resources = _cc.resources;
      SpriteFrame = _cc.SpriteFrame;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ed462+8DFFGPJCNknxnkNxE", "DeckManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'JsonAsset', 'Node', 'resources', 'SpriteFrame']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("DeckManager", DeckManager = (_dec = ccclass('DeckManager'), _dec(_class = class DeckManager extends Component {
        constructor() {
          super(...arguments);
          this.deck = [];
        }

        start() {}

        onLoad() {
          resources.load('deck.json', JsonAsset, (err, asset) => {
            if (err) {
              console.error('Failed to load card data:', err);
              return;
            }

            this.deck = asset.json;
            this.loadSprites();
          });
        }

        loadSprites() {
          var _loop = function _loop(card) {
            resources.load("sprites/" + card.sprite + ".png", SpriteFrame, (err, spriteFrame) => {
              if (!err) card.spriteFrame = spriteFrame;
            });
          };

          for (var card of this.deck) {
            _loop(card);
          }
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2e361158cc476e98ae9084e99bbcce12f099bf44.js.map