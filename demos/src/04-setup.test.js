let counter = 0;

beforeAll(() => {
  console.log("Before all tests");
  counter = 1;
});

beforeEach(() => {
  console.log("Before each test");
  counter += 1;
});

afterEach(() => {
  console.log("After each test");
  counter -= 1;
});

afterAll(() => {
  console.log("After all tests");
  counter = 0;
});

test("Test 1", () => {
  console.log("Executing Test 1");
  expect(counter).toBe(2);
});

test("Test 2", () => {
  console.log("Executing Test 2");
  expect(counter).toBe(2);
});
