const btn = document.querySelector('.add-btn');
const inputBox = document.getElementById('to-do');
const toDoList = document.querySelector('.to-do-list');
let singleItem = toDoList.querySelector('li');
let listToDo = [];

//events
createAndCheckLocalStorageArray();
btn.addEventListener('click', addItemToList);
toDoList.addEventListener('click', deleteItems);

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



	const what = document.createElement('IMG');
	what.setAttribute('src', './images/trash.svg');
	what.setAttribute('alt', 'Delete');
	what.setAttribute("width", "20px");


	let container = document.createElement(containerDiv);
	container.innerHTML = value;

	newDiv.appendChild(container); //this creates the <li>....</li>
	newDiv.appendChild(what);


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


//add the todo item to the list
function addItemToList(e){
	e.preventDefault();
	let inputValue = inputBox.value;
	listToDo.push(inputValue);

	localStorage.setItem('listToDo', JSON.stringify(listToDo));
	appendFunction('li', inputValue, toDoList);
	console.log(listToDo);
	inputBox.value = '';

};


//delete to do items list
function deleteItems(e) {
	let item = e.target;
	const index = listToDo.indexOf(item.previousElementSibling.innerHTML);

	// console.log(item.tagName);
	// console.log(item.parentNode);
	// console.log(item.previousElementSibling.innerHTML);
	console.log(index);

	// console.log(item.innerHTML);

	if (item.tagName === 'IMG') {
		item.parentNode.remove();
		listToDo.splice(index, 1);
		localStorage.setItem('listToDo', JSON.stringify(listToDo));
		console.log(listToDo);
	}

}


//next steps 

//create random gradients when you load the page the background should be diferent 
//on top of it create a dark or light theme and store the information with local cookies
//give nice style this


//https://static.collectui.com/shots/3410657/salesforce-task-manager-web-app-large