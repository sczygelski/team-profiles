

class Intern  {
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