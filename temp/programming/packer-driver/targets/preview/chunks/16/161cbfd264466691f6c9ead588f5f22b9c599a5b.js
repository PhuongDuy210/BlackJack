System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, GameState;

  _export("GameState", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5400f0RNPJKirsI/V6j5FAh", "GameState", undefined);

      (function (GameState) {
        GameState[GameState["InitialDeal"] = 0] = "InitialDeal";
        GameState[GameState["PlayerTurn"] = 1] = "PlayerTurn";
        GameState[GameState["DealerTurn"] = 2] = "DealerTurn";
        GameState[GameState["GameEnding"] = 3] = "GameEnding";
        GameState[GameState["GameEnded"] = 4] = "GameEnded";
      })(GameState || _export("GameState", GameState = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=161cbfd264466691f6c9ead588f5f22b9c599a5b.js.map