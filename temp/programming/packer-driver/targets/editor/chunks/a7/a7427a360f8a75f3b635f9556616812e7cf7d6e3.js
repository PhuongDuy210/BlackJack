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
        GameState[GameState["PlayerTurnEnd"] = 2] = "PlayerTurnEnd";
        GameState[GameState["DealerTurn"] = 3] = "DealerTurn";
        GameState[GameState["GameEnding"] = 4] = "GameEnding";
        GameState[GameState["GameEnded"] = 5] = "GameEnded";
      })(GameState || _export("GameState", GameState = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a7427a360f8a75f3b635f9556616812e7cf7d6e3.js.map