// Defining variable to access all the class from html
const input = document.querySelector("#input");
// Input field for user name
const addBtn = document.querySelector("#add");
// Add button in HTML file
const tasks = document.querySelector(".tasks");
// Tasks div element
const taskCount = document.querySelector("#spanNumber");
// Creating a function that will be called when we click on "Add" Button
const cancel = document.querySelector(".fa-xmark");
// Cancel icon
const strike = document.querySelector(".fa-strikethrough");
// Strike through icon

// creating array for storing user input todos
let newTaskList = [];
// Creating a function to add all the input which was entered by the user
function addList() {
  let element = tasks.firstElementChild;
  //   This if conditon will check if input field is not empty then it will proceed further to add a task
  if (input.value.trim() != 0) {
    // Creating a new div to display the todo items
    let newTask = document.createElement("div");
    // Adding classes to each elements created above
    newTask.classList.add("item");
    // Appending heading as input of the user and buttons for the strike through and delete
    newTask.innerHTML = `
        <h5>${input.value}</h5>
            <div class="btn">
                <i class="fa-sharp fa-solid fa-strikethrough"></i>
                <i class="fa-solid fa-xmark"></i>
            </div>
        `;
    // Pushing newly created object into our array
    if (element == null) {
      tasks.appendChild(newTask);
    } else {
      // adding after first child node
      tasks.insertBefore(newTask, element);
    }
    // Clearing out the input box once done

    newTaskList.push(newTask);
    // Updating number span count
    count();
    // Calling update counter method

    input.value = "";
  } else {
    alert("Please enter a task :)");
  }
}

// creating function for counting the how many list is present in todo

function count() {
  taskCount.innerHTML = newTaskList.length;
}

// Created a function to make add button active when something is written and inactive when input field is empty
input.addEventListener("keyup", () => {
    // When keyup event is triggered, it checks if there's any value entered or not and
    if (input.value.trim() != 0) {
      // If yes then it will make the add button active 
      addBtn.classList.add("active");
    } else {
      // Else remove active class of add btn so that no new list item gets added without entering anything
      addBtn.classList.remove("active");
    }
  });

// Function to handle click event on Add button

addBtn.addEventListener("click", () => {
  addList();
});
// creating function to add the input of the user by pressing enter button
input.addEventListener("keyup", (event) => {
  if (event.which == 13) {
    addList();
  }
});
//function for deleting the todos item
tasks.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-xmark")) {
    e.target.parentElement.parentElement.remove();
    newTaskList.pop(newTaskList.newTask);
    count();
  }
});
// Strikethrough functionality starts here
tasks.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-strikethrough")) {
    e.target.parentElement.parentElement.classList.toggle("completed");
  }
});
