const Manager = require('../lib/Manager.js');
test("Setting office number", () => {
    const testValue = 10;
    const emp = new Manager("Test", 1, "test@test.com", testValue);
    expect(emp.officeNumber).toBe(testValue);
  });
  
  test("Role returning Manager", () => {
    const testValue = "Manager";
    const emp = new Manager("Test", 1, "test@test.com", 10);
    expect(emp.getRole()).toBe(testValue);
  });
  
  test("Getting office number", () => {
    const testValue = 10;
    const e = new Manager("Test", 1, "test@test.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
  });