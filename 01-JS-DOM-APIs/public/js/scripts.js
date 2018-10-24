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
		const xhr = new XMLHttpRequest;
		xhr.open(config.method, config.url);

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
	const config = {
		url:'http://api.icndb.com/jokes/random',
		method:'GET'
	};

	request(config)
	.then( data => {
		const response = JSON.parse(data.response);
		const joke = response['value']['joke'];
		const div = document.getElementById('joke-div');
		div.innerHTML = "";
		const p = document.createElement('p');
		const textNode = document.createTextNode(joke);
		p.appendChild(textNode);
		div.appendChild(p);
	}, status => {
		console.log(status);
		if(status>=500 && status<600){
			paintElement('joke-section','red');
		}
	})
	.catch( error => {
		console.log(error);
	});
};

const paintElement = (element,color) => {
	document.getElementById(element).style.background=color;
};

const getRepositories = (repo) => {
	const config={
		url:'https://api.github.com/search/repositories?q='+repo,
		method:'GET'
	}

	request(config)
	.then(data => {
		const response=JSON.parse(data.response);
		showRepositories(response.items);

	}, status => {
		console.log(status);
	})
	.catch(error => {
		console.log(error);
	});

};

const showRepositories = (data) => {
	const url = 'https://github.com/';
	const div = document.getElementById('found-repos');
	div.innerHTML = "";
	const title = document.createElement('h3');
	title.appendChild(document.createTextNode('Results of the search:'));
	div.appendChild(title);
	const ul = document.createElement('ul');
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
	const inputRepo = document.getElementById('input-repo');
	verifyInputContent(inputRepo,getRepositories,inputRepo.value);
}

document.getElementById('button-matrix').onclick = () => {
	const inputMatrix = document.getElementById('input-matrix');
	const matrix = verifyInputContent(inputMatrix,createMatrix,inputMatrix.value);
	if(matrix){
		createTable(matrix);
	}
}

const createMatrix = (data) => {

	let array = data.split('/');
	let matriz = [];

	for(let i = 0; i<array.length; i++){
		matriz.push(array[i].split('-'));
	}

	return matriz;
};

const createTable = (matrix) => {

	const div=document.getElementById('table-div');
	div.innerHTML="";
	const table = document.createElement('table');
	const tableBody = document.createElement('tbody');
	let tr;
	let td;
	let text;
	for(let i = 0 ; i < matrix.length ; i++){

		tr = document.createElement('tr');

		for(let j = 0 ; j < matrix[i].length ; j++){
			td = document.createElement('td');
			text = document.createTextNode(matrix[i][j]);
			td.appendChild(text);
			tr.appendChild(td);
		}
		tableBody.appendChild(tr);
	}
	table.appendChild(tableBody);
	div.appendChild(table);
}

const verifyInputContent = (input,callback,parameter) => {

	if(input.value==""){
		alert('The ' + input.name + ' input can not be empty');
	}
	else{
		return callback(parameter);
	}
};