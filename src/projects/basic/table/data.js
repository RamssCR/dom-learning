import { faker } from '@faker-js/faker'

/**
 * @typedef {`${string}-${string}-${string}-${string}-${string}`} Id
 * @typedef {object} FakeData
 * @property {Id} id - Unique identifier
 * @property {'Success' | 'Failed' | 'Processing'} status - Transaction status
 * @property {string} email - User email
 * @property {number} amount - Transaction amount
 */

/**
 * Generates an array of fake transaction data.
 * @param {number} [count=100] - The number of fake transactions to generate.
 * @returns {FakeData[]} Array of fake transaction data
 */
export const generateFakeData = (count = 100) => {
  return Array.from({ length: count }).map(() => ({
    id: faker.string.uuid(),
    status: faker.helpers.arrayElement(['Success', 'Failed', 'Processing']),
    email: faker.internet.email().toLowerCase(),
    amount: `$${faker.commerce.price({ min: 100, max: 10000, dec: 2 })}`,
  }))
}