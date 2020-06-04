var listElemt = document.querySelector('#app ul');
var inputElement = document.querySelector ('#app input');
var buttonElement = document.querySelector ('#app butoon');

var todos = [
    'Fazer cafe',
    'Estudar Java',
    'Acessaar Comunidade Java'
];

function renderTodos() {
    for(todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        todoElement.appendChild(todoText);
        listElemt.appendChild(todoElement);
    }
}

renderTodos();