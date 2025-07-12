/**
 * Debounces a function by a specified delay.
 * @param {(...args: unknown[]) => void} fn - The function to debounce.
 * @param {number} delay - The delay in milliseconds.
 * @returns {(...args: unknown[]) => void}
 */
export const debounce = (fn, delay) => {
  let timer
  return function (...args) {
    clearTimeout(timer)
    timer = setTimeout(() => fn.apply(this, args), delay)
  }
}

/**
 * Fetches results and updates the status text.
 */
export const fetchResults = debounce((event, { status }) => {
  const value = event.target.value
  status.textContent = `Output: ${value}`
}, 500)