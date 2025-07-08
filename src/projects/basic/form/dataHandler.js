/**
 * Saves the current state to localStorage.
 * @param {typeof import('./state').state} state - The current state object containing form data and errors.
 * @returns {void}
 */
export const saveData = (state) => localStorage.setItem('data', JSON.stringify(state))

/**
 * Loads the saved data from localStorage into the state.
 * If no data is found, it retains the current state.
 * @param {typeof import('./state').state} state - The current state object containing form data and errors.
 * @returns {void}
 */
export const loadData = (state) => {
  const form = JSON.parse(localStorage.getItem('data'))
  if (form) {
    state.data = form.data
    state.errors = form.errors
  }
}

/**
 * Resets the form state to its initial values.
 * @param {typeof import('./state').state} state - The current state object containing form data and errors.
 */
export const reset = (state) => {
  state.data = Object.fromEntries(Object.keys(state.data).map((key) => [key, '']))
  state.errors = {}
  state.current = 1
  saveData(state)
}