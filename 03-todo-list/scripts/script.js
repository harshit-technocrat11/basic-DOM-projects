
let todoContainer = document.querySelector(".display-todos");

//userinput
let userInput = document.getElementById("user-input");
console.log(userInput)

console.log(todoContainer)

console.log(todos_list)


//utility functions

//CRUD - use

//read - display

function renderTodos(todos_list) {
    todoContainer.innerHTML = "";  //clear it
    //mapping
    const todos = todos_list.map((todo)=>{
        console.log(todo)

        return `<div class="todo">  
          <p class="todo-text">${todo.task}</p>
          <button id="delete-todo" type="submit">
            <i class="fa-solid fa-xmark" style="color: #dd0e0e"></i>
          </button>
        </div>`;
    })

    console.log(todos);
    todoContainer.innerHTML = todos.join('')

}

//create - todo
function createTodo(){

}


//event listners
userInput.addEventListener('input', (e)=>{
    let newtodo = e.target.value;
    console.log(newtodo)
    todos_list.unshift(newtodo);

})


//calling
renderTodos(todos_list)





