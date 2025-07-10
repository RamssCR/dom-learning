# `requestAnimationFrame`

It tells the browser to render a function before painting the 
next visual frame on screen.

## Why is it special?

It guarantees that...
  - Code is executed before rendering.
  - Animations are soft (60fps).
  - It's not executed on the background, so it doesn't spend resources when repainting.

## When to use it

| Use it when                             | Because...                                    |
|-----------------------------------------|-----------------------------------------------|
| Making custom JS animations             | It aligns with the browser's rhythm           |
| Optimizing scroll, zoom or canvas IRT   | It avoids jank or visual lag                  |
| Making visual measures before painting  | It's the last moment before rendering         |

## When not to use it

| Case                                           | Best Alternative                       |
|------------------------------------------------|----------------------------------------|
| Await certain time (delay)                     | `setTimeout`, `setInterval`            |
| Easy CSS animations                            | `transition`, `keyframes`              |
| Non-visual logic (fetch, heavy calcules)       | Promises or `requestIdleCallback`      |
| (React) when the UI relies on cycle changes    | `useEffect`, `useLayoutEffect`         |

## Basic Syntax
```JS
const animate = () => {
  // ...animation logic
  requestAnimationFrame(animate) // Runs each frame (60fps)
}

requestAnimationFrame(animate)
```

## Example: Animating a div container
```HTML
<div class="box" />
```

```CSS
.box {
  position: absolute;
  left: 0;
  top: 0;
  width: 10em;
  height: 10em;
  background-color: #100099;
}
```

```JS
const box = document.querySelector('.box')
let x = 0

const move = () => {
  x += 2
  box.style.transform = `translate(${x}px)`
  requestAnimationFrame(move)
}

requestAnimationFrame(move)
```