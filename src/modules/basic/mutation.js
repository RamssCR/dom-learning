// Exercise: Implementing MutationObserver to change the color of an element when a class is toggled
import { pickRandomColor } from '../../utils/pickRandomColor'

/**
 * Changes the color of an element by using an
 * MutationObserver to detect changes in the DOM.
 * @param {HTMLElement} element - The element to observe.
 * @returns {void} 
 */
export const changeColor = (element) => {
  const observer = new MutationObserver(([mutation]) => {
    if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
      element.style.color = pickRandomColor()
      console.log(`Changed color to: ${element.style.color}`)
    }
  })

  observer.observe(element, { attributes: true })
}

/**
 * Toggles the 'active' class on the target element.
 * @param {Event} e - The event object.
 * @returns {void}
 */
export const toggleClass = ({ target }) => {
  target.classList.toggle('active')
}


// Exercise 2: Implementing MutationObserver to update the count of dynamically added containers

/**
 * Updates the container count displayed on the page.
 * @param {HTMLElement} element - The parent element containing the containers.
 * @param {HTMLElement} counter - The element where the count will be displayed.
 * @return {void}
 */
export const updateCounter = (element, counter) => {
  const observer = new MutationObserver(() => {
    const count = element.children.length
    counter.textContent = count
    console.log(`Container count updated: ${count}`)
  })

  observer.observe(element, { childList: true })
}

/**
 * Adds a new container element to the specified parent element.
 * @param {HTMLElement} element - The parent element to which the new container will be added.
 * @return {void}
 */
export const addContainer = (element) => {
  const container = document.createElement('div')
  container.className = 'sample-container'
  element.appendChild(container)
}