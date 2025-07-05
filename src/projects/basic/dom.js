import { state } from './state'
import { calculatePaginationOffset } from '../../utils/pagination'

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
  row.className = 'row'
  row.id = id
  row.dataset.id = id

  Object.values(values).forEach(value => {
    const cell = document.createElement('td')
    cell.textContent = value
    row.appendChild(cell)
  })

  const deleteCell = document.createElement('td')

  const button = document.createElement('button')
  button.className = 'delete'
  button.textContent = 'Delete'

  deleteCell.appendChild(button)
  row.appendChild(deleteCell)
  return row
}

export const renderTable = () => {
  // Clean up the table
  const tableBody = document.querySelector('tbody')
  tableBody.innerHTML = ''

  const { 
    limit, 
    page: currentPage, 
    paginated, 
    sort 
  } = state

  const sorted = [...paginated].sort((a, b) => 
    sort === 'asc' 
      ? a.email.localeCompare(b.email) 
      : b.email.localeCompare(a.email)
  )

  const offset = calculatePaginationOffset(currentPage, limit)
  const pagination = sorted.slice(offset, offset + limit)

  pagination.forEach(page => {
    const row = createRow(page)
    tableBody.appendChild(row)
  })

  if (state.hiddenColumnIndex) {
    const index = state.hiddenColumnIndex + 1
    document.querySelectorAll(`td:nth-child(${index}), th:nth-child(${index})`)
      .forEach(cell => cell.style.display = 'none')
  }
}