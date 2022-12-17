const Employee = require("../company/Employee");

//Can it pass the employee test
test("Can solidify Employee instance", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

//testing the constructor arguments
test("Can constructor arguments work with the name", () => {
  const name = "Adam";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

//testing the constructor arguments with ID
test("Can the constructor argument work with the ID", () => {
  const testValue = 100;
  const e = new Employee("Quincy", testValue);
  expect(e.id).toBe(testValue);
});

//testing the constructor arguments with Email

test("Can the constructor argument work with the Email", () => {
  const testValue = "testing@gmail.com";
  const e = new Employee("Quincy", 1, testValue);
  expect(e.email).toBe(testValue);
});

//testing the constructor arguments with Function
test("Can you get name via obtainName() function", () => {
  const testValue = "Adam";
  const e = new Employee(testValue);
  expect(e.obtainName()).toBe(testValue);
});

//testing the constructor arguments with Function
test("Can you get id via obtainId() function", () => {
  const testValue = 100;
  const e = new Employee("Quincy", testValue);
  expect(e.obtainId()).toBe(testValue);
});

//testing the constructor arguments with Function
test("Can you get email via obtainEmail() function", () => {
  const testValue = "testing@gmail.com";
  const e = new Employee("Quincy", 1, testValue);
  expect(e.obtainEmail()).toBe(testValue);
});

test("obtainRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("Adam", 1, "testing@gmail.com");
  expect(e.obtainRole()).toBe(testValue);
});