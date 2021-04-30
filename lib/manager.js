const Employee = require("./employee");


class Manager extends Employee {
    constructor(manName, id, email, officeNumber) {
        super(manName, id, email);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return "Manager";
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;