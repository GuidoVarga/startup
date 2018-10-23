"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var EventEmitter =
/*#__PURE__*/
function () {
  function EventEmitter() {
    _classCallCheck(this, EventEmitter);

    this.events = {};
  }

  _createClass(EventEmitter, [{
    key: "on",
    value: function on(eventName, callback) {
      if (!this.events[eventName]) {
        this.events[eventName] = [];
      }

      this.events[eventName].push(callback);
    }
  }, {
    key: "emit",
    value: function emit(eventName, data) {
      var event = this.events[eventName];

      if (event) {
        event.forEach(function (fn) {
          fn.call(null, data);
        });
      }
    }
  }, {
    key: "off",
    value: function off(eventName, callback) {
      if (callback) {
        this.events[eventName] = this.events[eventName].filter(function (fn) {
          return callback != fn;
        });
      } else {
        this.events[eventName] = [];
      }
    }
  }]);

  return EventEmitter;
}();

exports.default = EventEmitter;