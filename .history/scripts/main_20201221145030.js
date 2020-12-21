const btn = document.querySelector('.add-btn');
const inputBox = document.getElementById('to-do');
const toDoList = document.querySelector('.to-do-list');
let listToDo = [];



if(localStorage.getItem('listToDo') === null) {
	localStorage.setItem("listToDo", JSON.stringify(listToDo));
// 	console.log('it does not existe, created the array!');
} else {
// 	// listToDo = JSON.parse(localStorage.getItem())
	console.log('it does existe');
}



btn.addEventListener('click',function (e){
	e.preventDefault();
	let inputValue = document.createTextNode(inputBox.value);

	listToDo.push(inputValue);
	console.log(inputValue);
	console.log(listToDo)
});



//create a to do list using local storage cookies!

//crate a list of completed
//and a list with the ones i have to complete
// storage this in local storage




//https://www.youtube.com/watch?v=Ttf3CEsEwMQ&ab_channel=DevEd //ideia from this video