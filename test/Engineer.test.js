const Engineer = require("../company/Engineer");

//testing the constructor arguments
test("Can set GitHUb account via constructor", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Quincy", 1, "test@gmail.com", testValue);
  expect(e.github).toBe(testValue);
});

test("obtainRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Quincy", 1, "test@gmail.com", "GitHubUser");
  expect(e.obtainRole()).toBe(testValue);
});

test("Can get GitHub username via obtainGithub()", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Quincy", 1, "test@gmail.com", testValue);
  expect(e.obtainGithub()).toBe(testValue);
});