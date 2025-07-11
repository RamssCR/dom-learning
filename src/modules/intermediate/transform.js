let distanceX = 0
let lastFrameTime = performance.now()
let frameCount = 0
let fps = 0
const fpsDisplay = document.querySelector('.fps')

/**
 * Creates a transformation effect on the given element.
 * The transformation moves the element horizontally by a fixed distance.
 * @param {HTMLElement} element - The element to be transformed.
 * @returns {void}
 */
export const transform = () => {
  distanceX += 2

  const jankyContainer = document.querySelector('.jank')
  const performanceContainer = document.querySelector('.performance')
  
  jankyContainer.style.top = `${distanceX}px`
  performanceContainer.style.transform = `translateY(${distanceX}px)`
  requestAnimationFrame(transform)
}

/**
 * Updates the FPS (Frames Per Second) display in the given element.
 * It calculates the FPS based on the time elapsed since the last frame.
 * @param {number} now - The current time in milliseconds.
 * @returns {void} 
 */
export const updateFPS = (now) => {
  frameCount++
  const delta = now - lastFrameTime

  if (delta >= 1000) {
    fps = Math.round((frameCount * 1000) / delta)
    fpsDisplay.textContent = `FPS: ${fps}`
    frameCount = 0
    lastFrameTime = now
  }

  requestAnimationFrame(updateFPS)
}