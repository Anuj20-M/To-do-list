let task = document.querySelector("#task");
let addBtn = document.querySelector(".add-btn");
let toDoList = document.querySelector(".todo-list");

function saveToLocal(taskText) {
  let oldTodo;

  if (localStorage.getItem("todoTask") === null) {
    oldTodo = [];
  } else {
    oldTodo = JSON.parse(localStorage.getItem("todoTask"));
  }

  oldTodo.push(taskText);

  localStorage.setItem("todoTask", JSON.stringify(oldTodo));
}

function removeFromLocal(taskText) {
  let savedTasks = JSON.parse(localStorage.getItem("todoTask"));

  savedTasks = savedTasks.filter(function (item) {
    return item !== taskText;
  });

  localStorage.setItem("todoTask", JSON.stringify(savedTasks));
}

function createTask(taskText) {
  let todoItem = document.createElement("div");
  todoItem.classList.add("todo-item");

  let checkbox = document.createElement("div");
  checkbox.classList.add("checkbox");

  let checkmark = document.createElement("div");
  checkmark.classList.add("checkmark");

  checkbox.appendChild(checkmark);

  let label = document.createElement("span");
  label.classList.add("label");
  label.textContent = taskText;

  let delBtn = document.createElement("button");
  delBtn.classList.add("delete-btn");
  delBtn.innerHTML = "&#10005";

  todoItem.append(checkbox, label, delBtn);

  toDoList.appendChild(todoItem);

  checkbox.addEventListener("click", function () {
    checkbox.classList.toggle("checked");
    label.classList.toggle("done");
  });

  delBtn.addEventListener("click", function () {
    toDoList.removeChild(todoItem);

    removeFromLocal(taskText);
  });
}

function addTask() {
  let newTask = task.value;

  if (newTask.trim() === "") {
    return;
  }

  createTask(newTask);

  saveToLocal(newTask);

  task.value = "";
}

function loadTasks() {
  let savedTasks = localStorage.getItem("todoTask");

  if (savedTasks === null) {
    return;
  }

  savedTasks = JSON.parse(savedTasks);

  savedTasks.forEach(function (item) {
    createTask(item);
  });
}

window.addEventListener("DOMContentLoaded", loadTasks);

window.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

addBtn.addEventListener("click", addTask);
