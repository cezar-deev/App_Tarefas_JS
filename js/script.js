

//Seleção de elementos
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const canceleditBtn = document.querySelector("#cancel-edit-btn");

let oldInputValue; // 


//Funções
// função para salvar o todo
const saveTodo = (text) => {
    const todo = document.createElement("div"); // criando div externa
    todo.classList.add("todo")

    const todoTitle = document.createElement("h3"); // criando o titulo h3 para guardar
    todoTitle.innerText = text;
    todo.appendChild(todoTitle);

    const doneBtn = document.createElement("button") // criando o botão doneBtn (Feito)
    doneBtn.classList.add("finish-todo")
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
    todo.appendChild(doneBtn);

    const editBtn = document.createElement("button") // criando o botão editBtn (Editar)
    editBtn.classList.add("edit-todo")
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'
    todo.appendChild(editBtn);

    const deleteBtn = document.createElement("button") // criando o botão deleteBtn (Excluir)
    deleteBtn.classList.add("remove-todo")
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    todo.appendChild(deleteBtn);
    
    todoList.appendChild(todo); // Colocando o todo na lista geral (todolist)

    todoInput.value = ""; // Apagar o ultimo digitado
    todoInput.focus(); // Colocar o focus na caixa de texto novamente
    };

    //Função para editar o todo
    const toggleForms = () => {
        editForm.classList.toggle("hide"); // se tiver exibido escode, e tiver escondido exibe
        todoForm.classList.toggle("hide");
        todoList.classList.toggle("hide");
        };


//Eventos
// Evento para adiconar itens na lista de todos
todoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputValue = todoInput.value;

    if (inputValue) {
        saveTodo(inputValue) // chama a função que salva o todo(tarefa)
    }
});


//Eventos dos cliques dos botões ( ok,Ed,FI )
document.addEventListener("click", (e) => {
    const targetEl = e.target; 
    const parentEl = targetEl.closest("div"); // adiconar ao elemento pai "div" mais proximo
    let todoTitle;

    // evento para capturar o titulo
    if (parentEl && parentEl.querySelector("h3")) {
        todoTitle = parentEl.querySelector("h3").innerText;
    }

    // Evento do botão finish-todo (OK)
    if (targetEl.classList.contains("finish-todo")) {
        parentEl.classList.toggle("done"); // marca e desmarcar tarefa
    }  
    
    // BEvento do botão remode-todo (Fi)
    if (targetEl.classList.contains("remove-todo")) {
        parentEl.remove(); // Remove o elemento pai (parentEl)
    }

    // Evento do botão edit-todo (Ed)
    if (targetEl.classList.contains("edit-todo")) {
        toggleForms();

        editInput.value = todoTitle;
        oldInputValue.value = todoTitle;

    }
 

});

//Evento do botão cancelar ( Cancelar )
canceleditBtn.addEventListener("click", (e) => {
    e.preventDefault()

 toggleForms();
})
