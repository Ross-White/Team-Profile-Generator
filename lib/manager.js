const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return "Manager";
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    createManagerCard() {
        return `            
        <div class="card">
        <div class="card-header">
            <h5 class="card-title text-center">${this.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted text-center">Manager</h6>
        </div>
        <ul class="list-group">
            <li class="list-group-item">Email<a href="mailto${this.email}>${this.email}</li>
            <li class="list-group-item">${this.id}</li>
            <li class="list-group-item">${this.officeNumber}</li>
        </div>
    </div>`};
}

module.exports = Manager;