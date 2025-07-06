import {
  locationTemplate,
  personalTemplate,
  summaryTemplate
} from './components'

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