const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

// template of single todo appearing to the list
const generateTemplate = todo => {

  const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
    <i class="far fa-trash-alt delete ms-3"></i>
    </li>
  `;

  list.innerHTML += html;

};

// adding new todos to the list
addForm.addEventListener('submit', e => {

  e.preventDefault();
  const todo = addForm.add.value.trim();

  if (todo.length) {
    generateTemplate(todo);
    addForm.reset();
  }

});

// delete todos
list.addEventListener('click', e => {

  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
  }

});

// filter function
const filterTodos = (term) => {

  Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add('d-none'));

  Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove('d-none'));

};

// keyup event
search.addEventListener('keyup', () => {

  const term = search.value.trim().toLowerCase();
  filterTodos(term);

});