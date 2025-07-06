import { rules } from './rules'
import { saveData } from './dataHandler'
import { state } from './state'

let debounceTimer

/**
 * Handles form input events to update the state with user data.
 * This function listens for input events on form fields and updates the state.
 * @param {Event} e - The input event triggered by the user.
 * @returns {void}
 */
export const formHandler = (e) => {
  if (e.target.matches('INPUT')) {
    const { value, name } = e.target
    clearTimeout(debounceTimer)
    debounceTimer = setTimeout(() => {
      if (state.errors[name]) {
        delete state.errors[name]
        document.querySelector(`[data-error="${name}"]`)?.remove()
      }
      state.data = { ...state.data, [name]: value }
      saveData(state)
    }, 300)
  }
}

/**
 * Validates the form by checking if all required fields are filled.
 * If a field is empty, it adds an error message to the state.
 * @returns {void}
 */
export const validateForm = () => {
  state.errors = {}
  const controllers = document.querySelectorAll('input')

  controllers.forEach((controller) => {
    const field = rules[controller.name]
    if (field.required && controller.value.trim() === '') {
      state.errors[controller.name] = `${controller.name} is required`
    } else if (field.pattern && !field.pattern.test(controller.value)) {
      state.errors[controller.name] = `Invalid ${controller.name} format.`
    } else if (field.max && controller.value.length > field.max) {
      state.errors[controller.name] = `Maximum characters exceded. (${field.max})`
    }
  })
}