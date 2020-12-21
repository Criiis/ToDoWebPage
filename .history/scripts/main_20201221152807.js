const btn = document.querySelector('.add-btn');
const inputBox = document.getElementById('to-do');
const toDoList = document.querySelector('.to-do-list');
var listToDo = [];



if(localStorage.getItem('listToDo') === null) {
	localStorage.setItem("listToDo", JSON.stringify(listToDo));
	// create the localstorage if it does not exist
} else {
	listToDo = JSON.parse(localStorage.getItem('listToDo'));
	// if it does exist take all the value and put inside of the listTodo array
}



btn.addEventListener('click',function (e){
	e.preventDefault();
	let inputValue = document.createTextNode(inputBox.value);

	
	// localStorage.setItem('listToDo', JSON.stringify(listToDo));
	listToDo.push(inputValue);

	listToDo.forEach(e => {
		console.log(e.data
	});



	// console.log(inputValue);
	// console.log(listToDo)
});



//create a to do list using local storage cookies!

//crate a list of completed
//and a list with the ones i have to complete
// storage this in local storage




//https://www.youtube.com/watch?v=Ttf3CEsEwMQ&ab_channel=DevEd //ideia from this video