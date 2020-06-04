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

        var linkElement = document.createElement('a');

        linkElement.setAttribute('href', '#');

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');

        var linkText = document.createTextNode('  Excluir');

        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
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


function deleteTodo(pos) {
    todos.splice(pos, 1);
    renderTodos();
}