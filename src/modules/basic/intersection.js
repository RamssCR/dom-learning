// Exercise 3: Lazy load images when they enter the viewport

/**
 * Lazy load images when they enter the viewport
 * @param {NodeListOf<Element>} images - List of images to lazy load
 * @returns {void}
 */
export const lazyLoadImages = (images) => {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target
        const realSrc = img.getAttribute('data-src')

        if (realSrc) {
          img.src = realSrc
          img.onload = () => {
            img.classList.add('loaded')
          }
          observer.unobserve(img)
        }
      }
    })
  }, {
    threshold: 0.1 // Load when 10% of the image is visible
  })

  images.forEach(image => observer.observe(image))
}