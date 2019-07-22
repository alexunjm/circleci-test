const fn = require('./index');

test('adds 1 + 2 to equal 3', () => {
  expect(fn.sum(1, 2)).toBe(3);
});