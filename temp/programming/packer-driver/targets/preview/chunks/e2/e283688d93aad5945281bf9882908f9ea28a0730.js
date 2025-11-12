System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Participant, Player, _crd;

  function _reportPossibleCrUseOfParticipant(extras) {
    _reporterNs.report("Participant", "./Participant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardData(extras) {
    _reporterNs.report("CardData", "./CardData", _context.meta, extras);
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

        canSplit() {
          return true;

          if (this.hand.length === 2 && this.hand[0].rank === this.hand[1].rank) {
            return true;
          }

          return false;
        }

        splitHand() {
          var splitCard = this.hand.splice(1, 1)[0];
          ;
          return splitCard;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e283688d93aad5945281bf9882908f9ea28a0730.js.map