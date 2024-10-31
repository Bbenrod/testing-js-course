test("test obj", () => {
  const data = {};
  data.test = true;
  expect(data).toBeDefined();
  expect(data).toEqual({ test: true });
});

test("booleans", () => {
  expect(true).toBeTruthy();
  expect(false).toBeFalsy();
});

test("arrays", () => {
  const nums = [1, 2, 3];
  expect(nums).toContain(2);
  expect(nums).not.toContain(4);
  expect(nums).toHaveLength(3);
});
