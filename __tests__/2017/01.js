const { first, second } = require(__filename.replace("__tests__", "src"));

describe("Day 1: Inverse Captcha", () => {
  test("Part one", () => {
    expect(first("1122")).toBe(3);
    expect(first("1111")).toBe(4);
    expect(first("1234")).toBe(0);
    expect(first("91212129")).toBe(9);
  });

  test("Part two", () => {
    expect(second("1212")).toBe(6);
  });
});
