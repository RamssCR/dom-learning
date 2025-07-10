let angle = 0

/**
 * Rotates an element continuously.
 * @param {HTMLElement} element - The element to rotate.
 * @returns {void}
 */
export const rotate = (element) => {
  angle = (angle + 3) % 360
  element.style.transform = `rotate(${angle}deg)`
  requestAnimationFrame(() => rotate(element))
}