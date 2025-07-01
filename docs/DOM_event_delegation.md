# Event Delegation
It's a technique that allows events to be listened to from the
parent element instead of assigning multiple listeners to
each child.

This is possible due to the way the events can propagate
themselves across the DOM (from the deepest element upwards
or vice versa).

## Event Propagation
When an event is triggered, the browser follows 3 phases:

1. **Capturing phase:** From the `window` to the `target`.
2. **Target phase:** When the event reaches the node that triggered it.
3. **Bubbling phase:** From the `target` to the `window`.

> By default, events are handled by bubbling.

## Basic Example
```HTML
<ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

```JS
// Event delegation using bubbling (by default)
document.querySelector('#list')?.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    console.log(`Item clicked: ${e.target.textContext}`)
  }
})
```

No matter if `<li>` elements existed already or are dynamically
added, the parent element (`<ul>`) handles its child events.

### Using Capturing
```JS
document.querySelector('#list')?.addEventListener(
  'click',
  (e) => console.log(`Capturing click: ${e.target.textContent}`),
  true // This third argument activates capturing
)
```

## How to stop propagation
### 1st Example
Let's say you create a dropdown and you add an event on the body
so when you click outside, it disappears. However this event also
affects inside elements since it starts from the body to the target
element. Using `stopPropagation` will allow you to cancel this event
to afect desired elements depending on the position they are.

```JS
const dropdown = document.querySelector('#dropdown')
const trigger = document.querySelector('#trigger')

document.body.addEventListener('click', () => {
  dropdown?.style.display = 'none'
})

dropdown?.addEventListener('click', (e) => {
  e.stopPropagation() // This cancels the event when clicking the dropdown
})

trigger?.addEventListener('click', (e) => {
  e.stopPropagation() // Same thing as above but with the trigger button
})
```