import { state } from './projects/basic/state'
import { generateFakeData } from './projects/basic/data'
import { renderTable } from './projects/basic/dom'
import { setupEvents } from './projects/basic/events'

state.data = generateFakeData(100)
state.paginated = [...state.data]

renderTable()
setupEvents()