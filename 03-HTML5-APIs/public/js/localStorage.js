document.getElementById('ls-save-button').onclick = () => {

	const text = document.getElementById('ls-textarea').value;
	localStorageSave('text',text);
}

document.getElementById('ls-get-button').onclick = () => {
	 
	const text=localStorageGet('text');
	const textNode=document.createTextNode(text);
	const div=document.getElementById('ls-div-get-text');
	div.innerHTML = "";
	div.appendChild(textNode);
}

document.getElementById('ls-delete-button').onclick = () => {
	 
	const text=localStorageRemove('text');
	document.getElementById('ls-div-get-text').innerHTML = "";
}

const localStorageSave = (key,value) => {

	localStorage.setItem(key,value);
}

const localStorageGet = (key) => {

	return localStorage.getItem(key);
}

const localStorageRemove = (key) => {

	localStorage.removeItem(key);
}