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
        GameState[GameState["DealerTurnEnd"] = 4] = "DealerTurnEnd";
        GameState[GameState["GameEnd"] = 5] = "GameEnd";
      })(GameState || _export("GameState", GameState = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=682c0afd2db9a97760726f038e89230a3b199e7d.js.map