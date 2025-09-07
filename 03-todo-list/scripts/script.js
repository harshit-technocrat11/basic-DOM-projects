let todos_list = []
// console.log(todos_list);

let todoContainer = document.querySelector(".display-todos");

//userinput
let userInput = document.getElementById("user-input");
console.log(userInput);

const addBtn = document.getElementById("add-todo");
console.log(addBtn);

const deleteBtn = document.getElementById("delete-todo");


console.log(todoContainer);


//utility functions

//CRUD - use

//read - display

function renderTodos(todos_list) {
    todoContainer.innerHTML = ""
  todos_list.map((obj) => {
    let todoElem = document.createElement("div");
    console.log(todoElem);
    todoElem.classList.add("todo");
    todoElem.innerHTML = `
            <p class="todo-text">${obj.task}</p>
            <button id="delete-todo" type="submit">
                <i class="fa-solid fa-xmark" style="color: #dd0e0e"></i>
           </button>
    `;
    //append to todo container
    todoContainer.appendChild(todoElem);
  });
}

//method -2  by creating elements

//create - todo

function handleCreateTodo() {
    if ( !userInput.value){
        
        return window.alert("task cannot be empty")
    }
  const text_input = userInput.value;
  console.log(text_input)

  const newtodo = {
    task: text_input,
    id: Date.now(),
  };

  console.log("new todo created:", newtodo.task, "\nid: ", newtodo.id)

  todos_list.unshift(newtodo);

  //render - after adding 
  renderTodos(todos_list)
}

//delete todo
function handleDeleteTodo(){
    
}

//event listners
addBtn.addEventListener("click", handleCreateTodo);

deleteBtn.addEventListener('click', handleDeleteTodo)


//calling
renderTodos(todos_list);
