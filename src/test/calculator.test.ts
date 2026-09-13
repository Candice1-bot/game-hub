import { add } from "./calculators";

test("adds two numbers", () => {
  expect(add(2, 3)).toBe(5);
  expect(add(0, 3)).toBe(3);
});

test("edge cases", () => {
  expect(add(-1, 0)).toBe(-1);
});

// group
describe("case 1", () => {
  it("", () => {});
});
