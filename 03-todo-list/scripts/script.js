let todos_list = [
    // {
    //   task: "hey go to the gym",
    //   id: 879
    // }

]
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


//create - todo

function handleCreateTodo() {
  if ( !userInput.value){
    window.alert('task cannot be empty!!');
    return;
  } 
  
  const inputText = userInput.value ;
  console.log(inputText)
  
  const obj = {
    task: inputText,
    id: Date.now()
  }
  
  todos_list.unshift(obj);
  
  //render
  renderTodos(todos_list)
  userInput.value =""
  console.log(userInput)
  
}

//read - display

function renderTodos(todos_list) {
    todoContainer.innerHTML = ""
  todos_list.map((obj) => {
    let todoElem = document.createElement("div");
    console.log(todoElem);
    todoElem.classList.add("todo");
    todoElem.innerHTML = `
            <p class="todo-text">${obj.task}</p>
          
    `;
    //to add delete functionality -- will attach eventlistner to each button here only -- as this is a loop

    let addBtn = document.createElement('button');
    addBtn.classList.add('add-btn')
    addBtn.innerText = "❌"

    //adding to todoelem
    todoElem.appendChild(addBtn);

    console.log("object: ", obj)
    
    addBtn.onclick  = () =>{
        handleDeleteTodo(obj.id);
    }

    //append to todo container
    todoContainer.appendChild(todoElem);
    
  });
}

//delete todo
function handleDeleteTodo(id) {
  console.log("id:", id)

  //jin elements ki id match na kare- filter them - update the orignal aarray

  todos_list = todos_list.filter((obj) =>{
    return obj.id !== id; 
  })

  console.log(todos_list)

  renderTodos(todos_list);
  
}



//event listners
addBtn.addEventListener("click", handleCreateTodo);

//keyboard - enter event


//calling
renderTodos(todos_list);
