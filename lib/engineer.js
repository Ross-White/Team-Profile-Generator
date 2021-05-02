const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.role = 'Engineer';
    }
    getRole() {
        return this.role;
    }
    getGitHub() {
        return this.github;
    }
    createEngineerCard() {
        return `<div class="col-md-6 col-lg-4">
                    <div class="card">
                        <div class="card-header">
                            <h5 class="text-center">${this.name}</h5>
                            <h6 class="text-center"><i class="fas fa-glasses">${this.role}</h6>
                        </div>
                        <ul class="list-group">
                            <li class="list-group-item">Email: <a href="mailto${this.email}">${this.email}</li>
                            <li class="list-group-item">ID: ${this.id}</li>
                            <li class="list-group-item">GitHub: <a href="https://github.com/${this.github}">${this.gitHub}</li>
                        </ul>
                    </div>
                </div>`};
}

module.exports = Engineer;