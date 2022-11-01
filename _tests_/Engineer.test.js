const Engineer = require('../lib/Engineer.js');

test("Setting Github account", () => {
    const testValue = "GHUser";
    const emp = new Engineer("Test", 1, "test@test.com", testValue);
    expect(emp.github).toBe(testValue);
  });
  
  test("Returning Engineer", () => {
    const testValue = "Engineer";
    const emp = new Engineer("Test", 1, "test@test.com", "GHUser");
    expect(emp.getRole()).toBe(testValue);
  });
  
  test("Getting GitHub Username", () => {
    const testValue = "GHUser";
    const emp = new Engineer("Test", 1, "test@test.com", testValue);
    expect(emp.getGithub()).toBe(testValue);
  });