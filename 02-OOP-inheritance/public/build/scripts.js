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