const Intern = require('../lib/intern.js');

// gets name from getName() 
test('gets intern name', () => {
    const intern = new Intern('somebody', 1, 'somebody@email.com');

    expect(intern.getName()).toEqual(expect.any(String));
});

// gets id from getId() 
test('gets intern ID', () => {
    const intern = new Intern('somebody', 1, 'somebody@email.com');

    expect(intern.getId()).toEqual(expect.any(Number));
});

// gets emails from getEmail()
test('gets intern email', () => {
    const intern= new Intern('somebody', 1, 'somebody@email.com');

    expect(intern.getEmail()).toEqual(expect.any(String));
});

// gets role from getRole()
test('gets role of employee', () => {
    const intern = new Intern('somebody', 1, 'somebody@email.com');

    expect(intern.getRole()).toEqual("Intern");
}); 