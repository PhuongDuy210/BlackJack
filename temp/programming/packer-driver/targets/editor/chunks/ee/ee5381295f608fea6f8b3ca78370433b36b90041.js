System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Label, Prefab, instantiate, Vec3, tween, Enum, view, PopupAnimationType, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _crd, ccclass, property, GenericPopup;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfPopupButtonData(extras) {
    _reporterNs.report("PopupButtonData", "./PopupButtonData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPopupAnimationType(extras) {
    _reporterNs.report("PopupAnimationType", "../enums/PopupAnimationType", _context.meta, extras);
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
      Node = _cc.Node;
      Label = _cc.Label;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      Vec3 = _cc.Vec3;
      tween = _cc.tween;
      Enum = _cc.Enum;
      view = _cc.view;
    }, function (_unresolved_2) {
      PopupAnimationType = _unresolved_2.PopupAnimationType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6906bO5ZJxLTKlisCgF8PU1", "GenericPopup", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Label', 'Prefab', 'instantiate', 'Vec3', 'tween', 'Enum', 'view']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GenericPopup", GenericPopup = (_dec = ccclass('GenericPopup'), _dec2 = property({
        type: Enum(_crd && PopupAnimationType === void 0 ? (_reportPossibleCrUseOfPopupAnimationType({
          error: Error()
        }), PopupAnimationType) : PopupAnimationType)
      }), _dec3 = property({
        type: Enum(_crd && PopupAnimationType === void 0 ? (_reportPossibleCrUseOfPopupAnimationType({
          error: Error()
        }), PopupAnimationType) : PopupAnimationType)
      }), _dec4 = property(Vec3), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Node), _dec8 = property(Prefab), _dec(_class = (_class2 = class GenericPopup extends Component {
        constructor(...args) {
          super(...args);
          this.screenSize = view.getVisibleSize();
          this.popupPanel = void 0;

          _initializerDefineProperty(this, "animationDuration", _descriptor, this);

          _initializerDefineProperty(this, "entryAnimationType", _descriptor2, this);

          _initializerDefineProperty(this, "exitAnimationType", _descriptor3, this);

          _initializerDefineProperty(this, "onscreenTarget", _descriptor4, this);

          _initializerDefineProperty(this, "titleText", _descriptor5, this);

          _initializerDefineProperty(this, "messageText", _descriptor6, this);

          _initializerDefineProperty(this, "buttonContainer", _descriptor7, this);

          _initializerDefineProperty(this, "defaultButtonPrefab", _descriptor8, this);

          this.isShown = false;
        }

        start() {
          this.popupPanel = this.node;
        }

        show(title, message, buttons) {
          this.titleText.string = title;
          this.messageText.string = message;
          this.buttonContainer.removeAllChildren();

          for (const btnData of buttons) {
            const prefab = btnData.buttonPrefabOverride || this.defaultButtonPrefab;
            const btnNode = instantiate(prefab);
            this.buttonContainer.addChild(btnNode);
            const label = btnNode.getComponentInChildren(Label);
            if (label) label.string = btnData.label;
            btnNode.on(Node.EventType.TOUCH_END, () => {
              btnData.callback == null ? void 0 : btnData.callback();
              this.close();
            });
          }

          this.node.active = true;
          this.animateEntry();
          this.isShown = true;
        }

        close() {
          this.animateExit(() => {
            this.node.active = false;
          });
          this.isShown = false;
        }

        shown() {
          return this.isShown;
        }

        animateEntry(onComplete) {
          switch (this.entryAnimationType) {
            case (_crd && PopupAnimationType === void 0 ? (_reportPossibleCrUseOfPopupAnimationType({
              error: Error()
            }), PopupAnimationType) : PopupAnimationType).FlyBottom:
              this.popupPanel.setPosition(new Vec3(0, -this.screenSize.height, 0));
              tween(this.popupPanel).to(this.animationDuration, {
                position: this.onscreenTarget
              }).call(() => onComplete == null ? void 0 : onComplete()).start();
              break;

            case (_crd && PopupAnimationType === void 0 ? (_reportPossibleCrUseOfPopupAnimationType({
              error: Error()
            }), PopupAnimationType) : PopupAnimationType).FlyTop:
              this.popupPanel.setPosition(new Vec3(0, this.screenSize.height, 0));
              tween(this.popupPanel).to(this.animationDuration, {
                position: this.onscreenTarget
              }).call(() => onComplete == null ? void 0 : onComplete()).start();
              break;

            case (_crd && PopupAnimationType === void 0 ? (_reportPossibleCrUseOfPopupAnimationType({
              error: Error()
            }), PopupAnimationType) : PopupAnimationType).FlyLeft:
              this.popupPanel.setPosition(new Vec3(-this.screenSize.width, 0, 0));
              tween(this.popupPanel).to(this.animationDuration, {
                position: this.onscreenTarget
              }).call(() => onComplete == null ? void 0 : onComplete()).start();
              break;

            case (_crd && PopupAnimationType === void 0 ? (_reportPossibleCrUseOfPopupAnimationType({
              error: Error()
            }), PopupAnimationType) : PopupAnimationType).FlyRight:
              this.popupPanel.setPosition(new Vec3(this.screenSize.width, 0, 0));
              tween(this.popupPanel).to(this.animationDuration, {
                position: this.onscreenTarget
              }).call(() => onComplete == null ? void 0 : onComplete()).start();
              break;

            case (_crd && PopupAnimationType === void 0 ? (_reportPossibleCrUseOfPopupAnimationType({
              error: Error()
            }), PopupAnimationType) : PopupAnimationType).Scale:
              this.popupPanel.setScale(new Vec3(0, 0, 1));
              tween(this.popupPanel).to(this.animationDuration, {
                scale: new Vec3(1, 1, 1)
              }).call(() => onComplete == null ? void 0 : onComplete()).start();
              break;
          }
        }

        animateExit(onComplete) {
          switch (this.exitAnimationType) {
            case (_crd && PopupAnimationType === void 0 ? (_reportPossibleCrUseOfPopupAnimationType({
              error: Error()
            }), PopupAnimationType) : PopupAnimationType).FlyBottom:
              this.popupPanel.setPosition(this.onscreenTarget);
              tween(this.popupPanel).to(this.animationDuration, {
                position: new Vec3(0, -this.screenSize.height, 0)
              }).call(() => onComplete == null ? void 0 : onComplete()).start();
              break;

            case (_crd && PopupAnimationType === void 0 ? (_reportPossibleCrUseOfPopupAnimationType({
              error: Error()
            }), PopupAnimationType) : PopupAnimationType).FlyTop:
              this.popupPanel.setPosition(this.onscreenTarget);
              tween(this.popupPanel).to(this.animationDuration, {
                position: new Vec3(0, this.screenSize.height, 0)
              }).call(() => onComplete == null ? void 0 : onComplete()).start();
              break;

            case (_crd && PopupAnimationType === void 0 ? (_reportPossibleCrUseOfPopupAnimationType({
              error: Error()
            }), PopupAnimationType) : PopupAnimationType).FlyLeft:
              this.popupPanel.setPosition(this.onscreenTarget);
              tween(this.popupPanel).to(this.animationDuration, {
                position: new Vec3(-this.screenSize.width, 0, 0)
              }).call(() => onComplete == null ? void 0 : onComplete()).start();
              break;

            case (_crd && PopupAnimationType === void 0 ? (_reportPossibleCrUseOfPopupAnimationType({
              error: Error()
            }), PopupAnimationType) : PopupAnimationType).FlyRight:
              this.popupPanel.setPosition(this.onscreenTarget);
              tween(this.popupPanel).to(this.animationDuration, {
                position: new Vec3(this.screenSize.width, 0, 0)
              }).call(() => onComplete == null ? void 0 : onComplete()).start();
              break;

            case (_crd && PopupAnimationType === void 0 ? (_reportPossibleCrUseOfPopupAnimationType({
              error: Error()
            }), PopupAnimationType) : PopupAnimationType).Scale:
              this.popupPanel.setScale(new Vec3(1, 1, 1));
              tween(this.popupPanel).to(this.animationDuration, {
                scale: new Vec3(0, 0, 1)
              }).call(() => onComplete == null ? void 0 : onComplete()).start();
              break;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "animationDuration", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.75;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "entryAnimationType", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return (_crd && PopupAnimationType === void 0 ? (_reportPossibleCrUseOfPopupAnimationType({
            error: Error()
          }), PopupAnimationType) : PopupAnimationType).FlyTop;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "exitAnimationType", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return (_crd && PopupAnimationType === void 0 ? (_reportPossibleCrUseOfPopupAnimationType({
            error: Error()
          }), PopupAnimationType) : PopupAnimationType).FlyTop;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "onscreenTarget", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Vec3(0, 0, 0);
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "titleText", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "messageText", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "buttonContainer", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "defaultButtonPrefab", [_dec8], {
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
//# sourceMappingURL=ee5381295f608fea6f8b3ca78370433b36b90041.js.map