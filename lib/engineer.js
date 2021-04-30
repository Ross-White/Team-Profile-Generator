const Employee = require("./employee");

class Engineer extends Employee {
    constructor(engName, id, email, gitHub) {
        super(engName, id, email);
        this.gitHub = gitHub;
    }
    getRole() {
        return "Engineer";
    }
    getGitHub() {
        return this.gitHub;
    }
}

module.exports = Engineer;