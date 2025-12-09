import { isCircularPalindrome } from "../src/isCircularPalindrome";

describe("Case 3:  The Never ending Palindrome Quest", () => {
  it("should be false >> 'ra'", () => {
    expect(isCircularPalindrome("r")).toBe(false);
  });
  it("should be true >> 'racecar'", () => {
    expect(isCircularPalindrome("racecar")).toBe(true);
  });

  it("should be false >> 'hello world'", () => {
    expect(isCircularPalindrome("hello world")).toBe(false);
  });

  it("should be false >> 'mAlAyAlaM'", () => {
    expect(isCircularPalindrome("mAlAyAlaM")).toBe(true);
  });
});
