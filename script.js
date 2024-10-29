// console.log("Hello world!");
let todolist = [
    "Demo task 1",
    "Demo task 2"
]
//const = declare a value and dont allow it to change 
const listElement = document.getElementById("list")
const addButton = document.getElementById("addbtn") //add a button
const deleteButton = document.getElementById("delbtn") //delete a button
function updateTasks() {
    listElement.innerHTML = ""; //empty the list before updating
    for (let i = 0; i <todolist.length; i++) { 
        let newTaskElement = document.createElement("li"); //creating a li element 
        newTaskElement.textContent = todolist[i]; //creating a todolist element
        listElement.appendChild(newTaskElement);
}
}
function addTask(taskName){
    todolist.push(taskName);
    updateTasks();
}
//no args taken 
function deleteTask(){
    todolist.pop(); //deletes the task
    updateTasks();
}

//hears for the click to delte 
deleteButton.addEventListener("click", ()=> {
    deleteTask()
})


//add button for adding event listeners to hear for the click to add task 
addButton.addEventListener("click", ()=> {
    const task = prompt("Enter task name")
    addTask(task) 
})

updateTasks();
console.log("listElement");