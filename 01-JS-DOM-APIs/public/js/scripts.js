window.onload = () => {
	document.getElementById('hidden-section').classList.toggle('fade');
} //I'm not sure if there should be a semicolon here

const buttonClicked = () => {
	alert('The button has been clicked');
};

document.getElementById('button-jokes').onclick = function () {
	getJoke();
} //I'm not sure if there should be a semicolon here

const request = (config) => {
	return new Promise( (resolve,reject) => {

		let xhr = new XMLHttpRequest;
		xhr.open('GET', config.url, true);
		
		if(config.headers){
			Object.keys(config.headers).forEach( key => {
				xhr.setRquestHeader(key, config.headers[key]);
			});
		}

		xhr.onload = () =>{

			if(xhr.status>= 200 && xhr.status<300){
				resolve(xhr);
			}
			else{
				reject(xhr.status);
			}
		};

		xhr.onerror = () => reject(xhr.status);
		xhr.send(xhr.body);

	});
};

const getJoke = () => {

	let config = {
		url:'http://api.icndb.com/jokes/random'
	};

	request(config)
	.then( data => {

		let response = JSON.parse(data.response);
		let joke = response['value']['joke'];
		let article = document.getElementById('joke-article');
		article.innerHTML = "";
		let h4 = document.createElement('h4');
		let content = document.createTextNode(joke);
		h4.appendChild(content);
		article.appendChild(h4);

	}, status => {
		console.log(status);
		alert(status);
		if(status>=500 && status<600){
			paintElement('joke-section','red');
		}

	})
	.catch( error => {
		console.log(error);
		alert(error+'catch');
	});
};

const paintElement = (element,color) => {
	document.getElementById(element).style.background=color;
};