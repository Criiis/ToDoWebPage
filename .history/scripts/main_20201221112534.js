const btn = document.querySelector('.add-btn');
const inputBox = document.getElementById('to-do');
const toDoList = document.querySelector('.to-do-list');
let listToDo;

btn.addEventListener('click',function (e){
	e.preventDefault();
	let liContainer = document.createElement("li");
	let inputValue = document.createTextNode(inputBox.value);
    inputBox.value = ''; //reset the input value after adding the item to list

	liContainer.appendChild(inputValue);
	toDoList.appendChild(liContainer);
});


// localStorage.setItem("listToDo", JSON.stringify(listToDo));

console.log(localStorage.getItem('listToDo'));
if(localStorage.getItem('listToDo') == null || localStorage.getItem('listToDo').length == 0 ) {
	console.log(em)
}



//create a to do list using local storage cookies!

//crate a list of completed
//and a list with the ones i have to complete
// storage this in local storage




//https://www.youtube.com/watch?v=Ttf3CEsEwMQ&ab_channel=DevEd //ideia from this video