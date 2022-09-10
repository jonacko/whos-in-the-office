const Employee = require('../lib/employee.js');

test('checks required employee properties', () => {
    const Employee = new Employee('somebody', 1, 'somebody@email.com');
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// gets name from getName() 
test('gets employee name', () => {
    const employee = new Employee('somebody', 1, 'somebody@email.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

// gets id from getId() 
test('gets employee ID', () => {
    const employee = new Employee('somebody', 1, 'somebody@email.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

// gets emails from getEmail()
test('gets employee email', () => {
    const employee = new Employee('somebody', 1, 'somebody@email.com');

    expect(employee.getEmail()).toEqual(expect.any(String));
});

// gets role from getRole()
test('gets role of employee', () => {
    const employee = new Employee('somebody', 1, 'somebody@email.com');

    expect(employee.getRole()).toEqual("Employee");
}); 