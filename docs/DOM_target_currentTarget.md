# `target` vs. `currentTarget`

| property         | What it does                                    |
|------------------|-------------------------------------------------|
| `target`         | The element where the event was triggered       |
| `currentTarget`  | The element that was delegated the event to     |

## What's the difference?
Events on the DOM spread upwards (by `bubbling`) and a parent element
can have an `addEventListener` and the event occuring on a child element.

```HTML
<article id="parent-container">
  <button id="child-button">Sample Button</button>
</article>
```

```JS
const parent = document.querySelector('#parent-container')
parent.addEventListener('click', (e) => {
  console.log(e.currentTarget.id) // parent-container
  console.log(e.target.id) // child-button
})
```

## Cases of use

### Event Delegation (For performance purposes)
```HTML
<ul id="list">
  <li data-id="1">Element 1</li>
  <li data-id="2">Element 2</li>
  <li data-id="3">Element 3</li>
  <li data-id="4">Element 4</li>
  <li data-id="5">Element 5</li>
  <li data-id="6">Element 6</li>
</ul>
```

```JS
const list = document.querySelector('#list')
list.addEventListener('click', (e) => {
  if (e.target.matches('li')) {
    console.log(`you clicked the element with dataset ${e.target.dataset.id}`)
  }
})
```

By using the `target` property, we're able to know what element was
actually clicked.

### Canceling events if child elements trigger them
```JS
list.addEventListener('click', (e) => {
  if (e.currentTarget !== e.target) return
  console.log('allowing only the parent element to execute events')
})
```