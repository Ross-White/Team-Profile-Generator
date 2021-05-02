const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email);
        this.gitHub = gitHub;
        this.role = 'Engineer';
    }
    getRole() {
        return this.role;
    }
    getGitHub() {
        return this.gitHub;
    }
    createEngineerCard() {
        return `<div class="col-md-6 col-lg-4">
                    <div class="card">
                        <div class="card-header">
                            <h5 class="card-title text-center">${this.name}</h5>
                            <h6 class="card-subtitle mb-2 text-muted text-center">${this.role}</h6>
                        </div>
                        <ul class="list-group">
                            <li class="list-group-item">Email: <a href="mailto${this.email}">${this.email}</li>
                            <li class="list-group-item">ID: ${this.id}</li>
                            <li class="list-group-item">GitHub: <a href="https://github.com/${this.gitHub}">${this.gitHub}</li>
                        </ul>
                    </div>
                </div>`};
}

module.exports = Engineer;