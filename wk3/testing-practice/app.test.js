import { test, describe, expect } from "vitest";
import { findMaxValue, factorial, areArraysEqual, toTitleCase } from "./app";

describe("Max Value tests", function () {
  test("finds the max value of 3,7,2,8,5 with the expected result 8", function () {
    expect(findMaxValue([3, 7, 2, 8, 5])).toBe(8);
  });
  test("finds the max value of empty array with the expected result null", function () {
    expect(findMaxValue([])).toBe(null);
  });
  test("finds the max value of -10,-5,-1 with the expected result -1", function () {
    expect(findMaxValue([-10, -5, -1])).toBe(-1);
  });
  test("finds the max value of a string with the expected result null", function () {
    expect(findMaxValue("not an array")).toBe(null);
  });
});

describe("Factorial tests", function () {
  test("finds the factorial of 5 with the expected result 120", function () {
    expect(factorial(5)).toBe(120);
  });
  test("finds the factorial of 0 with the expected result 1", function () {
    expect(factorial(0)).toBe(1);
  });
  test("finds the factorial of -3 with the expected result null", function () {
    expect(factorial(-3)).toBe(null);
  });
  test("finds the factorial of '5' with the expected result null", function () {
    expect(factorial("5")).toBe(null);
  });
});

describe("Arrays Equal tests", function () {
  test("tests are the arrays [1,2,3] and [1,2,3] equal with expected result true", function () {
    expect(areArraysEqual([1, 2, 3], [1, 2, 3])).toBe(true);
  });
  test("tests are the arrays [1,2,3] and [3,2,1] equal with expected result false", function () {
    expect(areArraysEqual([1, 2, 3], [3, 2, 1])).toBe(false);
  });
  test("tests are the arrays [] and [] equal with expected result true", function () {
    expect(areArraysEqual([], [])).toBe(true);
  });
  test("tests are the arrays [1,2] and [1,2,3] equal with expected result false", function () {
    expect(areArraysEqual([1, 2], [1, 2, 3])).toBe(false);
  });
});

describe("Title Case tests", function () {
  test("translate 'hello world' to title case with expected result 'Hello World'", function () {
    expect(toTitleCase("hello world")).toBe("Hello World");
  });
  test("translate 'JAVASCRIPT IS FUN' to title case with expected result 'Javascript Is Fun'", function () {
    expect(toTitleCase("JAVASCRIPT IS FUN")).toBe("Javascript Is Fun");
  });
  test("translate '123 testing titles' to title case with expected result '123 Testing Titles'", function () {
    expect(toTitleCase("123 testing titles")).toBe("123 Testing Titles");
  });
  test("translate 12345 to title case with expected result ''", function () {
    expect(toTitleCase(12345)).toBe("");
  });
});
