# Windowing
It's a technique that lets you render only visible elements on screen, even if
the data source contains hundreds or thousands of items.

It reduces the number of nodes on the DOM, improving performance, memory and
render speed.

## What it's used for
It's used in long lists or grids, where rendering everything at once would be:
* Ineficient (Lowers FPS, Slows down scroll)
* Expensive in memory
* Unnecesary (users can only see a small portion)

## Real Examples

| Case                                | Description                                          |
|-------------------------------------|------------------------------------------------------|
| Dropdown with thousands of options  | Only renders the visible ones on the viewport        |
| Infinite list like social media     | The posts you see are the ones who only get rendered |
| Table with thousands of rows        | Renders visible rows and adjusts dynamic scroll      |
| Ecommerce catalogue                 | Shows products the more users scroll                 |

## Why it's important

### Without windowing
```JS
for (let i = 1; i <= 10000; i++) {
  container.appendChild(createElement(i))
}
```

* Slow to load
* Bottleneck when scrolling
* Heavy reflows and repaints


## Best Practices
* Use a fixed with `overflow: scroll` and `height` defined.
* Simulate the total size with a spacer (`padding` / `div`).
* Recycle the same nodes (the visible ones).
* Calculate visible items index based on `scrollTop`.
* use `requestAnimationFrame` if you do frequent updates.

## Bad Practices
* Render 1000+ node with no control.
* Not removing nodes out of sight.
* Use `innerHTML` entirely after updating it.
* Relying only on `setTimeout` or poorly accurate triggers.