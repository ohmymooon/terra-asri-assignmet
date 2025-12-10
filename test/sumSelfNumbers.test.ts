import { sumSelfNumbers } from "../src/sumSelfNumbers";

describe("Self NumberCase 4: Unveiling the Secrets of Self-Numbers Tests", () => {
  it("should correctly sum self-numbers below 100", () => {
    // 1+3+5+7+9+20+31+42+53+64+75+86+97 = 493
    expect(sumSelfNumbers(100)).toBe(493);
    expect(sumSelfNumbers(75)).toBe(235);
  });

  it("< 1min", () => {
    const startTime = Date.now();
    const _ = sumSelfNumbers(10000);
    const endTime = Date.now();

    expect(endTime - startTime).toBeLessThan(1000);
  });
});
