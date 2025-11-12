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
        constructor(name) {
          super();
          this.name = void 0;
          this.name = name;
        }

        getName() {
          return this.name;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7c74499a026d95669af2607af724f743c1807a91.js.map