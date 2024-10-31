const Person = require("./05-person");

describe("Test for Person", () => {
  let person;
  beforeEach(() => {
    person = new Person("John", 80, 1.8);
  });

  test("test calcIMC normal", () => {
    person.weight = 70;
    person.height = 1.75;
    expect(person.calcIMC()).toBe("normal");
  });

  test("test calcIMC overweight", () => {
    person.weight = 80;
    person.height = 1.8;
    expect(person.calcIMC()).toBe("overweight");
  });
});
