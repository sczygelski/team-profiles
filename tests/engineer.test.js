const Engineer = require("../lib/engineer")
//const Employee = require("../lib/employee")

test("Role should return as Engineer", () => {
    //const engineergithub = "avagit"
    const e = new Engineer("ava","1","ava@gmail.com", "avagit")
    expect(e.getRole()).toBe("Engineer")
})