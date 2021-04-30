const Employee = require("./employee");

class Intern extends Employee {
    constructor(internName, id, email, school) {
        super(internName, id, email);
        this.school = school;
    }
    getRole() {
        return "Intern";
    }
    getSchool() {
        return this.school;
    }
}

module.exports = Intern;