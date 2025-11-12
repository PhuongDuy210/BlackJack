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
        GameState[GameState["BetPhase"] = 0] = "BetPhase";
        GameState[GameState["InitialDeal"] = 1] = "InitialDeal";
        GameState[GameState["PlayerTurn"] = 2] = "PlayerTurn";
        GameState[GameState["PlayerTurnEnd"] = 3] = "PlayerTurnEnd";
        GameState[GameState["DealerTurn"] = 4] = "DealerTurn";
        GameState[GameState["DealerTurnEnd"] = 5] = "DealerTurnEnd";
        GameState[GameState["GameEnd"] = 6] = "GameEnd";
      })(GameState || _export("GameState", GameState = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e7e2c117e8b393918481ec93742ec02b455f0f40.js.map