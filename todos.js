var listElemt = document.querySelector('#app ul');
var inputElement = document.querySelector ('#app input');
var buttonElement = document.querySelector ('#app button');

var todos = [
    'Fazer cafe',
    'Estudar Java',
    'Acessaar Comunidade Java'
];

function renderTodos() {
    listElemt.innerHTML = '';
    for(todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        todoElement.appendChild(todoText);
        listElemt.appendChild(todoElement);
    }
}

renderTodos();

function addTodo() {
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
}

buttonElement.onclick = addTodo;