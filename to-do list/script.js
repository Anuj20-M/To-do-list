let inputVal = document.getElementById("inputVal"); //Target input
let addBtn = document.getElementById("btn");// target button
let list = document.getElementById("list"); //target list where the added task show


const addtask = () => {
    const taskText = inputVal.value.trim();
    if (taskText === "") {
        alert('please enter a task');
        return;
    }

    const listItem = document.createElement("li");

    const taskInput = document.createElement("span");
    taskInput.textContent = taskText;

    const deletBtn = document.createElement("button");
    deletBtn.textContent = "delete";
    deletBtn.classList.add("delet-btn");

    listItem.appendChild(taskInput);
    listItem.appendChild(deletBtn);
    list.appendChild(listItem);

    inputVal.value="";

    deletBtn.addEventListener("click",()=>{
        list.removeChild(listItem);
    });
   

}
//  addBtn.addEventListener("click",addtask());
addBtn.addEventListener("click", addtask);

