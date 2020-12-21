const btn = document.querySelector('.add-btn');
const inputBox = document.getElementById('to-do');
const toDoList = document.querySelector('.to-do-list');

btn.addEventListener('click',function (e){
	e.preventDefault();
	let liContainer = document.createElement("li");
	let inputValue = document.createTextNode(inputBox.value);
    inputBox.value = ''; //reset the input value after adding the item to list

	liContainer.appendChild(inputValue);
	toDoList.appendChild(liContainer);
});




//create a to do list using local storage cookies!

//crate a list of completed
//and a list with the ones i have to complete
// storage this in local storage


