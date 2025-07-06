import { renderTable } from './dom'
import { state } from './state'

export const setupEvents = () => {
  const buttonSort = document.querySelector('.btn-sort-by-email')
  buttonSort.addEventListener('click', () => {
    state.sort = state.sort === 'asc' ? 'desc' : 'asc'
    renderTable()
  })

  const inputFilter = document.querySelector('.filter-email')
  inputFilter.addEventListener('input', (e) => {
    const email = e.target.value.toLowerCase()
    state.paginated = state.data.filter(row => 
      row.email.toLowerCase().includes(email)
    )
    state.page = 1
    renderTable()
  })

  const buttonNext = document.querySelector('.next')
  buttonNext.addEventListener('click', () => {
    const limit = Math.ceil(state.paginated.length / state.limit)
    if (state.page < limit) {
      state.page += 1
      renderTable()
    }
  })

  const buttonPrevious = document.querySelector('.prev')
  buttonPrevious.addEventListener('click', () => {
    if (state.page > 1) {
      state.page -= 1
      renderTable()
    }
  })

  const tableBody = document.querySelector('tbody')
  tableBody.addEventListener('click', (e) => {
    if (e.target.matches('.delete')) {
      const row = e.target.closest('.row')
      const id = row.dataset.id

      state.data = state.data.filter(record => record.id !== id)
      state.paginated = state.paginated.filter(record => record.id !== id)

      renderTable()
    }
  })

  const columnHidder = document.querySelector('select')
  columnHidder.addEventListener('change', (e) => {
    const index = e.target.value !== '' ? e.target.value : null
    state.hiddenColumnIndex = index
    renderTable()
  })
}