export default class Movie{

	constructor(name,year,duration){
		this.name=name;
		this.year=year;
		this.duration=duration;
	}

	play(){
		console.log('Playing '+this.name);
	}

	pause(){
		console.log(this.name + ' in pause')
	}

	resume(){
		console.log('Resuming ' + this.name);
	}

	toString(){
		console.log(this.name + ' is a ' + this.year + ' film with a ' + this.duration + ' minutes duration');
	}

}
