# Reflow vs Repaint

## Reflow
Reflow (or layout) is the process where the browser calculates the position and width of
all elements in the DOM.

It's triggered when you modify something that affects the document geometry: size, position,
display, etc...

### When does a reflow occur?
- By changing the window's size (`resize`)
- By modifying styles that affect the browser: `display`, `width`, `height`, `margin`, `padding`, etc...
- By adding or removing elements from the DOM.
- By changing classes that affects these properties.
- By calling methods that force layout's reading: `offsetWidth`, `offsetHeight`, `getBoundingClientRect()`, etc...

> [!WARNING]
> Reflow can be **Expensive**: if you have 1000 elements it recalculates all of them.

## Repaint
Repaint is where the browser paints the pixels on screen without changing the layout.

It's triggered when visual styles are changed without altering the document's geometry.

### When does a repaint occur?
- When changing `background-color`, `visibility`, `box-shadow`, `border-color`, etc...
- When changing the text (not on size or structure).
- When changing `opacity`, `transform`, `filter` (if they don't trigger a reflow).

> [!NOTE]
> A repaint is less expensive than a reflow.

## Example
```JS
// Reflow + Repaint
element.style.width = '200px'

// Only repaint
element.style.backgroundColor = 'red'
```

## Best practices to prevent unnecesary reflows
- Use `classList.add/remove` instead of changing styles individually.
- Use `visibility: hidden` instead of `display: none` if you only need to hide the element.
- Modify elements outsite of the flow, such as `position: absolute` or `fixed`.
- Group DOM reads and writes:

```JS
// ❌ This forces multiple reflows
const height = element.offsetHeight
element.style.height = `${height + 10}px`

// ✅ Read first, then write
const height = element.offsetHeight
requestAnimationFrame(() => {
  element.style.height = `${height + 10}px`
})
```

## Do's and Dont's

### ❌ Avoid reflows on loops
```JS
for (const element of elements) {
  element.style.width = `${element.offsetWidth}px` // --> `offsetWidth`: Reflow per each iteration
}
```

### ✅ Work outside of the visible DOM
- Modify elements out of screen, hid with `visibility: none`, then show them.
  - Useful to create components without penalizing the actual flow.

```JS
element.style.visibility = 'none'
element.style.width = '200px' // massive changes
element.style.visibility = 'visible'
```

### ✅ Disable transitions if you're gonna change a lot of styles
```CSS
/* Transition only the necessary */
transition: background-color 0.3s;
```

### ✅ Reduce `display: none/block` when not necessary
- Prefer `visibility: hidden` or `opacity: 0` if no reflow is neeeded.

### ✅ Use `position: absolute/fixed` to isolate layout impact.
- Help changes on this element to not affect its siblings.

### ✅ Use `transform` and `opacity` for animations
- It doesn't trigger reflows, only repaints.

### ❌ Avoid changing layout properties 1By1

```JS
// ❌ Reflow per each change
element.style.padding = '10px'
element.style.margin = '20px'
element.style.width = '100px'
```

### ❌ Avoid animations with `top`, `left`, `width`, `height`
- Using these on animations forces the browser to perform reflows on each frame (very expensive).
- Use `transform: translate()` or `scale()` instead.