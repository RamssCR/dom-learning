import { generateFakeData } from './projects/basic/data'
import { createRow } from './projects/basic/dom'

const tableBody = document.querySelector('tbody')
const data = generateFakeData()

data.forEach(object => {
  const row = createRow(object)
  tableBody.appendChild(row)
})