/**
 * Handles throttling of a function call.
 * It ensures that the function is not called more than once in a specified time limit.
 * @param {(...args: unknown[]) => void} fn - The function to throttle.
 * @param {number} limit - The time limit in milliseconds.
 * @returns {(...args: unknown[]) => void} A throttled version of the function.
 */
export const throttle = (fn, limit) => {
  let wait = false
  return function (...args) {
    if (!wait) {
      fn.apply(this, args)
      wait = true
      setTimeout(() => (wait = false), limit)
    }
  }
}

/**
 * Updates the scroll position label with the current scroll position.
 * It uses throttling to limit the frequency of updates.
 */
export const updateScroll = throttle((label) => {
  label.textContent = `Scroll: ${window.scrollY.toFixed(2)}`
}, 50)