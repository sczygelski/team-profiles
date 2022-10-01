const Employee = require("../tests/intern.test")

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