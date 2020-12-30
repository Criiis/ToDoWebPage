'use strict';

var btn = document.querySelector('.add-btn');
var inputBox = document.getElementById('to-do');
var toDoList = document.querySelector('.to-do-list');

var listToDo = [];

//events
createAndCheckLocalStorageArray();
btn.addEventListener('click', addItemToList);
toDoList.addEventListener('click', deleteItems);
toDoList.addEventListener('click', editItems);

//keyevents
inputBox.addEventListener("keydown", function (e) {
	if (e.key === "Enter") {
		e.preventDefault();
		addItemToList(e);
	}
});

// function to append to
function appendFunction(containerDiv, value, appendTo) {
	var newDiv = document.createElement('div');
	newDiv.classList.add('item');

	var deleteIcon = document.createElement('IMG');
	deleteIcon.setAttribute('src', './images/trash.svg');
	deleteIcon.setAttribute('alt', 'Delete');
	deleteIcon.setAttribute("width", "20px");

	var editIcon = document.createElement('IMG');
	editIcon.setAttribute('src', './images/trash.svg');
	editIcon.setAttribute('alt', 'Edit');
	editIcon.setAttribute("width", "20px");

	var container = document.createElement(containerDiv);
	container.innerHTML = value;

	newDiv.appendChild(container);
	newDiv.appendChild(deleteIcon);
	newDiv.appendChild(editIcon);
	appendTo.appendChild(newDiv);
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

//add the to do item to the list
function addItemToList(e) {
	e.preventDefault();
	var inputValue = inputBox.value;

	if (inputValue !== '' && inputValue !== null && inputValue !== undefined) {
		listToDo.push(inputValue);
		localStorage.setItem('listToDo', JSON.stringify(listToDo));
		appendFunction('li', inputValue, toDoList);
		inputBox.value = '';
		toDoList.querySelector('.error').classList.remove('open');
	} else {
		toDoList.querySelector('.error').classList.add('open');
	}
};

//delete to do items list
function deleteItems(e) {
	var item = e.target;

	if (item.tagName === 'IMG' && item.alt === 'Delete') {
		var index = listToDo.indexOf(item.previousElementSibling.innerHTML);
		item.parentNode.remove();
		listToDo.splice(index, 1);
		localStorage.setItem('listToDo', JSON.stringify(listToDo));
	}
}

//edit function
function editItems(event) {
	var EditBTN = event.target;
	var toDoItem = EditBTN.parentNode.childNodes[0];

	var li = EditBTN.closest('.item');
	var nodes = Array.from(li.closest('ul').children);
	var index = nodes.indexOf(li) - 1;

	if (EditBTN.id === 'editable') {
		toDoItem.contentEditable = "false";
		EditBTN.setAttribute("id", "");
		listToDo[index] = toDoItem.innerHTML;
		localStorage.setItem('listToDo', JSON.stringify(listToDo));
	} else if (EditBTN.tagName === 'IMG' && EditBTN.alt === 'Edit') {
		toDoItem.contentEditable = "true";
		toDoItem.focus();
		EditBTN.setAttribute("id", "editable");
	}
}