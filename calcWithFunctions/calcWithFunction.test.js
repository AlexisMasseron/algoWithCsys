
const { one, two, three, four, five, six, seven, eight, nine, plus, minus, times, dividedBy } = require("./calcWithFunctions");

test("should work for basic tests", () => {
  expect(seven(times(five()))).toBe(35),
  expect(four(plus(nine()))).toBe(13), 
  expect(eight(minus(three()))).toBe(5),
  expect(six(dividedBy(two()))).toBe(3)
});