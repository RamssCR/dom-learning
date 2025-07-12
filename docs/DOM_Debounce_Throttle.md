# Debounce/Throttle

## Debounce
It's a technique that delays the execution of a function until certain
time has happened since it was last invoked.

### Example
A search bar that waits 500ms until you stop typing to make a request.

## Throttle
It's a technique that limits the frequency in which a function can be
called. It's only executed each X ms, even if it's trigger several times.

### Example
You're scrolling through an app and a function gets triggered multiple
times each second, but `throttle` makes sure it gets executed each 200ms.

## Debounce/Throttle Resume

| `feature`     | `debounce`                        | `throttle`                            |
|---------------|-----------------------------------|---------------------------------------|
| Execution     | Awaits till the end of the burst  | It gets executed in certain interval  |
| Ideal for...  | Inputs, auto-save, search bars    | Scroll, Resize, frequent events       |
| Behavior      | 1 final call                      | Various spaciated calls               |
| In short      | "After it calms down"             | "Each X time"                         |

## Real use cases

### Debounce

| Case                           | Description                                                               |
|--------------------------------|---------------------------------------------------------------------------|
| Live search                    | Avoid request by single-pressing a key. Wait until the user ends typing   |
| Auto-Save                      | Saves the form after the user stops typing for X seconds                  |
| Fields Validation (API)        | Call an email validation API only when the user stops typing              |
| Window resize w/ visual effect | Await until the user stops redimensioning before recalculating the layout |

### Throttle

| Case                          | Description                                                                          |
|-------------------------------|--------------------------------------------------------------------------------------|
| Infinity scroll               | Executes logic when scrolling, but limiting the frequency not to saturate the render |
| Scroll position tracking      | Updates scroll position each X ms to show to progress                                |
| Movement inputs               | Captures movement but without making plenty of calls to the system                   |
| Resize with analytics         | Measures element size when redimensioning the tab, but only for each certain time    |

## Why it's important
DOM Events can be trigger hundreds or thounsands times per second. Event like:
- `scroll`
- `mousemove`
- `resize`
- `input`
- `keydown`

...are triggered constantly while the user interacts. If you execute a heavy function while
it's called, the browser collapses or it slows down.

## Issues we avoid by using debounce/throttle

| Issue                                   | Consequence                                     |
|-----------------------------------------|-------------------------------------------------|
| Heavy logic on input/scroll             | Lag, slow performance                           |
| Several API calls in seconds            | Server saturation, rate limit                   |
| Constant Reflow/Repaint render          | Slow UX and animations                          |
| Saving on localStorage per each letter  | Innecesary writing that blocks the main thread  |

## What we achieve with debounce/throttle

| Enhancement                          | Benefit                                 |
|--------------------------------------|-----------------------------------------|
| Reduces excesive calls to functions  | General performance increases           |
| Assures a response only when needed  | Smoother experience                     |
| Protects APIs from overloading       | Responsible use of resources            |
| Avoids blocking the main thread      | Smoother scroll, animations ans intros  |