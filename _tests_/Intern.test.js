const Intern = require('../lib/Intern.js');

test("Setting school", () => {
    const testValue = "UPenn";
    const emp = new Intern("Test", 1, "test@test.com", testValue);
    expect(emp.school).toBe(testValue);
  });
  
  test("Role returning Intern", () => {
    const testValue = "Intern";
    const emp = new Intern("Test", 1, "test@test.com", "UPenn");
    expect(emp.getRole()).toBe(testValue);
  });
  
  test("Getting School", () => {
    const testValue = "UPenn";
    const emp = new Intern("Test", 1, "test@test.com", testValue);
    expect(emp.getSchool()).toBe(testValue);
  });