const Intern = require("../company/Intern");

//testing the constructor arguments
test("Can set school via constructor", () => {
  const testValue = "UCLA";
  const e = new Intern("Quincy", 1, "test@gmail.com", testValue);
  expect(e.school).toBe(testValue);
});

//testing the functions
test("obtainRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Quincy", 1, "test@gmail.com", "UCLA");
  expect(e.obtainRole()).toBe(testValue);
});

//testing the functions
test("Can get school via obtainSchool()", () => {
  const testValue = "UCLA";
  const e = new Intern("Quincy", 1, "test@gmail.com", testValue);
  expect(e.obtainSchool()).toBe(testValue);
});