const Manager = require("../company/Manager");
const Employee = require("../company/Employee");

test("Can set office number via constructor argument", () => {
  const testValue = 100;
  const e = new Manager("Quincy", 1, "test@gmail.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

//testing the functions
test('obtainRole() should return "Manager"', () => {
  const testValue = "Manager";
  const e = new Manager("Quincy", 1, "test@gmail.com", 100);
  expect(e.obtainRole()).toBe(testValue);
});

//testing the functions
test("Can get office number via getOffice()", () => {
  const testValue = 100;
  const e = new Manager("Quincy", 1, "test@gmail.com", testValue);
  expect(e.obtainOffice()).toBe(testValue);
});