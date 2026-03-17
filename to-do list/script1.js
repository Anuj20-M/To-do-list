let inputVal = document.getElementById("inputVal"); // Target input
let addBtn = document.getElementById("btn"); // Target button
let list = document.getElementById("list"); // Target list

const addtask = () => {
    const taskText = inputVal.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    const listItem = document.createElement("li");

    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteBtn);
    list.appendChild(listItem);

    inputVal.value = "";

    deleteBtn.addEventListener("click", () => {
        list.removeChild(listItem);
    });
};

// Add event listener OUTSIDE the function
addBtn.addEventListener("click", addtask);
