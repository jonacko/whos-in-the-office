const Employee = require('./Employee');

class TeamManager extends Employee {

    constructor(name, id, email, phone) {
        super(name, id, email);
        this.phone = phone;
    }

    getOfficeNumber() {
        return this.phone;
    }

getRole() {
    return 'Team Manager';
}
}

module.exports = TeamManager