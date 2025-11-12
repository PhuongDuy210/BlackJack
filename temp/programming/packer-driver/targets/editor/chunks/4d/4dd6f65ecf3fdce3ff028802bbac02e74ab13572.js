System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Enum, AudioClip, SFXID, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, SFXEntry;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfSFXID(extras) {
    _reporterNs.report("SFXID", "./SFXID", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Enum = _cc.Enum;
      AudioClip = _cc.AudioClip;
    }, function (_unresolved_2) {
      SFXID = _unresolved_2.SFXID;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "471af6pXA5Iwqgv8g5QsV4C", "SFXEntry", undefined);

      __checkObsolete__(['_decorator', 'Enum', 'AudioClip']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SFXEntry", SFXEntry = (_dec = ccclass('SFXEntry'), _dec2 = property({
        type: Enum(_crd && SFXID === void 0 ? (_reportPossibleCrUseOfSFXID({
          error: Error()
        }), SFXID) : SFXID)
      }), _dec3 = property({
        type: AudioClip
      }), _dec(_class = (_class2 = class SFXEntry {
        constructor() {
          _initializerDefineProperty(this, "id", _descriptor, this);

          _initializerDefineProperty(this, "clip", _descriptor2, this);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "id", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return (_crd && SFXID === void 0 ? (_reportPossibleCrUseOfSFXID({
            error: Error()
          }), SFXID) : SFXID).ButtonClick;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "clip", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4dd6f65ecf3fdce3ff028802bbac02e74ab13572.js.map