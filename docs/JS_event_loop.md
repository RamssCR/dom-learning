# Event Loop
The event loop is what allows JavaScript to run multiple tasks without
freezing when executing tasks that take time, such as:

- Await an API response
- Load an image
- Render something on screen
- Answer to a click

## Cycle: Call Stack, Microtask Queue, Callback Queue
### Call Stack
It's the direct (or synchronous) code execution, it runs immediately.

```JS
console.log('I run directly!')
```

### Callback Queue
It executes asynchronous tasks that come directly from the browser. They're
the last type of code to be executed on the event loop hierarchy.

```JS
setTimeout(() => console.log('Took nothing, but got rendered at last'), 0)
// Timeout functions get executed at last
```

```JS
const button = document.querySelector('button')
button.addEventListener('click', () => console.log('Button clicked'))
// An event listener runs all the microtasks first, then, it runs the click event
```

| Real examples                   | Way to enter the callback queue |
|---------------------------------|---------------------------------|
| `setTimeout`, `setInterval`     | Timer                           |
| DOM events (`click`, etc...)    | User interaction                |
| `requestAnimationFrame`         | Fluid animation                 |
| `requestIdleCallback`           | Heavy tasks on the background   |

### Microtask Queue (High Priority)
Tasks on this queue are executed right after the synchronous code is run, before 
any callback.

| Real Example                   | How they're generated            |
|--------------------------------|----------------------------------|
| `.then()`                      | Resolved promises                |
| `queueMicrotask()`             | To execute something earlier     |
| `MutationObserver`             | Detect changes on the DOM        |

```JS
Promise.resolve().then(() => {
  console.log('Task executed from microtask queue')
})
```

### Execution order

Input
```JS
// Synchronous code
console.log('Executing task 1...')

// Browser event
setTimeout(() => console.log('Executing task 4...'), 0)

// Microtask
Promise.resolve().then(() => console.log('Executing task 3...'))

// Synchronous code
console.log('Executing task 2...')
```

Output
```SHELL
Executing task 1...
Executing task 2...
Executing task 3...
Executing task 4...
```

In this example

```JS
form?.addEventListener('submit', async (e) => {
  e.preventDefault()

  const data = new FormData()
  const result = await axiosInstance.post('/auth/login', { 
    username: data.get('username'),
    password: data.get('password')
  })

  form.classList.add('success')
})
```

1. The event is triggered...
  - It is then captured by the Event Listener.
  - It is added to the callback queue afterwards.
  - When the call stack is empty, it is executed.
2. The form is prevented to refresh the page.
3. The form data is collected.
4. The axios request is called.
  - It returns a promise.
  - The code gets paused temporary, the remaining code is stored on the microtask queue to resume when the promise is resolved.
5. Once the promise is resolved:
  - The remaining code is executed from the microtask queue, since the promises are always executed there.
6. The class `success` is added to the form.
  - This DOM modification goes to the render queue of the browser.
  - The browser can decide to paint the change on the next frame (~16ms), after clearing out the microtask queue.

## Best Practices on Production

1. Avoid blocking the main thread

❌ Bad example:
```JS
// Freezes the UI
for (let i = 0; i < 1e9, i++) {}
```

✅ Good approach:
```JS
const processHeavyData = () => {
  for (let i = 0; i < 1e9, i++) {}
}

// Let the browser breath
requestIdleCallback(() => {
  processHeavyData()
})
```

2. Use `queueMicrotask` for immediate reactions:
```JS
queueMicrotask(() => {
  updateDOM() // Guarantees that this is executed before clicks and other events
})
```