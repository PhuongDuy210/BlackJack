System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Deck, _crd;

  function _reportPossibleCrUseOfCardData(extras) {
    _reporterNs.report("CardData", "./CardData", _context.meta, extras);
  }

  _export("Deck", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4e0a8nNSDNOJqxynrmrj65G", "Deck", undefined);

      __checkObsolete__(['SpriteFrame']);

      _export("Deck", Deck = class Deck {
        constructor(cardSet, deckCount = 1) {
          this.cards = [];
          this.buildDeck(cardSet, deckCount);
          this.shuffle();
        }

        buildDeck(cardSet, deckCount) {
          this.cards = [];

          for (let i = 0; i < deckCount; i++) {
            this.cards.push(...cardSet.map(card => ({ ...card
            })));
          }
        }

        shuffle() {
          for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
          }
        }

        deal() {
          return this.cards.length > 0 ? this.cards.pop() : null;
        }

        remaining() {
          return this.cards.length;
        }

        reset(cardSet, deckCount = 1) {
          this.buildDeck(cardSet, deckCount);
          this.shuffle();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=40a6707242a7907df9ee5217e07c83864a6d9dcf.js.map