//setting variable
let theInput = document.querySelector(".add-task input");
let theButton = document.querySelector(".add-task .plus");
let taskContent = document.querySelector(".task-content");

let taskCount = document.querySelector(".task-count span");
let taskCompleted = document.querySelector(".task-completed span");

//focus on filed input
window.onload = function () {
  theInput.focus();
};

//add task
theButton.onclick = function () {
  if (theInput.value === "") {
    swal("Inter your Task please", "", "error");
  }

  if (theInput.value === "e") {
    swal("the task  is found before", "", "error");

  } else {
    let noTask = document.querySelector(".no-tasks");

    //check if span with no tasks massage is exist
    if (document.body.contains(document.querySelector(".no-tasks"))) {
      //remove no task
      noTask.remove();
    }

    //create  main span
    let mainSpan = document.createElement("span");
    //create delete button
    let deleteSpan = document.createElement("span");

    //create text to main span
    let text = document.createTextNode(theInput.value);

    //create text to span  delete
    let deleteText = document.createTextNode("Delete");

    //add text to element span
    mainSpan.appendChild(text);

    //add class to main span
    mainSpan.className = "task-box";

    //add  text span delete
    deleteSpan.appendChild(deleteText);

    //add class to span delete
    deleteSpan.className = "delete";

    //add delete span to main span
    mainSpan.appendChild(deleteSpan);

    //add main span to task container
    taskContent.appendChild(mainSpan);

    //empty input
    theInput.value = "";

    //focus again the input
    theInput.focus();

    //calc function
    calc();
  }

  window.localStorage.setItem("taskContent", "input.value");
};

document.addEventListener("click", function (e) {
  if (e.target.className == "delete") {
    e.target.parentNode.remove();
  }

  //check number of tasks inside container
  if (taskContent.childElementCount == 0) {
    createNoTasks();
    calc();
  }

  if (e.target.classList.contains("task-box")) {
    e.target.classList.toggle("finished");
    calc();
  }

 
});

function createNoTasks() {
  let noTasks = document.createElement("span");

  let textNoTaskSpan = document.createTextNode("No Tasks To Show");

  noTasks.appendChild(textNoTaskSpan);

  noTasks.className = "no-tasks";

  taskContent.appendChild(noTasks);
}


//function calc tasks

function calc(){
    //calc all tasks
taskCount.innerHTML=document.querySelectorAll(".task-content .task-box").length


//calc all completed tasks
taskCompleted.innerHTML=document.querySelectorAll(".task-content .finished").length 
}