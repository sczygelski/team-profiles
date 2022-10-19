const Employee = require("../lib/employee")

class Manager extends Employee{
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