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
        GameEvent[GameEvent["CHIP_ENTRY_READY"] = 0] = "CHIP_ENTRY_READY";
        GameEvent[GameEvent["chip-entry-ready"] = 1] = "chip-entry-ready";
        GameEvent[GameEvent["CHIP_SELECTED"] = 2] = "CHIP_SELECTED";
        GameEvent[GameEvent["chip-selected"] = 3] = "chip-selected";
        GameEvent[GameEvent["ADD_CHIP_UI"] = 4] = "ADD_CHIP_UI";
        GameEvent[GameEvent["add-chip-ui"] = 5] = "add-chip-ui";
        GameEvent[GameEvent["UPDATE_BET_VALUE"] = 6] = "UPDATE_BET_VALUE";
        GameEvent[GameEvent["add-bet-value"] = 7] = "add-bet-value";
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
//# sourceMappingURL=be862085748d96867c621649555850a2bac639f8.js.map