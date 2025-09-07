
let todoContainer = document.querySelector(".display-todos");
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
          <h4 class="todo-text">${todo.task}</h4>
          <button id="delete-todo" type="submit">
            <i class="fa-solid fa-xmark" style="color: #dd0e0e"></i>
          </button>
        </div>`;
    })

    console.log(todos);
    todoContainer.innerHTML = todos.join('')

}


//calling
renderTodos(todos_list)





