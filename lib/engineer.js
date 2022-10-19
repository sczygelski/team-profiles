

class Engineer {
    constructor(name = "", id = "", email = "", engineergithub = "") {
        super(name, id, email)
        this.engineergithub = engineergithub
    }
    getengineergithub() {
        return `${this.engineergithub}`
    }
    getRole() {
        return 'Engineer'
    }
}
module.exports = Engineer