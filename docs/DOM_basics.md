# DOM (Document Object Model)

## What is DOM
It's a tree-shaped representation of my page's HTML. It allows
JavaScript to listen to it, modify it and read it.

## `document`
It's the DOM's root element. From there, you can search
and modify elements.

```HTML
<body>
  <h1>Hello World!</h1>
</body>
```

```JS
const title = document.querySelector('h1')
console.log(title.textContent) // 'Hello World!'
```

## `window`
It's the browser's global object. It contains everything 
the browser exposes.

```JS
console.log(window.innerWidth) // Viewport's width
console.log(window.location.href) // Current URL
```

> `document` is a `window`'s property actually, same as `console`.

## `HTMLElement`
If the element exists, you can fetch a `HTMLElement` by using
`document.querySelector('button')` (for example).

```HTML
<button>My Button</button>
```

```JS
const button = document.querySelector('button')
button.textContent = 'Changed text content'
button.style.backgroundColor = '#202423'
button.addEventListener('click', () => console.log('you clicked this element!'))
```

## Real HTML vs. DOM
Let's say you make this change to an HTML tag:

```HTML
<h1>Common Title</h1>
```

```JS
const title = document.querySelector('h1')
title.textContent = 'Changed Title'
```

You're not changing the HTML on your server, but the representation
of what the browser is displaying.

> Hence why it's called "Virtual DOM", because it only lives in the browser's memory.