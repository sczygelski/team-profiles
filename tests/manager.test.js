const Manager = require("../lib/manager")

test("Role should return as Manager", () => {
    const testValue = "Manager"
    const e = new Manager("Ava", "1", "ava@ava.com", "ava")
    expect(e.getRole()).toBe(testValue)
})