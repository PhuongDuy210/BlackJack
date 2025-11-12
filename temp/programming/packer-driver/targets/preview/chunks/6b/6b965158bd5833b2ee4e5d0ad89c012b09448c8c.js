System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, AudioSource, instantiate, SFXEntry, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, SFXManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfSFXID(extras) {
    _reporterNs.report("SFXID", "./SFXID", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSFXEntry(extras) {
    _reporterNs.report("SFXEntry", "./SFXEntry", _context.meta, extras);
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
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      SFXEntry = _unresolved_2.SFXEntry;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0b72cq4oRhOArFtlZJsdFdL", "SFXManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'AudioSource', 'AudioClip', 'Node', 'Prefab', 'instantiate']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SFXManager", SFXManager = (_dec = ccclass('SFXManager'), _dec2 = property({
        tooltip: 'Use pooling for SFX playback'
      }), _dec3 = property({
        visible() {
          return !this.usePooling;
        }

      }), _dec4 = property({
        visible() {
          return this.usePooling;
        }

      }), _dec5 = property({
        type: [_crd && SFXEntry === void 0 ? (_reportPossibleCrUseOfSFXEntry({
          error: Error()
        }), SFXEntry) : SFXEntry]
      }), _dec(_class = (_class2 = class SFXManager extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "usePooling", _descriptor, this);

          _initializerDefineProperty(this, "singleSFXSource", _descriptor2, this);

          _initializerDefineProperty(this, "sfxAudioSourcePrefab", _descriptor3, this);

          _initializerDefineProperty(this, "sfxEntries", _descriptor4, this);

          this.clipMap = new Map();
          this.sfxPool = [];
          this.maxPoolSize = 10;
        }

        onLoad() {
          this.sfxEntries.forEach(entry => {
            this.clipMap.set(entry.id, entry.clip);
          });

          if (this.usePooling) {
            for (var i = 0; i < this.maxPoolSize; i++) {
              var node = instantiate(this.sfxAudioSourcePrefab);
              node.setParent(this.node);
              node.active = false;
              this.sfxPool.push(node);
            }
          }
        }

        playSFXByID(id, volume) {
          if (volume === void 0) {
            volume = 1.0;
          }

          var clip = this.clipMap.get(id);

          if (clip) {
            this.playSFX(clip, volume);
          } else {
            console.warn("[SFXManager] Clip not found: " + id);
          }
        }

        playSFX(clip, volume) {
          if (volume === void 0) {
            volume = 1.0;
          }

          if (!this.usePooling) {
            this.singleSFXSource.playOneShot(clip, volume);
            return;
          }

          var sourceNode = this.sfxPool.find(n => !n.getComponent(AudioSource).playing);

          if (sourceNode) {
            var audio = sourceNode.getComponent(AudioSource);
            sourceNode.active = true;
            audio.clip = clip;
            audio.volume = volume;
            audio.play();
          } else {
            console.warn('[SFXManager] No available SFX source in pool');
          }
        }

        setVolume(volume) {
          if (!this.usePooling) {
            this.singleSFXSource.volume = volume;
          } else {
            this.sfxPool.forEach(node => {
              node.getComponent(AudioSource).volume = volume;
            });
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "usePooling", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "singleSFXSource", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "sfxAudioSourcePrefab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "sfxEntries", [_dec5], {
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
//# sourceMappingURL=6b965158bd5833b2ee4e5d0ad89c012b09448c8c.js.map