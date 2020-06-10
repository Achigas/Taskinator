var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

//create new task list item 
var createTaskHandler = function (event) {

  //prevent default refresh
  event.preventDefault();

  //create variables for user inputs  
  var taskNameInput = document.querySelector("input[name='task-name']").value;
  var taskTypeInput = document.querySelector("select[name='task-type']").value;
  console.dir(taskTypeInput);
 
  //create list item  
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";

  //create div to hold task info and add to list item
  var taskInfoEl = document.createElement("div");
  //give it a class name
  taskInfoEl.className = "task-info";
  //add HTML content to div
  listItemEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
  //add to list item
  listItemEl.appendChild(taskInfoEl);
  //add entire list item to list
  tasksToDoEl.appendChild(listItemEl);
};

//on button click or enter - create a task
formEl.addEventListener("submit", createTaskHandler);