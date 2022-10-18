const Engineer = require("../lib/engineer")

test("Role should return as Engineer", () => {
    const testValue = "Engineer"
    const e = new Engineer("Ava", "1", "ava@ava.com", "ava")
    expect(e.getRole()).toBe(testValue)
})