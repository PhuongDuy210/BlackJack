System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Participant, Dealer, _crd;

  function _reportPossibleCrUseOfParticipant(extras) {
    _reporterNs.report("Participant", "./Participant", _context.meta, extras);
  }

  _export("Dealer", void 0);

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

      _cclegacy._RF.push({}, "4053843dDZINYWydrxSAKS8", "Dealer", undefined);

      _export("Dealer", Dealer = class Dealer extends (_crd && Participant === void 0 ? (_reportPossibleCrUseOfParticipant({
        error: Error()
      }), Participant) : Participant) {
        shouldHit() {
          return this.getHandValue() < 17;
        } // Add dealer-specific logic here (e.g., reveal hidden card)


      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=612fc1e184bca4d0cad9a661fb6034b69952f153.js.map