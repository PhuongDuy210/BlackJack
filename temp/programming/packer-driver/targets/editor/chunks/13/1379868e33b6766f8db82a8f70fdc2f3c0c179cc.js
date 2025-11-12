System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Prefab, instantiate, Enum, Vec3, PoolExhaustedBehavior, Poolable, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, ObjectPool;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfPoolExhaustedBehavior(extras) {
    _reporterNs.report("PoolExhaustedBehavior", "./PoolExhaustedBehavior", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPoolable(extras) {
    _reporterNs.report("Poolable", "./Poolable", _context.meta, extras);
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
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      Enum = _cc.Enum;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      PoolExhaustedBehavior = _unresolved_2.PoolExhaustedBehavior;
    }, function (_unresolved_3) {
      Poolable = _unresolved_3.Poolable;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dcb0dg8K4xBbqzH5L9Py4kP", "ObjectPool", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab', 'instantiate', 'Enum', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ObjectPool", ObjectPool = (_dec = ccclass('ObjectPool'), _dec2 = property(Prefab), _dec3 = property({
        type: Enum(_crd && PoolExhaustedBehavior === void 0 ? (_reportPossibleCrUseOfPoolExhaustedBehavior({
          error: Error()
        }), PoolExhaustedBehavior) : PoolExhaustedBehavior)
      }), _dec4 = property({
        visible() {
          return this.exhaustBehavior === (_crd && PoolExhaustedBehavior === void 0 ? (_reportPossibleCrUseOfPoolExhaustedBehavior({
            error: Error()
          }), PoolExhaustedBehavior) : PoolExhaustedBehavior).ExpandWithLimit;
        }

      }), _dec(_class = (_class2 = class ObjectPool extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "objectToPool", _descriptor, this);

          _initializerDefineProperty(this, "amountToPool", _descriptor2, this);

          _initializerDefineProperty(this, "exhaustBehavior", _descriptor3, this);

          _initializerDefineProperty(this, "maxPoolSize", _descriptor4, this);

          this.availableNodes = [];
          this.spawnedNodes = new SpecialQueue();
        }

        onLoad() {
          for (let i = 0; i < this.amountToPool; i++) {
            const obj = instantiate(this.objectToPool);
            let poolable = obj.getComponent(_crd && Poolable === void 0 ? (_reportPossibleCrUseOfPoolable({
              error: Error()
            }), Poolable) : Poolable) || obj.addComponent(_crd && Poolable === void 0 ? (_reportPossibleCrUseOfPoolable({
              error: Error()
            }), Poolable) : Poolable);
            poolable.init(this);
            obj.active = false;
            obj.setParent(this.node);
            this.availableNodes.push(obj);
          }
        }

        pop() {
          if (this.availableNodes.length > 0) {
            let node = this.availableNodes.pop();
            this.spawnedNodes.enqueue(node);
            return node;
          } // Can't find an available Node (Pool Exhausted)


          if (this.exhaustBehavior == (_crd && PoolExhaustedBehavior === void 0 ? (_reportPossibleCrUseOfPoolExhaustedBehavior({
            error: Error()
          }), PoolExhaustedBehavior) : PoolExhaustedBehavior).CreateNew) {
            const obj = instantiate(this.objectToPool);
            let poolable = obj.getComponent(_crd && Poolable === void 0 ? (_reportPossibleCrUseOfPoolable({
              error: Error()
            }), Poolable) : Poolable) || obj.addComponent(_crd && Poolable === void 0 ? (_reportPossibleCrUseOfPoolable({
              error: Error()
            }), Poolable) : Poolable);
            poolable.init(this);
            obj.active = false;
            obj.setParent(this.node);
            this.spawnedNodes.enqueue(obj);
            this.amountToPool++;
            return obj;
          }

          if (this.exhaustBehavior == (_crd && PoolExhaustedBehavior === void 0 ? (_reportPossibleCrUseOfPoolExhaustedBehavior({
            error: Error()
          }), PoolExhaustedBehavior) : PoolExhaustedBehavior).Recycle && this.spawnedNodes.count > 0) {
            const oldest = this.spawnedNodes.dequeue();
            this.spawnedNodes.enqueue(oldest);
            return oldest;
          }

          return null;
        }

        push(node) {
          node.active = false;
          node.setPosition(Vec3.ZERO);

          if (this.availableNodes.findIndex(n => n === node) === -1) {
            this.availableNodes.push(node);
          }

          this.spawnedNodes.remove(node);
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "exhaustBehavior", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return (_crd && PoolExhaustedBehavior === void 0 ? (_reportPossibleCrUseOfPoolExhaustedBehavior({
            error: Error()
          }), PoolExhaustedBehavior) : PoolExhaustedBehavior).CreateNew;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "maxPoolSize", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 50;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1379868e33b6766f8db82a8f70fdc2f3c0c179cc.js.map