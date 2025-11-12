System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Button, Sprite, Label, EventManager, GameEvent, SFXID, _dec, _class, _crd, ccclass, property, ChipButton;

  function _reportPossibleCrUseOfChipEntry(extras) {
    _reporterNs.report("ChipEntry", "./ChipEntry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../Managers/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "../enums/GameEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSFXID(extras) {
    _reporterNs.report("SFXID", "../AudioSystem/SFXEnums", _context.meta, extras);
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
    }, function (_unresolved_4) {
      SFXID = _unresolved_4.SFXID;
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
          this.isInteractable = true;
        }

        setup(entry) {
          this.chipEntry = entry;
          this.node.getComponent(Sprite).spriteFrame = this.chipEntry.sprite;
          this.node.getComponentInChildren(Label).string = this.chipEntry.text;
          this.node.on(Button.EventType.CLICK, () => {
            if (this.isInteractable == true) {
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).instance.gameEvents.emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
                error: Error()
              }), GameEvent) : GameEvent).CHIP_SELECTED, this.chipEntry);
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).instance.gameEvents.emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
                error: Error()
              }), GameEvent) : GameEvent).PLAY_SFX, (_crd && SFXID === void 0 ? (_reportPossibleCrUseOfSFXID({
                error: Error()
              }), SFXID) : SFXID).Chip, this);
            }
          }, this);
        }

        setInteractable(flag) {
          this.isInteractable = flag;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f64fed5f2c85ce4b6a616d00cec7d4cce7a218de.js.map