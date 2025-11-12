System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, AudioSource, Prefab, instantiate, SFXEntry, EventManager, GameEvent, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, SFXManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfSFXID(extras) {
    _reporterNs.report("SFXID", "./SFXEnums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSFXGroup(extras) {
    _reporterNs.report("SFXGroup", "./SFXEnums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSFXEntry(extras) {
    _reporterNs.report("SFXEntry", "./SFXEntry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../Managers/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "../enums/GameEvent", _context.meta, extras);
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
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      SFXEntry = _unresolved_2.SFXEntry;
    }, function (_unresolved_3) {
      EventManager = _unresolved_3.EventManager;
    }, function (_unresolved_4) {
      GameEvent = _unresolved_4.GameEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0b72cq4oRhOArFtlZJsdFdL", "SFXManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'AudioSource', 'Prefab', 'instantiate']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SFXManager", SFXManager = (_dec = ccclass('SFXManager'), _dec2 = property({
        type: Prefab
      }), _dec3 = property({
        type: [_crd && SFXEntry === void 0 ? (_reportPossibleCrUseOfSFXEntry({
          error: Error()
        }), SFXEntry) : SFXEntry]
      }), _dec(_class = (_class2 = class SFXManager extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "sfxAudioSourcePrefab", _descriptor, this);

          _initializerDefineProperty(this, "sfxEntries", _descriptor2, this);

          this.sfxMap = new Map();
          this.groupMap = new Map();
          this.groupVolumes = new Map();
        }

        onLoad() {
          for (var entry of this.sfxEntries) {
            var node = instantiate(this.sfxAudioSourcePrefab);
            node.setParent(this.node);
            node.active = false;
            var audio = node.getComponent(AudioSource);
            audio.clip = entry.clip;
            this.sfxMap.set(entry.id, audio);

            if (!this.groupMap.has(entry.group)) {
              this.groupMap.set(entry.group, []);
            }

            this.groupMap.get(entry.group).push(audio);

            if (!this.groupVolumes.has(entry.group)) {
              this.groupVolumes.set(entry.group, 1.0);
            }
          }
        }

        start() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).instance.gameEvents.on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).PLAY_SFX, this.playSFXByID, this);
        }

        onDestroy() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).instance.gameEvents.off((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).PLAY_SFX, this.playSFXByID, this);
        }

        playSFXByID(id) {
          var _this$groupVolumes$ge;

          var audio = this.sfxMap.get(id);
          var entry = this.sfxEntries.find(e => e.id === id);
          console.log('Audio: ' + audio + ', Entry: ' + entry);
          if (!audio || !entry) return;
          var volume = (_this$groupVolumes$ge = this.groupVolumes.get(entry.group)) != null ? _this$groupVolumes$ge : 1.0;

          if (audio) {
            audio.playOneShot(audio.clip, volume);
          } else {
            console.warn("[SFXManager] Clip not found: " + id);
          }
        }

        setGroupVolume(group, volume) {
          this.groupVolumes.set(group, volume);
        }

        muteGroup(group) {
          this.setGroupVolume(group, 0);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sfxAudioSourcePrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "sfxEntries", [_dec3], {
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
//# sourceMappingURL=d0c822ab42650a1b363c4845387795afce693878.js.map