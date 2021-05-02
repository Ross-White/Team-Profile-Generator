const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email);
        this.gitHub = gitHub;
    }
    getRole() {
        return "Engineer";
    }
    getGitHub() {
        return this.gitHub;
    }
    createEngineerCard() {
        return `            
        <div class="card">
        <div class="card-header">
            <h5 class="card-title text-center">${this.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted text-center">Manager</h6>
        </div>
        <ul class="list-group">
            <li class="list-group-item">${this.email}</li>
            <li class="list-group-item">${this.id}</li>
            <li class="list-group-item">${this.gitHub}</li>
        </div>
    </div>`};
}

module.exports = Engineer;