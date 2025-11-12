System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Deck, _crd;

  function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function _reportPossibleCrUseOfCardData(extras) {
    _reporterNs.report("CardData", "./CardData", _context.meta, extras);
  }

  _export("Deck", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4e0a8nNSDNOJqxynrmrj65G", "Deck", undefined);

      // Your interface
      _export("Deck", Deck = class Deck {
        constructor(cardSet, deckCount) {
          if (deckCount === void 0) {
            deckCount = 1;
          }

          this.cards = [];
          this.buildDeck(cardSet, deckCount);
          this.shuffle();
        }

        buildDeck(cardSet, deckCount) {
          this.cards = [];

          for (var i = 0; i < deckCount; i++) {
            this.cards.push(...cardSet.map(card => _extends({}, card)));
          }
        }

        shuffle() {
          for (var i = this.cards.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
          }
        }

        peak(index) {
          return index >= 0 && index < this.cards.length ? this.cards[index] : null;
        }

        deal() {
          return this.cards.length > 0 ? this.cards.pop() : null;
        }

        remaining() {
          return this.cards.length;
        }

        reset(cardSet, deckCount) {
          if (deckCount === void 0) {
            deckCount = 1;
          }

          this.buildDeck(cardSet, deckCount);
          this.shuffle();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=770e9e4ab0b7921d57ce964224f136533d362de4.js.map