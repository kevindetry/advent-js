const { first, second } = require(__filename.replace("__tests__", "src"));

describe("Day 2: I Was Told There Would Be No Math", () => {
  test("Part one", () => {
    expect(first("2x3x4")).toBe(58);
    expect(first("1x1x10")).toBe(43);
  });

  test("Part two", () => {
    expect(second("2x3x4")).toBe(34);
    expect(second("1x1x10")).toBe(14);
  });
});
