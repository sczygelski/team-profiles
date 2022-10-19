const Engineer = require("../lib/engineer")

test("Role should return as Engineer", () => {
    const e = new Engineer("ava","1","ava@gmail.com", "avagit")
    expect(e.getRole()).toBe("Engineer")
})