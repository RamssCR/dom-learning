# `requestIdleCallback`
It's a native browser function that allows to run tasks when the browser
is inactive, that means:

> _"When it's neither drawing, nor painting, nor handling active interactions."_

It's main use is for non-critical tasks that can wait a little, like:

- Preloading data.
- Loading offscreen images.
- Rendering invisible components (lazy rendering)
- Index long lists.
- Measure performance.

## Basic Syntax
```JS
requestIdleCallback((deadline) => {
  while (deadline.timeRemaining() > 0) {
    // Non-blocking UI tasks
  }
})
```

## Do's
| Case                      | Recommended use                               |
|---------------------------|-----------------------------------------------|
| Long or slow tasks        | Analize a lot of data, massive render, etc    |
| "Nice to have" feature    | Suggestions preload, usage analysis           |
| Differed data             | Images that aren't visible in the viewport    |
| Background tasks          | Local save, silent analytic                   |

## Don'ts
| Case                      | Why to avoid it                               |
|---------------------------|-----------------------------------------------|
| Critical tasks            | If something's vital (auth, security, etc...) |
| Time accuracy             | It can take seconds to run if browser's busy  |
| Animations                | Use `requestAnimationFrame` for that          |

## Example: Lazy rendering 1k divs
```HTML
<div id="container">Loading...</div>
```

```JS
const MAXIMUM_CONTAINERS = 1000

requestIdleCallback((deadline) => {
  const container = document.querySelector('#container')
  container.textContext = ''

  let i = 0

  const workLoop = () => {
    while (i < MAXIMUM_CONTAINERS && deadline.timeRemaining() > 0) {
      const element = document.createElement('div')
      element.textContent = `Element ${i}`
      element.style.padding = '4px'
      container.appendChild(element)
      i++
    }

    if (i < MAXIMUM_CONTAINERS) {
      requestIdleCallback(workLoop)
    }
  }

  workLoop()
})
```

* ✅ Does not freeze the UI
* ✅ Only uses idle time
* ✅ Ideal for lists, placeholders or progressive rendering