const Intern = require("../lib/intern")

test("Role should return as Intern", () => {
    const testValue = "Intern"
    const e = new Intern("Ava", "1", "ava@ava.com", "ava")
    expect(e.getRole()).toBe(testValue)
})