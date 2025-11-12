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

      _export("ChipButton", ChipButton = (_dec = ccclass('ChipEntry'), _dec(_class = class ChipButton extends Component {
        constructor() {
          super(...arguments);
          this.chipEntry = void 0;
        }

        setup(entry) {
          this.chipEntry = entry;
          this.node.getComponent(Sprite).spriteFrame = entry.sprite;
          this.node.getComponentInChildren(Label).string = entry.value.toString();
          this.node.on(Button.EventType.CLICK, () => {
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).instance.gameEvents.emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
              error: Error()
            }), GameEvent) : GameEvent).CHIP_SELECTED, entry);
          }, this);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4ac7741d17c5145e9213a5f0415035223488a374.js.map