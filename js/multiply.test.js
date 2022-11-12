const multiply = require('./multiply')

test('properly multiplying two numbers', () => {
  expect(multiply(8, 9)).toBe(72)
})

