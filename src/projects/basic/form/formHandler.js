import { state } from './state'

/**
 * @param {Event} e 
 */
export const formHandler = (e) => {
  if (e.target.matches('INPUT')) {
    const { value, name } = e.target
    state.data = { ...state.data, [name]: value }
  }
}