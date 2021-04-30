const Employee = require("./employee");

class Engineer extends Employee {
    constructor(params) {
        this.name = params.engName;
        this.id = params.id;
        this.email = params.email;
    }
    getRole() {
        
    }
}

const params = [engName, id, email];

module.exports = Engineer;