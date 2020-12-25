'use strict';

var btn = document.querySelector('.add-btn');
var inputBox = document.getElementById('to-do');
var toDoList = document.querySelector('.to-do-list');
var singleItem = toDoList.querySelector('li');
var listToDo = [];

//events
createAndCheckLocalStorageArray();
btn.addEventListener('click', addItemToList);
toDoList.addEventListener('click', deleteItems);

inputBox.addEventListener("keydown", function (e) {
	if (e.key === "Enter") {
		e.preventDefault();
		addItemToList(e);
	}
});

// function to append to
function appendFunction(containerDiv, value, appendTo) {
	var container = document.createElement(containerDiv);
	container.innerHTML = value;
	appendTo.appendChild(container);
}

// load the page create the local storage array
function createAndCheckLocalStorageArray() {
	if (localStorage.getItem('listToDo') === null) {
		localStorage.setItem("listToDo", JSON.stringify(listToDo));
		// create the localstorage if it does not exist
	} else {
		listToDo = JSON.parse(localStorage.getItem('listToDo'));
		// if it does exist take all the value and put inside of the listTodo array
		//apend the to do list from the array to the html
		listToDo.forEach(function (e) {
			appendFunction('li', e, toDoList);
		});
	}
}

//add the todo item to the list
function addItemToList(e) {
	e.preventDefault();
	var inputValue = inputBox.value;
	listToDo.push(inputValue);

	localStorage.setItem('listToDo', JSON.stringify(listToDo));
	appendFunction('li', inputValue, toDoList);
	console.log(listToDo);
	inputBox.value = '';
};

//delete to do items list
function deleteItems(e) {
	var item = e.target;
	var index = listToDo.indexOf(item.innerHTML);

	console.log(item.innerHTML);
	if (item.tagName === 'LI') {
		item.remove();
		listToDo.splice(index, 1);
		localStorage.setItem('listToDo', JSON.stringify(listToDo));
	}
}

//next steps 

//create random gradients when you load the page the background should be diferent 
//on top of it create a dark or light theme and store the information with local cookies
//give nice style this


//https://static.collectui.com/shots/3410657/salesforce-task-manager-web-app-large