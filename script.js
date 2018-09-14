let todo = document.getElementById("toDo");
let doing = document.getElementById("doing");
let done = document.getElementById("done");
const submit = document.getElementById("submit");
const input = document.getElementById("input");

let EL_ID;

document.addEventListener("dragenter", ()=>{
    element = event.path[0].id; 
    console.log("-----------");
    console.log("element:");
    console.log(element);
    console.log("-----------");
    EL_ID = element;
});

const addTask = (event) => {
    var task = document.createElement("p");
    task.style.height = "30px";
    task.style.width = "200px";
    task.textContent = input.value;
    task.style.position = "relative";
    task.draggable = true;
    
    task.appendChild(createDragButton(event))
    task.appendChild(createRemoveButton());
    todo.appendChild(task);  
    
    input.value = "";
    
    task.ondragend = function(event) {
        event.preventDefault();
        var taskData = event.target;

        console.log(EL_ID);
        
        if (EL_ID == doing.id) {
            console.log("added to doing");
            doing.appendChild(taskData);
            doing = document.getElementById("doing");
        }
        else if (EL_ID == done.id) {
            console.log("added to done");
            done.appendChild(taskData);
            done = document.getElementById("done");
        }
        else if (EL_ID == todo.id) {
            console.log("added to todo");
            todo.appendChild(taskData);
            todo = document.getElementById("toDo");
        }
    }  
}

const deleteTask = (event) => {
    console.log(event);
    if(event.target !== "button") {
        event.target.parentNode.remove();
    } else {
        return;
    }
}

const createRemoveButton = () => {
    var button = document.createElement("button");
    button.textContent = "X";
    button.addEventListener("click" , deleteTask);
    return button;
}

const createDragButton = (event) => {
    var button = document.createElement("button");
    button.textContent = "O";
    return button;
}

submit.addEventListener("click" , addTask);