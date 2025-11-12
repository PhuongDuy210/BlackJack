System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, GameEvent;

  _export("GameEvent", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c06c4NK4XlKCIImdeZl1QdI", "GameEvent", undefined);

      (function (GameEvent) {
        GameEvent["DECK_LOADED"] = "deck-loaded";
        GameEvent["DEAL_CARD"] = "deal-card";
        GameEvent["ANIMATION_FINISHED"] = "animation-finished";
        GameEvent["DEALER_TURN_END"] = "dealer-turn-end";
        GameEvent["GAME_STARTED"] = "game-started";
        GameEvent["GAME_ENDED"] = "game-ended";
        GameEvent["GAME_RESET"] = "game-reset";
        GameEvent["LOCK_INPUT"] = "lock-input";
        GameEvent["UNLOCK_INPUT"] = "unlock-input";
      })(GameEvent || _export("GameEvent", GameEvent = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a91bc84ee9b134736d4fac3a9216da6099511bef.js.map