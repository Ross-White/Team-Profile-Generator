const Employee = require("./employee");


class Manager extends Employee {
    constructor(params) {
        this.name = params.manName;
        this.id = params.id;
        this.email = params.email;
    }
    getRole() {
        
    }
}

const params = [manName, id, email];

module.exports = Manager;