System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, SpecialQueue, _crd;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3cd82bjJohBWqDNxcUYgqmP", "SpecialQueue", undefined);

      SpecialQueue = class SpecialQueue {
        constructor() {
          this.list = [];
        }

        enqueue(item) {
          this.list.push(item);
        }

        dequeue() {
          return this.list.shift();
        }

        peek() {
          return this.list[0];
        }

        remove(item) {
          const index = this.list.indexOf(item);

          if (index >= 0) {
            this.list.splice(index, 1);
            return true;
          }

          return false;
        }

        contains(item) {
          return this.list.some(i => i === item);
        }

        get count() {
          return this.list.length;
        }

      };

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2f64c21d36217ce322e15924d176634cc06645da.js.map