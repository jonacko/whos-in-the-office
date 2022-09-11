const TeamManager = require('../lib/manager.js');

// test('checks required employee properties', () => {
//     const Engineer = new Engineer('somebody', 1, 'somebody@email.com');
//     expect(engineer.name).toEqual(expect.any(String));
//     expect(engineer.id).toEqual(expect.any(Number));
//     expect(engineer.email).toEqual(expect.any(String));
// });

// gets name from getName() 
test('gets manager name', () => {
    const manager = new TeamManager('somebody', 1, 'somebody@email.com');

    expect(manager.getName()).toEqual(expect.any(String));
});

// gets id from getId() 
test('gets manager ID', () => {
    const manager = new TeamManager('somebody', 1, 'somebody@email.com');

    expect(manager.getId()).toEqual(expect.any(Number));
});

// gets emails from getEmail()
test('gets manager email', () => {
    const manager= new TeamManager('somebody', 1, 'somebody@email.com');

    expect(manager.getEmail()).toEqual(expect.any(String));
});

// gets role from getRole()
test('gets role of employee', () => {
    const manager = new TeamManager('somebody', 1, 'somebody@email.com');

    expect(manager.getRole()).toEqual("Team Manager");
}); 