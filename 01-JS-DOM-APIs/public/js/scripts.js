window.onload = () => {
	document.getElementById('hidden-section').classList.toggle('fade');
} //I'm not sure if there should be a semicolon here

const buttonClicked = () => {
	alert('The button has been clicked');
};

document.getElementById('button-jokes').onclick = function () {
	getJoke();
} //I'm not sure if there should be a semicolon here

const getRequest = (url,callback) => {

	let request = window.ActiveXObject ?
	new ActiveXObject('Microsoft.XMLHTTP') :
	new XMLHttpRequest;

	request.onload = () => {
		if(request.status == 200){
			callback(request, request.status);
		}
		else{
			alert('error:' + request.status);
		}
	};
	request.onerror = () => {
		alert('error:' + request.status);
	}

	request.open('GET',url,true);
	request.send(null);
};

const getJoke = () => {
	getRequest('http://api.icndb.com/jokes/random', (data) => {

		let response = JSON.parse(data.response);
		let joke = response['value']['joke'];
		let article = document.getElementById('joke-article');
		article.innerHTML = "";
		let h4 = document.createElement('h4');
		let content = document.createTextNode(joke);
		h4.appendChild(content);
		article.appendChild(h4);
	});
};