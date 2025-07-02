/**
 * Closes the modal when the close button is clicked or the Escape key is pressed.
 * Adds a closing animation and removes the modal from the DOM after the animation ends.
 * @param {HTMLElement} element - The element that triggered the modal close
 * @param {(e: KeyboardEvent) => void} keyboardListener - The keyboard event listener to remove
 * @returns {void}
 */
const closeModal = (element, keyboardListener) => {
  element.classList.add('closing')
  element.addEventListener('animationend', () => {
    element.remove()
    document.removeEventListener('keydown', keyboardListener)
    document.body.style.overflow = 'auto'
  }, { once: true })
}

/**
 * Creates a modal overlay with a specified content.
 * The modal can be closed by clicking the close button or pressing the Escape key.
 * @param {string} [content='A good-looking modal'] - The content to be displayed inside the modal.
 * @returns {HTMLElement} - The modal overlay element.
 */
export const createModal = (content = 'A good-looking modal') => {
  const overlay = document.createElement('section')
  overlay.className = 'modal-overlay'
  overlay.setAttribute('role', 'dialog')
  overlay.setAttribute('aria-modal', 'true')
  document.body.style.overflow = 'hidden'

  const modal = document.createElement('article')
  modal.className = 'modal-content'
  modal.innerHTML = `
    <button class="btn-modal-close" aria-label="Close Modal">&times;</button>
    <div class="modal-body">${content}</div>
  `
  overlay.appendChild(modal)

  // Closing the modal when clicking outside of it
  const buttonClose = modal.querySelector('.btn-modal-close')

  /**
   * Closes the modal when the Escape key is pressed
   * @param {KeyboardEvent} e - The keyboard event
   */
  const escListener = (e) => {
    if (e.key === 'Escape') closeModal(overlay, escListener)
  }

  buttonClose?.addEventListener('click', () => closeModal(overlay, escListener))
  document.addEventListener('keydown', escListener)
  return overlay
}