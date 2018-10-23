import EventEmitter from './eventEmitter.js';

export default class Movie extends EventEmitter{

	constructor(name, year, duration){
		super();
		this.name = name;
		this.year = year;
		this.duration = duration;
		this.cast = [];
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

	addCast(cast){

		if(Array.isArray(cast)){
			this.cast.push(...cast);
		}else{
			this.cast.push(cast);
		}

	}

	toString(){
		console.log(this.name + ' is a ' + this.year + ' film with a ' + this.duration + ' minutes duration.');
	}

}
