System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, Poolable;

  function _reportPossibleCrUseOfObjectPool(extras) {
    _reporterNs.report("ObjectPool", "./ObjectPool", _context.meta, extras);
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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "68ed1lWa6NO95vvwJkFw7ii", "Poolable", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      // your pool class
      ({
        ccclass,
        property
      } = _decorator);

      _export("Poolable", Poolable = (_dec = ccclass('Poolable'), _dec(_class = class Poolable extends Component {
        constructor() {
          super(...arguments);
          this.pool = null;
        }

        init(pool) {
          this.pool = pool;
        }

        onDisable() {
          if (this.pool) {
            this.pool.push(this.node);
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a541b0cf48229187f1c2d6abd23ab9b5f43826c3.js.map