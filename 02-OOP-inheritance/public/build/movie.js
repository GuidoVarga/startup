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