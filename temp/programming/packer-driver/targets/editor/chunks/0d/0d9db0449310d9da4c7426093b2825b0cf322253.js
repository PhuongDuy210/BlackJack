System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Button, Sprite, Label, EventManager, GameEvent, _dec, _class, _crd, ccclass, property, ChipButton;

  function _reportPossibleCrUseOfChipEntry(extras) {
    _reporterNs.report("ChipEntry", "./ChipEntry", _context.meta, extras);
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
      Button = _cc.Button;
      Sprite = _cc.Sprite;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      EventManager = _unresolved_2.EventManager;
    }, function (_unresolved_3) {
      GameEvent = _unresolved_3.GameEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7e783l0UeJB3bOowfHZqLBZ", "ChipButton", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Button', 'Sprite', 'Label']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ChipButton", ChipButton = (_dec = ccclass('ChipButton'), _dec(_class = class ChipButton extends Component {
        constructor(...args) {
          super(...args);
          this.chipEntry = void 0;
        }

        setup(entry) {
          this.chipEntry = entry;
          console.log('Setting up chip buttons: ' + this.chipEntry.value.toString());
          this.node.getComponent(Sprite).spriteFrame = this.chipEntry.sprite;
          this.node.getComponentInChildren(Label).string = this.chipEntry.value.toString();
          this.node.on(Button.EventType.CLICK, () => {
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).instance.gameEvents.emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
              error: Error()
            }), GameEvent) : GameEvent).CHIP_SELECTED, this.chipEntry);
          }, this);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0d9db0449310d9da4c7426093b2825b0cf322253.js.map