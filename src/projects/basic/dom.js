/**
 * @import {FakeData} from './data'
 */

/**
 * Creates a new row in the table with the provided data.
 * @param {FakeData} data - The data to populate the row.
 * @returns {HTMLTableRowElement} The newly created table row element.
 */
export const createRow = (data) => {
  const { id, ...values } = data

  const row = document.createElement('tr')
  row.id = data.id

  Object.values(values).forEach(value => {
    const cell = document.createElement('td')
    cell.textContent = value
    row.appendChild(cell)
  })

  const cell = document.createElement('td')

  const button = document.createElement('button')
  button.className = 'delete'
  button.textContent = 'Delete'

  cell.appendChild(button)
  row.appendChild(cell)
  return row
}