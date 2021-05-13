var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listElements = ul.children;
var listButtons = document.getElementsByClassName("dropListElement");

function numberOfTodos() {
	return listElements.length;
}

function inputLength() {
	return input.value.length;
}

// Add New ToDo
function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.classList.add("mousePointer", "toDo");
	li.addEventListener("click", () => li.classList.toggle("done"));
	ul.appendChild(li);
	input.value = "";

	// button to delete list item
	let delButton = document.createElement("button");
	let checkSign = document.createElement("i");
	delButton.classList.add("delButton");
	checkSign.classList.add("fas", "fa-times-circle");
	delButton.appendChild(checkSign);
	delButton.addEventListener("click", () => {li.remove(); toggleVisibilityRoboMain();});
	li.appendChild(delButton);

	toggleVisibilityRoboMain();
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

// RobotAnimation Logic
let roboWrapper = document.getElementById("roboWrapper");

function toggleVisibilityRoboMain() {
	if (numberOfTodos() === 0){
		roboWrapper.style.visibility = "visible";
	} else{
		roboWrapper.style.visibility = "hidden";
	}
};

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);




