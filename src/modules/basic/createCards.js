const MAX_CARDS = 500

/**
 * Creates a card HTML structure.
 * This function is used to generate the HTML for each card.
 * @param {number} i - The index of the card to create.
 * @returns {string} - The HTML string for the card.
 */
const createCard = (i) => `
  <article role="group" aria-labelledby="card-title-${i}" class="card">
    <h2 class="card-title" id="card-title-${i}">Card ${i}</h2>
    <p class="card-content">This is the content of card ${i}.</p>
    <button class="card-button">Click Me</button>
  </article>
`
/**
 * Creates 500 cards, adding individual event listeners to each card.
 * This is not the best practice for performance, but it demonstrates how to create cards.
 * @param {HTMLElement} container - The container where the cards will be added.
 * @returns {void} 
 */
export const createIndividualCards = (container) => {
  console.time('Cards - Individual Event Assignment')
  container.innerHTML = ''

  for (let i = 1; i <= MAX_CARDS; i++) {
    const wrapper = document.createElement('section')
    wrapper.innerHTML = createCard(i)

    const card = wrapper.firstElementChild

    const button = card?.querySelector('.card-button')
    button?.addEventListener('click', () => card?.remove())

    container.appendChild(wrapper)
  }
  console.timeEnd('Cards - Individual Event Assignment')
}

/**
 * Creates 500 cards, using event delegation for the remove button.
 * This is a more efficient way to handle events, especially with many elements.
 * @param {HTMLElement} container - The container where the cards will be added.
 * @returns {void} 
 */
export const createDelegatedCards = (container) => {
  console.time('Cards - Delegated Event Assignment')
  container.innerHTML = ''

  for (let i = 1; i <= MAX_CARDS; i++) {
    const wrapper = document.createElement('section')
    wrapper.innerHTML = createCard(i)
    container.appendChild(wrapper.firstElementChild)
  }

  container.onclick = (e) => {
    if (e.target?.tagName === 'BUTTON') {
      e.target.closest('.card')?.remove()
    }
  }
  console.timeEnd('Cards - Delegated Event Assignment')
}