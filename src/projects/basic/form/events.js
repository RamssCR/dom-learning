import { render } from '../../../main'
import { formHandler } from './formHandler'
import { state } from './state'

export const hydrateDOM = () => {
  const buttonNext = document.querySelector('.next')
  buttonNext?.addEventListener('click', () => {
    state.current += 1
    render()
  })

  const buttonPrevious = document.querySelector('.prev')
  buttonPrevious?.addEventListener('click', () => {
    state.current -= 1
    render()
  })

  const form = document.querySelector('form')
  form.addEventListener('input', (e) => {
    formHandler(e)
  })
}