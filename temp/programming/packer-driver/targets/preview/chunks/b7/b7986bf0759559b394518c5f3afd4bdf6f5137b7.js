System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, AudioSource, BGMEntry, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, BGMManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBGMID(extras) {
    _reporterNs.report("BGMID", "./BGMID", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBGMEntry(extras) {
    _reporterNs.report("BGMEntry", "./BGMEntry", _context.meta, extras);
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
      AudioSource = _cc.AudioSource;
    }, function (_unresolved_2) {
      BGMEntry = _unresolved_2.BGMEntry;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d8b0frQPh5OJqG1Am8NUgt0", "BGMManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'AudioSource', 'AudioClip', 'instantiate']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BGMManager", BGMManager = (_dec = ccclass('BGMManager'), _dec2 = property(AudioSource), _dec3 = property({
        type: [_crd && BGMEntry === void 0 ? (_reportPossibleCrUseOfBGMEntry({
          error: Error()
        }), BGMEntry) : BGMEntry]
      }), _dec(_class = (_class2 = class BGMManager extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "bgmSource", _descriptor, this);

          _initializerDefineProperty(this, "bgmEntries", _descriptor2, this);

          this.bgmMap = new Map();
        }

        onLoad() {
          for (var entry of this.bgmEntries) {
            this.bgmMap.set(entry.id, entry.clip);
          }
        }

        playBGM(id, loop) {
          if (loop === void 0) {
            loop = true;
          }

          var clip = this.bgmMap.get(id);
          if (!clip) return;
          this.bgmSource.stop();
          this.bgmSource.clip = clip;
          this.bgmSource.loop = loop;
          this.bgmSource.play();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bgmSource", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bgmEntries", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b7986bf0759559b394518c5f3afd4bdf6f5137b7.js.map