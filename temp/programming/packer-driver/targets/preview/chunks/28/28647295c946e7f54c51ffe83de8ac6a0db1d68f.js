System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Participant, Player, _crd;

  function _reportPossibleCrUseOfParticipant(extras) {
    _reporterNs.report("Participant", "./Participant", _context.meta, extras);
  }

  _export("Player", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Participant = _unresolved_2.Participant;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "25a22NSb3dOsbaCb3GsIrA5", "Player", undefined);

      _export("Player", Player = class Player extends (_crd && Participant === void 0 ? (_reportPossibleCrUseOfParticipant({
        error: Error()
      }), Participant) : Participant) {
        constructor(name, index) {
          super();
          this.name = void 0;
          this.index = void 0;
          this.name = name;
          this.index = index;
        }

        getName() {
          return this.name;
        }

        getIndex() {
          return this.index;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=28647295c946e7f54c51ffe83de8ac6a0db1d68f.js.map