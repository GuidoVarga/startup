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

const getRepositories = () => {

	let config={
		url:'https://api.github.com/search/repositories?q=JavaScript',
	}

	request(config)
	.then(data => {
		let response=JSON.parse(data.response);
		console.log(response);
		showRepositories(response.items);

	}, status => {
		console.log(status);
	})
	.catch(error => {
		console.log(error);
	});

};

const showRepositories = (data) => {
	
	let url = 'https://github.com/';
	let div = document.getElementById('found-repos');
	div.innerHTML = "";
	let title = document.createElement('h3');
	title.appendChild(document.createTextNode('Results of the search:'));
	div.appendChild(title);
	let ul = document.createElement('ul');
	let li;
	let a;
	let text;
	let repo;	
	for (let i = 0 ; i < data.length; i++) {
		repo = data[i]['full_name'];
		li = document.createElement('li');
		a = document.createElement('a');
		text = document.createTextNode(data[i]['full_name']);
		a.title = repo;
		a.href = url+repo;
		a.target = '_blank';
		a.appendChild(text);
		li.appendChild(a);
		ul.appendChild(li);
	}
	div.appendChild(ul);	
};

document.getElementById('button-repos').onclick = () => {
	
	getRepositories();
}