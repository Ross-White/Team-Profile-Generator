const Employee = require("./employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getRole() {
        return "Intern";
    }
    getSchool() {
        return this.school;
    }
    createInternCard() {
        return `            
        <div class="card">
        <div class="card-header">
            <h5 class="card-title text-center">${this.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted text-center">Manager</h6>
        </div>
        <ul class="list-group">
            <li class="list-group-item">Email<a href="mailto${this.email}>${this.email}</li>
            <li class="list-group-item">${this.id}</li>
            <li class="list-group-item">${this.school}</li>
        </div>
    </div>`};
}

module.exports = Intern;