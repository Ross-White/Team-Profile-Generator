const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = 'Manager'
    }
    getRole() {
        return this.role;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    createManagerCard() {
        return `<div class="col-md-6 col-lg-4">
                    <div class="card">
                        <div class="card-header">
                            <h5 class="text-center">${this.name}</h5>
                            <h6 class=" text-center"><i class="fas fa-mug-hot"></i>${this.role}</h6>
                        </div>
                        <ul class="list-group">
                            <li class="list-group-item">Email: <a href="mailto${this.email}">${this.email}</li>
                            <li class="list-group-item">ID: ${this.id}</li>
                            <li class="list-group-item">Office Number: ${this.officeNumber}</li>
                        </ul>
                    </div>
                </div>`};
}

module.exports = Manager;