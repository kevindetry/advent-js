const { first, second } = require(__filename.replace("__tests__", "src"));

describe("Day 2: Corruption Checksum", () => {
  test("Part one", () => {
    expect(first("5 1 9 5\n7 5 3\n2 4 6 8")).toBe(18);
  });

  test("Part two", () => {
    expect(second("5 9 2 8\n9 4 7 3\n3 8 6 5")).toBe(9);
  });
});
