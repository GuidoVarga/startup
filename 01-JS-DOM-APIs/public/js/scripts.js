//Exercise 1
window.onload= ()=>{
	document.getElementById('hidden-section').classList.toggle('fade');
}

//Exercise 2

document.getElementById('button').onclick =function(){
	buttonClicked();
}

const buttonClicked = () =>{
	alert('The button has been clicked');
}