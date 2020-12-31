const btn = document.querySelector('.add-btn');
const inputBox = document.getElementById('to-do');
const toDoList = document.querySelector('.to-do-list');


let listToDo = [];


//events
createAndCheckLocalStorageArray();
btn.addEventListener('click', addItemToList);
toDoList.addEventListener('click', deleteItems);
toDoList.addEventListener('click', editItems);


//keyevents
inputBox.addEventListener("keydown", function(e) {
	if (e.key === "Enter") {
		e.preventDefault();
		addItemToList(e);
	}
});



// function to append to
function appendFunction(containerDiv, value, appendTo) {
	const newDiv = document.createElement('div');
	newDiv.classList.add('item');

	const deleteIcon = document.createElement('I');
	deleteIcon.classList.add('fas', 'fa-trash');

	const editIcon = document.createElement('I');
	editIcon.classList.add('fas', 'fa-edit');

	let container = document.createElement(containerDiv);
	container.innerHTML = value;

	newDiv.appendChild(container);
	newDiv.appendChild(editIcon);
	newDiv.appendChild(deleteIcon);
	appendTo.appendChild(newDiv);
}


// load the page create the local storage array
function createAndCheckLocalStorageArray() {
	if(localStorage.getItem('listToDo') === null) {
		localStorage.setItem("listToDo", JSON.stringify(listToDo));
		// create the localstorage if it does not exist
	} else {
		listToDo = JSON.parse(localStorage.getItem('listToDo'));
		// if it does exist take all the value and put inside of the listTodo array
		//apend the to do list from the array to the html
		listToDo.forEach(e => {
			appendFunction('li', e, toDoList);
		});
	}
}


//add the to do item to the list
function addItemToList(e){
	e.preventDefault();
	let inputValue = inputBox.value;

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
	const item = e.target;

	if (item.tagName === 'I' && item.classList[1] === 'fa-trash') {
		const index = listToDo.indexOf(item.parentNode.childNodes[0].innerHTML);
		item.parentNode.remove();
		listToDo.splice(index, 1);
		localStorage.setItem('listToDo', JSON.stringify(listToDo));
	}

}


// edit function
function editItems(event) {
	let EditBTN = event.target;
	let toDoItem = EditBTN.previousElementSibling;

	if (EditBTN.id === 'editable') {
		let li = EditBTN.closest('.item');
		let nodes = Array.from( li.closest('ul').querySelectorAll('div.item') );
		let index = nodes.indexOf( li );

		toDoItem.contentEditable = "false";
		listToDo[index] = toDoItem.innerHTML;
		EditBTN.setAttribute("id", "");
		localStorage.setItem('listToDo', JSON.stringify(listToDo));

	} else if (EditBTN.tagName === 'I' && EditBTN.classList[1] === 'fa-edit') {
		toDoItem.contentEditable = "true";
		toDoItem.focus();
		EditBTN.setAttribute("id", "editable");
	}

}
