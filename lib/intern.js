const Employee = require("./employee");


class Intern extends Employee {
    constructor(params) {
        this.name = params.internName;
        this.id = params.id;
        this.email = params.email;
    }
    getRole() {
        
    }
}

const params = [internName, id, email];

module.exports = Intern;