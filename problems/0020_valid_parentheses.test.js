import { test, expect } from "vitest";
import { isValid } from "./0020_valid_parentheses";

test("should return true for '()'", () => {
	expect(isValid("()")).toBe(true);
});

test("should return true for '()[]{}'", () => {
	expect(isValid("()[]{}")).toBe(true);
});

test("should return false for '(]'", () => {
	expect(isValid("(]")).toBe(false);
});

test("should return true for '([])'", () => {
	expect(isValid("([])")).toBe(true);
});

test("should return false for '([)]'", () => {
	expect(isValid("([)]")).toBe(false);
});
