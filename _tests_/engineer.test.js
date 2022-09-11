const Engineer = require('../lib/engineer.js');


// gets name from getName() 
test('gets engineer name', () => {
    const engineer = new Engineer('somebody', 1, 'somebody@email.com');

    expect(engineer.getName()).toEqual(expect.any(String));
});

// gets id from getId() 
test('gets engineer ID', () => {
    const engineer = new Engineer('somebody', 1, 'somebody@email.com');

    expect(engineer.getId()).toEqual(expect.any(Number));
});

// gets emails from getEmail()
test('gets engineer email', () => {
    const engineer= new Engineer('somebody', 1, 'somebody@email.com');

    expect(engineer.getEmail()).toEqual(expect.any(String));
});

// gets role from getRole()
test('gets role of employee', () => {
    const engineer = new Engineer('somebody', 1, 'somebody@email.com');

    expect(engineer.getRole()).toEqual("Engineer");
}); 