export default class Actor{

	constructor(name, age){
		this.name = name;
		this.age = age;
	}

	toString() {
		console.log(this.name + ' is a ' + this.age + ' years old actor');
	}
}