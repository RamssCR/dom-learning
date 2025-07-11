# `will-change`

`will-change` is a CSS property that informs the browser that you're going
to change a style, like `transform`, `opacity`, etc...

This allows the browser to get ready before the change happens, optimizing
rendering by activating a new composition overlay.

## Example

```CSS
.loader {
  will-change: transform;
}
```

> [!WARNING]
> Do NOT abuse of `will-change`. If plenty of overlays are activated, it can consume a lot of GPU.

Use it on animated and/or interactive elements, such as:
- Loaders
- Slideable Menus
- Element with animated hover
- Transition when scrolling

## Change type and their impact

| Property change                  | Reflow      | Repaint      | New Layer (composition)       |
|----------------------------------|-------------|--------------|-------------------------------|
| `width`, `height`                | Yes         | Yes          | No                            |
| `color`, `background-color`      | No          | Yes          | No                            |
| `transform`, `opacity`           | No          | Yes          | Yes (optimized)               |
| `display`                        | Yes         | Yes          | No                            |
| `top`, `left`, `margin`          | Yes         | Yes          | No                            |
| `visibility`                     | No          | Yes          | No                            |
| `box-shadow`                     | No          | Yes          | No                            |