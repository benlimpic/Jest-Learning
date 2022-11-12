const exponent = require('./exponent')

test('exponents functioning', () => {
  expect(exponent(5, 2)).toBe(25)
})