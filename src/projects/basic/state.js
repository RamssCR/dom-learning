export const state = {
  /**
   * @type {import('./data').FakeData[]}
   */
  data: [],
  /**
   * @type {import('./data').FakeData[]}
   */
  paginated: [],
  page: 1,
  limit: 10,
  sort: 'asc',
  hiddenColumnIndex: null
}