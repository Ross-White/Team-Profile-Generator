const Employee = require("./employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.role = 'Intern';
    }
    getRole() {
        return this.role;
    }
    getSchool() {
        return this.school;
    }
    createInternCard() {
        return `<div class="col-md-6 col-lg-4">
                    <div class="card">
                        <div class="card-header">
                            <h5 class="card-title text-center">${this.name}</h5>
                            <h6 class="card-subtitle mb-2 text-muted text-center">${this.role}</h6>
                        </div>
                        <ul class="list-group">
                            <li class="list-group-item">Email: <a href="mailto${this.email}">${this.email}</li>
                            <li class="list-group-item">ID: ${this.id}</li>
                            <li class="list-group-item">School: ${this.school}</li>
                        </ul>
                    </div>
                </div>`};
}

module.exports = Intern;