const { multiply, divide, sum } = require("./02-math");

test("adds 1 + 2 to equal 3", () => {
  const actual = sum(1, 2);
  expect(actual).toBe(3);
});

test("multiply 3 * 2 to equal 6", () => {
  const actual = multiply(3, 2);
  expect(actual).toBe(6);
});

test("divide 10 / 5 to equal 2", () => {
  const actual = divide(10, 5);
  expect(actual).toBe(2);
});

test("divide for zero", () => {
  expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
});
