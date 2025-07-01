const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'pink', 'cyan', 'magenta', 'lime', 'teal', 'brown', 'gray', 'black', 'white']

/**
 * Picks a random color from the predefined list of colors.
 * @returns {string} A random color.
 */
export const pickRandomColor = () => colors[Math.floor(Math.random() * colors.length)]