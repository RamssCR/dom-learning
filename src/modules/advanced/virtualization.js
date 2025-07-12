/**
 * Creates a new element for the virtualized list.
 * @param {*} height - The height of the element.
 * @return {HTMLElement} The created element.
 */
export const createElement = (height) => {
  const element = document.createElement('div')
  element.style.position = 'absolute'
  element.style.height = `${height}px`
  element.style.width = '100%'
  element.style.borderBottom = '1px solid #eee'
  return element
}