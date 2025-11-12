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
        GameEvent["GAME_STARTED"] = "game-started";
        GameEvent["GAME_ENDED"] = "game-ended";
      })(GameEvent || _export("GameEvent", GameEvent = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=83a0e69d13f33d4b800e4aa2921b572bd60d31b7.js.map