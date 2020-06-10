var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

//create new task list item 
var createTaskHandler = function (event) {

  event.preventDefault();
    
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  listItemEl.textContent = "This is a new task.";
  tasksToDoEl.appendChild(listItemEl);
};

//on button click or enter - create a task
formEl.addEventListener("submit", createTaskHandler);