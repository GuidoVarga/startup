"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Actor =
/*#__PURE__*/
function () {
  function Actor(name, age) {
    _classCallCheck(this, Actor);

    this.name = name;
    this.age = age;
  }

  _createClass(Actor, [{
    key: "toString",
    value: function toString() {
      console.log(this.name + ' is a ' + this.age + ' years old actor');
    }
  }]);

  return Actor;
}();

exports.default = Actor;
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
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Logger =
/*#__PURE__*/
function () {
  function Logger() {
    _classCallCheck(this, Logger);
  }

  _createClass(Logger, [{
    key: "log",
    value: function log(info) {
      console.log(info);
    }
  }]);

  return Logger;
}();

exports.default = Logger;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _eventEmitter = _interopRequireDefault(require("./eventEmitter.js"));

var _social = _interopRequireDefault(require("./social.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var Movie =
/*#__PURE__*/
function (_EventEmitter) {
  _inherits(Movie, _EventEmitter);

  function Movie(name, year, duration) {
    var _this;

    _classCallCheck(this, Movie);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Movie).call(this));
    _this.name = name;
    _this.year = year;
    _this.duration = duration;
    _this.cast = [];
    Object.assign(_assertThisInitialized(_assertThisInitialized(_this)), _social.default);
    return _this;
  }

  _createClass(Movie, [{
    key: "play",
    value: function play() {
      this.emit('play', this);
    }
  }, {
    key: "pause",
    value: function pause() {
      this.emit('pause', this);
    }
  }, {
    key: "resume",
    value: function resume() {
      this.emit('resume', this);
    }
  }, {
    key: "addCast",
    value: function addCast(cast) {
      if (Array.isArray(cast)) {
        var _this$cast;

        (_this$cast = this.cast).push.apply(_this$cast, _toConsumableArray(cast));
      } else {
        this.cast.push(cast);
      }
    }
  }, {
    key: "toString",
    value: function toString() {
      console.log(this.name + ' is a ' + this.year + ' film with a ' + this.duration + ' minutes duration.');
    }
  }]);

  return Movie;
}(_eventEmitter.default);

exports.default = Movie;
"use strict";

var _movie = _interopRequireDefault(require("./movie.js"));

var _actor = _interopRequireDefault(require("./actor.js"));

var _logger = _interopRequireDefault(require("./logger.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.onload = function () {
  var logger = new _logger.default();
  var backToTheFutureIII = new _movie.default('Back to the Future Part III', 1990, 118);
  var fightClub = new _movie.default('Fight Club', 1999, 151);
  var michael = new _actor.default('Michael J. Fox', 57);
  var cast = [new _actor.default('Christopher Lloyd', 80), new _actor.default('Mary Steenburgen', 65), new _actor.default('Thomas F. Wilson', 59)];
  backToTheFutureIII.on('play', function (movie) {
    logger.log('The play event of ' + movie.name + ' has been emitted');
  });
  backToTheFutureIII.on('pause', function (movie) {
    logger.log('The pause event of ' + movie.name + ' has been emitted');
  });
  backToTheFutureIII.on('resume', function (movie) {
    logger.log('The resume event of ' + movie.name + ' has been emitted');
  });
  fightClub.on('play', function (movie) {
    logger.log('The play event of ' + movie.name + ' has been emitted');
  });
  fightClub.on('pause', function (movie) {
    logger.log('The pause event of ' + movie.name + ' has been emitted');
  });
  fightClub.on('resume', function (movie) {
    logger.log('The resume event of ' + movie.name + ' has been emitted');
  });
  backToTheFutureIII.play();
  backToTheFutureIII.pause();
  backToTheFutureIII.resume();
  fightClub.play();
  fightClub.pause();
  fightClub.resume();
  backToTheFutureIII.addCast(cast);
  backToTheFutureIII.addCast(michael);
  logger.log(backToTheFutureIII.cast);
  backToTheFutureIII.share('Sebastian');
  fightClub.like('Guido');
};
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
