const Employee = require('./Employee');

class Manager extends Manager {

    constructor(name, id, email, phone) {
        super(name, id, email);
        this.phone = phone;
    }

    getOfficeNumber() {
        return this.phone;
    }

getRole() {
    return 'Manager';
}
}

module.exports = Manager