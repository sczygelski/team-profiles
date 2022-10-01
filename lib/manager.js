const Employee = require("../tests/employee.test")

class Manager extends Employee {
    constructor(name = "", id = "", email = "", manageroffice = "") {
        super(name, id, email)
        this.manageroffice = manageroffice
    }
    getmanageroffice() {
        return `${this.manageroffice}`
    }
    getRole() {
        return 'Manager'
    }
}
module.exports = Manager