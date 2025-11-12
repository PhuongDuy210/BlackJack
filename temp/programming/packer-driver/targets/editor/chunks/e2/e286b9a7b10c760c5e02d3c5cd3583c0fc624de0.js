System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Prefab, instantiate, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, ObjectPool;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "92edeS8gnlCTaKfwmaGndni", "ObjectPooling", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab', 'instantiate']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ObjectPool", ObjectPool = (_dec = ccclass('ObjectPool'), _dec2 = property(Prefab), _dec(_class = (_class2 = class ObjectPool extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "objectToPool", _descriptor, this);

          _initializerDefineProperty(this, "amountToPool", _descriptor2, this);

          _initializerDefineProperty(this, "createNew", _descriptor3, this);

          _initializerDefineProperty(this, "recycle", _descriptor4, this);

          this.pooledObjects = [];
          this.spawnedObjects = new SpecialQueue();
        }

        onLoad() {
          for (let i = 0; i < this.amountToPool; i++) {
            const obj = instantiate(this.objectToPool);
            obj.active = false;
            obj.setParent(this.node);
            this.pooledObjects.push(obj);
          }
        }

        popObjectFromPool() {
          for (let i = 0; i < this.pooledObjects.length; i++) {
            const obj = this.pooledObjects[i];

            if (!obj.active) {
              if (this.spawnedObjects.contains(obj)) {
                this.spawnedObjects.remove(obj);
              }

              this.spawnedObjects.enqueue(obj);
              return obj;
            }
          }

          if (this.createNew) {
            const obj = instantiate(this.objectToPool);
            obj.active = false;
            obj.setParent(this.node);
            this.pooledObjects.push(obj);
            this.spawnedObjects.enqueue(obj);
            this.amountToPool++;
            return obj;
          }

          if (this.recycle && this.spawnedObjects.count > 0) {
            const oldest = this.spawnedObjects.dequeue();
            this.spawnedObjects.enqueue(oldest);
            return oldest;
          }

          return null;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "objectToPool", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "amountToPool", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 10;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "createNew", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "recycle", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e286b9a7b10c760c5e02d3c5cd3583c0fc624de0.js.map