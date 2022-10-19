

class Manager {
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