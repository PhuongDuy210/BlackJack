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
        GameState[GameState["GameEnd"] = 3] = "GameEnd";
      })(GameState || _export("GameState", GameState = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a6919660f0c63b917cb1096cc51aec485c854f7b.js.map