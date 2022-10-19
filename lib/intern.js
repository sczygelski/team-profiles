const Employee = require("../lib/employee")

class Intern extends Employee {
    constructor(name = "", id = "", email = "", internschool = "") {
        super(name, id, email)
        this.internschool= internschool
    }
    getinternschool() {
        return `${this.internschool}`
    }
    getRole() {
        return 'Intern'
    }
}
module.exports = Intern