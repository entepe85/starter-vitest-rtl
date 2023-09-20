import { describe, it, expect } from "vitest";

describe("stringCalc", () => {
  it("returns 0 for an empty string", () => {
    expect(stringCalc("")).toEqual(0);
  });
  it("returns a number for a single string", () => {
    expect(stringCalc("3")).toEqual(3);
  });
  it("returns a sum of comma-separated strings", () => {
    expect(stringCalc("1,2,3")).toEqual(6);
  });
  it("ignores numbers greater than 1000", () => {
    expect(stringCalc("1,1001")).toEqual(1);
  });
});

describe("sum", () => {
    it("returns the sum for an array of numbers", () => {
        expect(sum([1,2])).toEqual(3);
    });
});

describe("handleNegative", () => {
    it("throws an error when a negative number is present", () => {
        expect(() => handleNegatives([-1])).toThrow();
    });
});

const sum = (numbers: number[]) => numbers.reduce((a, b) => a + b, 0);
const handleNegatives = (numbers: number[]) => {
    if (numbers.some((num) => num < 0)) throw new Error('Negative number encountered');
    return numbers;
}
const stringCalc = (str: string) => sum(handleNegatives(str.split(",").map(Number).filter((num: number) => num <= 1000)));
