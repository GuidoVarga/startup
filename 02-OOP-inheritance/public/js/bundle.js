export default class Actor {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  toString() {
    console.log(this.name + ' is a ' + this.age + ' years old actor');
  }

}
export default class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }

    this.events[eventName].push(callback);
  }

  emit(eventName, data) {
    const event = this.events[eventName];

    if (event) {
      event.forEach(fn => {
        fn.call(null, data);
      });
    }
  }

  off(eventName, callback) {
    if (callback) {
      this.events[eventName] = this.events[eventName].filter(fn => callback != fn);
    } else {
      this.events[eventName] = [];
    }
  }

}
export default class Logger {
  constructor() {}

  log(info) {
    console.log(info);
  }

}
import EventEmitter from './eventEmitter.js';
import social from './social.js';
export default class Movie extends EventEmitter {
  constructor(name, year, duration) {
    super();
    this.name = name;
    this.year = year;
    this.duration = duration;
    this.cast = [];
    Object.assign(this, social);
  }

  play() {
    this.emit('play', this);
  }

  pause() {
    this.emit('pause', this);
  }

  resume() {
    this.emit('resume', this);
  }

  addCast(cast) {
    if (Array.isArray(cast)) {
      this.cast.push(...cast);
    } else {
      this.cast.push(cast);
    }
  }

  toString() {
    console.log(this.name + ' is a ' + this.year + ' film with a ' + this.duration + ' minutes duration.');
  }

}
import Movie from './movie.js';
import Actor from './actor.js';
import Logger from './logger.js';

window.onload = () => {
  const logger = new Logger();
  const backToTheFutureIII = new Movie('Back to the Future Part III', 1990, 118);
  const fightClub = new Movie('Fight Club', 1999, 151);
  const michael = new Actor('Michael J. Fox', 57);
  const cast = [new Actor('Christopher Lloyd', 80), new Actor('Mary Steenburgen', 65), new Actor('Thomas F. Wilson', 59)];
  backToTheFutureIII.on('play', movie => {
    logger.log('The play event of ' + movie.name + ' has been emitted');
  });
  backToTheFutureIII.on('pause', movie => {
    logger.log('The pause event of ' + movie.name + ' has been emitted');
  });
  backToTheFutureIII.on('resume', movie => {
    logger.log('The resume event of ' + movie.name + ' has been emitted');
  });
  fightClub.on('play', movie => {
    logger.log('The play event of ' + movie.name + ' has been emitted');
  });
  fightClub.on('pause', movie => {
    logger.log('The pause event of ' + movie.name + ' has been emitted');
  });
  fightClub.on('resume', movie => {
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
const social = {
  share(friendName) {
    console.log(friendName + ' shares ' + this.name);
  },

  like(friendName) {
    console.log(friendName + ' likes ' + this.name);
  }

};
export default social;
