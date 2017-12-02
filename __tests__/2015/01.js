const { first, second } = require(__filename.replace("__tests__", "src"));

describe("Day 1: Not Quite Lisp", () => {
  test("Part one", () => {
    expect(first("(())")).toBe(0);
    expect(first("()()")).toBe(0);
    expect(first("(((")).toBe(3);
    expect(first("(()(()(")).toBe(3);
    expect(first("))(((((")).toBe(3);
    expect(first("())")).toBe(-1);
    expect(first("))(")).toBe(-1);
    expect(first(")))")).toBe(-3);
    expect(first(")())())")).toBe(-3);
  });

  test("Part two", () => {
    expect(second(")")).toBe(1);
    expect(second("()())")).toBe(5);
  });
});
