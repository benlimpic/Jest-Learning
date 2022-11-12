const divide = require('./divide')

test('divides correctly', () => {
  expect(divide(90, 45)).toBe(2)
})