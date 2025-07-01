# Observers

## `MutationObserver`
It observes changes on the DOM when a node or attribute is added,
removed or modified.

### Common uses
* To detect when a component is injected dynamically.
* To observe attribute changes (like `class`, `style`, etc...).
* To reactivate events if content is replaced via JS (like SPAs).

### Example
```JS
const element = document.querySelector('.my-element')

const { observe, disconnect } = new MutationObserver(mutations => {
  for (const mutation of mutations) {
    if (mutation.type === 'childList') {
      console.log('child nodes changed')
    }

    if (mutation.type === 'attributes') {
      console.log(`Attribute ${mutation.attributeName} was modified`)
    }
  }
})

// Start observing changes...
observe(element, {
  childList: true,
  attributes: true,
  subtree: true
})

// Disconnect from the observer...
disconnect()
```

## `IntersectionObserver`
It detects when an element enters or exits the viewport (or from
its container). Ideal for lazy-loading, animations, etc...

### Common uses
* Lazy loading for images.
* Activates animations when scrolling.
* Detects ads or banners' visibility.

### Example
```JS
const image = document.querySelector('#image')

const { observe, unobserve } = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log('Visible element inside the viewport')
      // Add logic to your image here...
      unobserve(entry.target)
    }
  })
}, {
  root: null, // Viewport
  threshold: 0.5 // 50% visible
})

// Start observing element intersection...
observe(image)
```

## `ResizeObserver`
It detects changes in an element's size (not the viewport's, that's
what `resize` with `window` is for).

### Common uses
* Dynamic layouts without using `window.resize`.
* Recalculate dimensions of graphics, modals, etc...

### Example
```JS
const box = document.querySelector('#resizable')

const { observe } = new ResizeObserver(entries => {
  for (const entry of entries) {
    const { width, height } = entry.contentRect
    console.log(`New size: ${width} x ${height}px`)
  }
})

// Start observing resize changes...
observe(box)
```