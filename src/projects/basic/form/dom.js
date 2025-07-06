import {
  locationTemplate,
  messageTemplate,
  personalTemplate,
  summaryTemplate
} from './components'
import { state } from './state'

/**
 * Creates a step template for a multi-step form.
 * This function returns a function that, when called, creates a new DOM element
 * containing the provided template.
 * @param {string} template - The HTML template string for the step. 
 * @returns {() => Element | null} A function that returns a new DOM element containing the template.
 */
const stepTemplate = (template) => () => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = template
  return wrapper.firstElementChild
}

/**
 * Renders the personal information step of a multi-step form.
 * This function generates an HTML template for the first step of the form,
 * allowing users to input their personal details such as name, email, and phone number.
 * @param {typeof import('./state').state.data} state - The current state of the form, containing user data.
 * @returns {Record<number, () => Element | null>} An object containing the HTML template for each step.
 */
export const templates = (state) => ({
  1: stepTemplate(personalTemplate(state)),
  2: stepTemplate(locationTemplate(state)),
  3: stepTemplate(summaryTemplate(state))
})

/**
 * Creates an error message element for a specific form field.
 * This function generates a new DOM element that displays an error message
 * for a given form field identified by the provided key.
 * @param {string} key - The key of the form field to display the error for.
 * @return {void}
 */
export const createError = (key) => {
  const errorText = document.createElement('p')
  errorText.dataset.error = key
  errorText.className = 'error'
  errorText.textContent = state.errors[key]

  document.querySelector(`[name="${key}"]`)
    .closest('.group-controller')
    .appendChild(errorText)
}

/**
 * Displays a popup message with the given title and message.
 * @param {{ title: string, message: string }} object - The title and message for the popup.
 * @returns {void}
 */
export const popupMessage = ({ title, message }) => {
  document.querySelector('.message')?.remove()
  const wrapper = document.createElement('div')
  const popup = messageTemplate({ title, message })
  wrapper.innerHTML = popup
  document.body.appendChild(wrapper.firstElementChild)
  
  document.querySelector('.message').addEventListener('animationend', () => {
    document.querySelector('.message').remove()
  }, { once: true })
}