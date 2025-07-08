# DOM
## Goals to properly learn JS

### 1st Module
* What is the DOM, how it's structured(`document`, `window`, `HTMLElement`) ✅
* differences between `target` and `currentTarget` ✅
* Event delegation (using `bubbling` and `capturing`) ✅
* Useful DOM properties:
  - `classList`, `dataSet`, `closest`, `matches`
  - `append`, `prepend`, `replaceWith`, `remove` ✅
* Correct use of `addEventListener` and `{ once: true }` ✅
* `MutationObserver`, `IntersectionObserver`, `ResizeObserver` ✅

> **Project:** A sortable and filterable table with thousands of records. ✅

### 2nd Module
* How the event loop works and `requestAnimationFrame`
* Reflow vs repaint
* Lazy rendering with `requestIdleCallback`
* Virtualization with libraries or by hand
* Techniques like debounce or throttle

> **Project:** Lazy images gallery + virtualized table.

### 3rd Module (Svelte only)
* Custom Actions to use `IntersectionObserver` (`useInfiniteScroll`)
* Component that reacts to size changes (`ResizeObserver`)
* Optimized table with `@html` + chunk rendering (`await tick()`)