

//Seleção de elementos
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const canceleditBtn = document.querySelector("#cancel-edit-btn");


//Funções
// função para salvar o todo
const saveTodo = (text) => {
    const todo = document.createElement("div"); // criando div externa
        todo.classList.add("todo")

    const todoTitle = document.createElement("h3"); // criando o titulo h3
        todoTitle.innerText = text;
        todo.appendChild(todoTitle);

    const doneBtn = document.createElement("button") // criando o botão doneBtn
        doneBtn.classList.add("finish-todo")
        doneBtn.innerHTML = '<i class="fa-solid fa-chec">Ok</i>'
        todo.appendChild(doneBtn);

    const editBtn = document.createElement("button") // criando o botão editBtn
        editBtn.classList.add("edit-todo")
        editBtn.innerHTML = '<i class="fa-solid fa-pen">Ed</i>'
        todo.appendChild(editBtn);

    const deleteBtn = document.createElement("button") // criando o botão deleteBtn
        deleteBtn.classList.add("remove-todo")
        deleteBtn.innerHTML = '<i class="fa-solid fa-xmark">Fi</i>'
        todo.appendChild(deleteBtn);
    
        todoList.appendChild(todo); // Colocando o todo na lista geral (todolist)

        todoInput.value = ""; // Apagar o ultimo digitado
        todoInput.focus(); // Colocar o focus na caixa de texto novamente
    };



//Eventos
// Evento para adiconar itens na lista de todos
todoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputValue = todoInput.value;

    if (inputValue) {
        saveTodo(inputValue) // chama a função que salva o todo
    }
});



//Evento dos cliques dos botões
document.addEventListener("click", (e) => {
    const targetEl = e.target; 
    const parentEl = targetEl.closest("div"); // adiconar ao elemento pai "div" mais proximo

    // botão finish-todo (OK)
    if (targetEl.classList.contains("finish-todo")) {
        parentEl.classList.toggle("done"); // marca (traceja) ne desmara a tarefa 
    }  
    
    // Botão edit-todo (Ed)
    if (targetEl.classList.contains("edit-todo")) {
        console.log("editou")
    }


    // Botão remode-todo (Fi)
    if (targetEl.classList.contains("remove-todo")) {
        parentEl.remove(); // Remove o elemento pai (parentEl)
    }

});


