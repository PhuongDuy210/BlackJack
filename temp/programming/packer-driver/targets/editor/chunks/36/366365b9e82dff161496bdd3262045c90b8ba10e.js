System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Participant, _crd;

  function _reportPossibleCrUseOfCardData(extras) {
    _reporterNs.report("CardData", "./CardData", _context.meta, extras);
  }

  _export("Participant", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "25a22NSb3dOsbaCb3GsIrA5", "Player", undefined);

      _export("Participant", Participant = class Participant {
        constructor() {
          this.hand = [];
        }

        getHand() {
          return this.hand;
        }

        addCard(card) {
          this.hand.push(card);
        }

        resetHand() {
          this.hand = [];
        }

        getHandValue() {
          // Basic hand value logic (handle Aces as 1 or 11)
          let total = 0;
          let aces = 0;

          for (const card of this.hand) {
            if (card.values.length === 2) aces++;
            total += card.values[0]; // assume lowest value first
          } // Upgrade Aces if possible


          while (aces > 0 && total + 10 <= 21) {
            total += 10;
            aces--;
          }

          return total;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=366365b9e82dff161496bdd3262045c90b8ba10e.js.map