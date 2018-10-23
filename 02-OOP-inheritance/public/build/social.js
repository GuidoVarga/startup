"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var social = {
  share: function share(friendName) {
    console.log(friendName + ' shares ' + this.name);
  },
  like: function like(friendName) {
    console.log(friendName + ' likes ' + this.name);
  }
};
var _default = social;
exports.default = _default;