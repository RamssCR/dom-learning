/**
 * Calculates the offset for pagination based on the current page and limit.
 * This function is useful for determining which items to fetch or display
 * when implementing pagination in applications.
 * @param {number} [page=1] - The current page number, default is 1.
 * @param {number} [limit=1] - The number of items per page, default is 1.
 * @returns {number} The calculated offset for pagination.
 */
export const calculatePaginationOffset = (page = 1, limit = 1) => (page - 1) * limit

/**
 * Calculates the minimum page number based on the current page and limit.
 * This function is useful for determining the first page to display
 * when implementing pagination in applications.
 * @param {number} [page=1] - The current page number, default is 1.
 * @param {number} [limit=1] - The number of items per page, default is 1.
 * @returns {number} The calculated minimum page number.
 */
export const calculateMinPage = (page = 1, limit = 1) => {
  const offset = calculatePaginationOffset(page, limit)
  return Math.max(1, Math.ceil(offset / limit))
}

/**
 * Calculates the maximum page number based on the total number of items and limit.
 * This function is useful for determining the last page to display
 * when implementing pagination in applications.
 * @param {number} totalItems - The total number of items available.
 * @param {number} [limit=1] - The number of items per page, default is 1.
 * @returns {number} The calculated maximum page number.
 */
export const calculateMaxPage = (totalItems, limit = 1) => {
  if (totalItems <= 0 || limit <= 0) return 1
  return Math.ceil(totalItems / limit)
}