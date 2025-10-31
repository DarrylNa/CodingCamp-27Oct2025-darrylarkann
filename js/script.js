let todos = [];
let currentFilter = 'all';

const todoForm = document.getElementById('todoForm');
const todoInput = document.getElementById('todoInput');
const dateInput = document.getElementById('dateInput');
const todoList = document.getElementById('todoList');
const emptyState = document.getElementById('emptyState');
const filterButtons = document.querySelectorAll('.btn-filter');

todoForm.addEventListener('submit', function(e){
    e.preventDefault();
    addTodo();
});

filterButtons.forEach(button =>{
    button.addEventListener('click', function(){
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        currentFilter = this.getAttribute('data-filter');
        renderTodos();
    });
});

function addTodo() {
    const text = todoInput.value.trim();
    const date = dateInput.value;

    if (text === '' || date === '') {
        alert('Please fill in all fields, nyaa!');
        return;
    }

    const todo = {
        id: Date.now(),
        text: text,
        date: date,
        completed: false
    };

    todos.push(todo);
    todoInput.value = '';
    dateInput.value = '';
    renderTodos()
}

function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !==id);
    renderTodos();
}

function toggleTodo(id) {
    const todo = todos.find(t => t.id === id);
    if (todo) {
        todo.completed = !todo.cmpleted;
        renderTodos();
    }
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('id-ID', options);
}

function getFilteredTodos(){
    if (currentFilter === 'active') {
        return todos.filter(todo => !todo.completed);
    } else if (currentFilter === 'completed') {
        return todos.filter(todo => todo.completed);
    }
    return todos;
}