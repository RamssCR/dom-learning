/**
 * @typedef {object} Todo
 * @property {number} id - The unique identifier for the todo item.
 * @property {string} todo - The text of the todo item.
 * @property {boolean} completed - Whether the todo item is completed.
 */

/**
 * Loads todos from localStorage or returns a default todo if none are found.
 * This function attempts to retrieve the todos from localStorage and parse them.
 * @returns {Todo[]} The list of todos loaded from localStorage or a default todo.
 */
const loadTodos = () => {
  try {
    const storedTodos = localStorage.getItem('todos')
    return storedTodos ? JSON.parse(storedTodos) : [{ id: 1, todo: 'Learn JavaScript', completed: false }]
  } catch {
    return [{ id: 1, todo: 'Learn JavaScript', completed: false }]
  }
}

/** @type {Todo[]} */
const todos = loadTodos()

/**
 * Saves the current todos to localStorage.
 * This function serializes the todos array and stores it in localStorage under the key 'todos'.
 * @returns {void}
 */
const saveTodos = () => localStorage.setItem('todos', JSON.stringify(todos))


/**
 * Creates a new todo item element.
 * @param {string} [todo=''] - The text of the todo item.
 * @returns {HTMLElement} The todo item element.
 */
export const createTodo = (todo = '') => {
  todos.unshift({ id: todos.length + 1, todo, completed: false })
  saveTodos()
}

/**
 * Creates a new todo item element.
 * @param {Todo} todo - The text of the todo item.
 * @returns {HTMLElement} The todo item element.
 */
export const createElement = ({ todo, completed, id }) => {
  const item = document.createElement('li')
  item.dataset.id = id
  item.className = 'todo-item'
  item.innerHTML = `
    <button class="${completed ? 'completed' : 'not-completed'}">Completed</button>
    <span class="todo-text">${todo}</span>
    <button class="delete">Delete</button>
  `

  return item
}

/**
 * Refreshes the todo list in the given container.
 * @param {HTMLElement} container - The container element to refresh the todo list in.
 */
export const refreshTodos = (container) => {
  container.innerHTML = ''
  todos.forEach(todo => {
    const todoElement = createElement(todo)
    container.appendChild(todoElement)
  })
}

/**
 * Deletes a todo item by its ID.
 * @param {number} id - The ID of the todo item to delete.
 */
export const deleteTodo = (id) => {
  const index = todos.findIndex(todo => todo.id === id)
  if (index !== -1) {
    todos.splice(index, 1)
    saveTodos()
  }
}

/**
 * Toggles the completion status of a todo item by its ID.
 * @param {number} id - The ID of the todo item to toggle.
 */
export const toggleTodo = (id) => {
  const todo = todos.find(todo => todo.id === id)
  if (todo) {
    todo.completed = !todo.completed
    saveTodos()
  }
}