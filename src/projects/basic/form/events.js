import { loadData, reset } from './dataHandler'
import { popupMessage } from './dom'
import { formHandler, validateForm } from './formHandler'
import { render } from './index'
import { state } from './state'

/**
 * Handles DOM events for the form.
 * This function adds event listeners to the next and previous buttons,
 * as well as input fields in the form.
 * It updates the state based on user interactions and re-renders the form.
 * @returns {void}
 */
export const hydrateDOM = () => {
  const buttonNext = document.querySelector('.next')
  buttonNext?.addEventListener('click', () => {
    validateForm()

    if (Object.keys(state.errors).length === 0) {
      state.current += 1
    }

    render()
  })

  const buttonPrevious = document.querySelector('.prev')
  buttonPrevious?.addEventListener('click', () => {
    state.errors = {}
    state.current -= 1
    render()
  })

  const form = document.querySelector('form')
  form.addEventListener('input', (e) => {
    formHandler(e)
  })

  const loadButton = document.querySelector('.load')
  loadButton.addEventListener('click', () => {
    loadData(state)
    popupMessage({
      title: 'Data Loaded',
      message: 'Your data has been successfully loaded from your local storage.'
    })
    render()
  })

  const resetButton = document.querySelector('.reset')
  resetButton.addEventListener('click', () => {
    reset(state)
    popupMessage({
      title: 'Data Reset',
      message: 'Your data has been successfully reset.'
    })
    render()
  })
}