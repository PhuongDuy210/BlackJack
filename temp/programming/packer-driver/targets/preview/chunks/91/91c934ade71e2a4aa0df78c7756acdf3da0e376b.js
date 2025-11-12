System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, GameManager;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "08c86QVXQtNfqsdntmI/7E9", "GameManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'JsonAsset', 'Node', 'resources', 'SpriteFrame', 'Prefab', 'instantiate']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameManager", GameManager = (_dec = ccclass('DeckManager'), _dec(_class = class GameManager extends Component {
        constructor() {
          super(...arguments);
          this.player = void 0;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=91c934ade71e2a4aa0df78c7756acdf3da0e376b.js.map