/**
 * Easing function for smooth animations.
 * @param {number} t - The progress of the animation (0 to 1).
 * @returns {number} - The eased progress.
 */
const easeOutQuad = (t) => t * (2 - t);

/**
 * Animate a counter from a start value to an end value over a duration.
 * @param {HTMLElement} element - The DOM element to update with the current counter value.
 * @param {number} start - The starting value of the counter.
 * @param {number} end - The ending value of the counter.
 * @param {number} duration - The duration of the animation in milliseconds.
 * @return {void}
 */
export const animateCounter = (element, start, end, duration) => {
  let startTimestamp = performance.now();

  const step = (timestamp) => {
    const elapsed = timestamp - startTimestamp;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeOutQuad(progress);
    const currentValue = Math.floor(start + (end - start) * easedProgress);
    element.textContent = currentValue;

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
}