/**
 * Creates a log entry in the console and on the page.
 * @param {HTMLElement} container - The container element where the log will be displayed.
 * @param {string} message - The message to log.
 * @param {string} [color='black'] - The color of the log message. 
 */
export const log = (container, message, color = 'black') => {
  // Creating the paragraph element
  const paragraph = document.createElement('p')
  paragraph.textContent = message
  paragraph.style.color = color

  // Appending the paragraph to the container
  container.appendChild(paragraph)
  container.scrollTop = container.scrollHeight

  // Logging to the console
  console.log(`%c${message}`, `color: ${color}`)
}

/**
 * Adds a click event listener to a button element.
 * @param {HTMLElement} loggerContainer - The container where logs will be displayed.
 * @param {string} id - The ID of the button element.
 * @param {string} color - The color of the log message.
 */
export const addListener = (loggerContainer, id, color) => {
  const element = document.querySelector(`#${id}`)

  // Capturing
  element?.addEventListener(
    'click',
    () => log(loggerContainer, `[CAPTURE] ${id}`, color),
    true
  )

  // Bubbling
  element?.addEventListener(
    'click',
    () => log(loggerContainer, `[BUBBLE] ${id}`, color),
    false
  )
}