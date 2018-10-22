export default class EventEmitter{

	constructor(){
		this.events = {};
	}

	on(eventName, callback){

		if(!this.events[eventName]){
			this.events[eventName] = []
		}

		this.events[eventName].push(callback);
	}

	emit(eventName,data){

		  const event = this.events[eventName];
		  if(event){
		   	event.forEach(fn => {
		       fn.call(null, data);
		     });
		  }
	}

	off(eventName, callback){

		if(callback){
			this.events[eventName] = this.events[eventName].filter(fn => callback != fn);
		}
		else{
			this.events[eventName] = [];
		}
	}

}