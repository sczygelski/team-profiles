const Employee = require("../lib/employee")


test("Can add a new name", () => {
        const name = "Ava"
        const e = new Employee(name)
        expect(e.name).toBe(name)
})