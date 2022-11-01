const Employee = require('../lib/Employee.js');

test('Employee instance', () => {
    const empl = new Employee();
    expect(typeof (empl)).toBe("object");
});

test('Getting Employee Name', () => {
const name ='Valentin';
const empl = new Employee(name);
expect(empl.name).toBe(name);
});

test('Getting an ID', () => {
        const testValue = 10;
        const empl = new Employee("Test", testValue);
        expect(empl.id).toBe(testValue);
});

    test('Getting Employees email', () => {
        const testValue = "test@test.com";
        const empl = new Employee("Test", 1, testValue);
        expect(empl.email).toBe(testValue);
    });

    test('Getting Employees role', () => {
        const testValue = "Employee";
        const empl = new Employee("Valentin", 1, "test@test.com");
        expect(empl.getRole()).toBe(testValue);
    });