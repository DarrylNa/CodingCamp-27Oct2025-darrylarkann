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

