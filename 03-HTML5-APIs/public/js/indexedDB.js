const dbName = 'prueba8';
const version = 4;

window.onload = () => {
	initializeDB();	
}

const initializeDB = () => {
	if (!('indexedDB' in window)) {
  		console.log('Your browser doesn\'t support IndexedDB');
 		return;
	}

	const DBOpenRequest = openDB(dbName,version);
	
	DBOpenRequest.onerror = function(event) {
		console.log('error loading');
		console.log(event);
	};
 
 	DBOpenRequest.onsuccess = function(event) {
 		console.log('Database initialized');
 		const db = DBOpenRequest.result;
 		closeDB(db);
 	};
 
	DBOpenRequest.onupgradeneeded = function(event) {
		const db = event.target.result;
		db.onerror = function(event) {
			console.log('Error loading database');
		};
		storesCreation(db);
	};

}

const closeDB = (db) => {
	db.close();
	console.log('Closing db');
}

const openDB = (db = dbName, v = version) => {
	return window.indexedDB.open(db,v);
}

const storesCreation = (db) => {
	const objectStore = db.createObjectStore('texts', { keyPath: 'title' });
	objectStore.createIndex('content', 'content', { unique: false });
	console.log('Object store created');
}

const openTransaction = (db,stores,mode) => {
	return db.transaction(stores, mode);
}

const saveItem = (item) => {

	const DBOpenRequest = openDB();
	DBOpenRequest.onsuccess = function(event) {

		console.log('Database initialized');
		const db = DBOpenRequest.result;
		console.log(db);
		const transaction = openTransaction(db,['texts'],'readwrite');
		const objectStore = transaction.objectStore('texts');
		const objectStoreRequest = objectStore.put(item);
		objectStoreRequest.onsuccess = function(event) {
			console.log('Request successful');
			closeDB(db);
		};
	};
}

const getItemDB = (stores,index,callback) => {

	const DBOpenRequest = openDB();
	DBOpenRequest.onsuccess = function(event) {

		const db = DBOpenRequest.result;
		const transaction = openTransaction(db,stores,'readwrite');
		const objectStore = transaction.objectStore('texts');
		const objectStoreRequest = objectStore.get(index);
		objectStoreRequest.onsuccess = function(event) {

			console.log('Request successful');
			const item = objectStoreRequest.result;
			console.log(item);
			closeDB(db);
			callback(item);
		};
	}
}

const deleteItemDB = (stores,index,callback) => {

	const DBOpenRequest = openDB();
	DBOpenRequest.onsuccess = function(event) {

		const db = DBOpenRequest.result;
		const transaction = openTransaction(db,stores,'readwrite');
		const objectStore = transaction.objectStore('texts');
		const objectStoreRequest = objectStore.delete(index);
		objectStoreRequest.onsuccess = function(event) {

			console.log('Request successful');
			closeDB(db);
			callback();
		};
	}
}

document.getElementById('db-save-button').onclick = () => {

	const text = document.getElementById('db-textarea').value;
	const item = { title: 'text', content: text };
	saveItem(item);

}

document.getElementById('db-get-button').onclick = () => {

	getItemDB(['texts'], 'text', item => {
		const textNode=document.createTextNode(item.content);
		const div=document.getElementById('db-div-get-text');
		div.innerHTML = "";
		div.appendChild(textNode);
	});
}

document.getElementById('db-delete-button').onclick = () => {

	deleteItemDB(['texts'], 'text', item => {

		const div=document.getElementById('db-div-get-text');
		div.innerHTML = "";
	});
}