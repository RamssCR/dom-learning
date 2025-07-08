import { state } from './state'
import { createError, templates } from './dom'
import { hydrateDOM } from './events'

/**
 * Renders the current form template based on the state.
 * This function updates the form with the current template and progress bar.
 * It also displays any validation errors by appending error messages to the relevant form fields.
 * @returns {void}
 */
export const render = () => {
  const form = document.querySelector('form')
  const currentTemplate = templates(state)[state.current]
  const progress = Math.ceil(state.current / Object.keys(templates(state)).length * 100)

  document.querySelectorAll('.error').forEach(element => element.remove())
  form.replaceChild(currentTemplate(), form.childNodes[4])

  Object.keys(state.errors).forEach(key => {
    createError(key)
  })

  document.querySelector('.progress').style.width = `${progress}%`
  hydrateDOM()
}

/*
<main class="container">
  <form class="multi-step-form">
    <div class="progress-background">
      <div class="progress"></div>
    </div>
    <span class="notice">* This form contains an auto-save feature.</span>
  </form>
  <div class="outter-buttons">
    <button class="reset">Reset</button>
    <button class="load">Load</button>
  </div>
</main>
*/