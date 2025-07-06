import { state } from './projects/basic/form/state'
import { templates } from './projects/basic/form/dom'
import { hydrateDOM } from './projects/basic/form/events'

export const render = () => {
  const form = document.querySelector('form')
  const currentTemplate = templates(state)[state.current]
  const progress = Math.ceil(state.current / Object.keys(templates(state)).length * 100)

  form.replaceChild(currentTemplate(), form.childNodes[2])
  document.querySelector('.progress').style.width = `${progress}%`
  hydrateDOM()
}

render()