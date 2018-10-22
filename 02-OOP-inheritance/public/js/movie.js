import EventEmitter from './eventEmitter.js';

export default class Movie extends EventEmitter{

	constructor(name, year, duration){
		super();
		this.name = name;
		this.year = year;
		this.duration = duration;
	}

	play(){
		this.emit('play', this);
	}

	pause(){
		this.emit('pause', this);
	}

	resume(){
		this.emit('resume', this);
	}

	toString(){
		console.log(this.name + ' is a ' + this.year + ' film with a ' + this.duration + ' minutes duration');
	}

}
