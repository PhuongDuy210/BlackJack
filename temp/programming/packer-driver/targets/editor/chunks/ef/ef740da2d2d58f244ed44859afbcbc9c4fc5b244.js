System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, SFXID, SFXGroup;

  _export({
    SFXID: void 0,
    SFXGroup: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b0bb6ld4SlOibz8GEz/cpaU", "SFXEnums", undefined);

      (function (SFXID) {
        SFXID[SFXID["ButtonClick"] = 0] = "ButtonClick";
        SFXID[SFXID["CoinDrop"] = 1] = "CoinDrop";
        SFXID[SFXID["CardFlip"] = 2] = "CardFlip";
        SFXID[SFXID["Chip"] = 3] = "Chip";
      })(SFXID || _export("SFXID", SFXID = {}));

      (function (SFXGroup) {
        SFXGroup[SFXGroup["UI"] = 0] = "UI";
        SFXGroup[SFXGroup["Gameplay"] = 1] = "Gameplay";
        SFXGroup[SFXGroup["Ambient"] = 2] = "Ambient";
      })(SFXGroup || _export("SFXGroup", SFXGroup = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ef740da2d2d58f244ed44859afbcbc9c4fc5b244.js.map