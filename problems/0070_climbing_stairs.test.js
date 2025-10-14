import { test, expect } from "vitest";
import { climbStairs, climbStairs0, climbStairs1, climbStairs2, climbStairs3 } from "./0070_climbing_stairs";

/* test legend from LLM
climbStairs - Bottom-up space optimized DP solution (O(1) space)
climbStairs0 - Binet's formula solution (O(log n) time)
climbStairs1 - Bottom-up with memoization (O(n) space)
climbStairs2 - Top-down with memoization (O(n) space)
climbStairs3 - Pure recursive solution (O(2^n) time)
*/

// climbStairs - Bottom-up space optimized (O(1) space)
test("dp (bottom-up, no memo): base case n=1", () => {
	expect(climbStairs(1)).toBe(1);
});

test("dp (bottom-up, no memo): base case n=2", () => {
	expect(climbStairs(2)).toBe(2);
});

test("dp (bottom-up, no memo): small case n=5", () => {
	expect(climbStairs(5)).toBe(8);
});

test("dp (bottom-up, no memo): larger case n=30", () => {
	expect(climbStairs(30)).toBe(1346269);
});

// climbStairs0 - Binet's formula
test("binets: base case n=1", () => {
	expect(climbStairs0(1)).toBe(1);
});

test("binets: base case n=2", () => {
	expect(climbStairs0(2)).toBe(2);
});

test("binets: small case n=5", () => {
	expect(climbStairs0(5)).toBe(8);
});

test("binets: larger case n=30", () => {
	expect(climbStairs0(30)).toBe(1346269);
});

// climbStairs1 - Bottom-up with memoization
test("dp (bottom-up, memo): base case n=1", () => {
	expect(climbStairs1(1)).toBe(1);
});

test("dp (bottom-up, memo): base case n=2", () => {
	expect(climbStairs1(2)).toBe(2);
});

test("dp (bottom-up, memo): small case n=5", () => {
	expect(climbStairs1(5)).toBe(8);
});

test("dp (bottom-up, memo): larger case n=30", () => {
	expect(climbStairs1(30)).toBe(1346269);
});

// climbStairs2 - Top-down with memoization
test("dp (top-down): base case n=1", () => {
	expect(climbStairs2(1)).toBe(1);
});

test("dp (top-down): base case n=2", () => {
	expect(climbStairs2(2)).toBe(2);
});

test("dp (top-down): small case n=5", () => {
	expect(climbStairs2(5)).toBe(8);
});

test("dp (top-down): larger case n=30", () => {
	expect(climbStairs2(30)).toBe(1346269);
});

// climbStairs3 - Pure recursive (keep n small for performance)
test("recursive: base case n=1", () => {
	expect(climbStairs3(1)).toBe(1);
});

test("recursive: base case n=2", () => {
	expect(climbStairs3(2)).toBe(2);
});

test("recursive: small case n=5", () => {
	expect(climbStairs3(5)).toBe(8);
});

test("recursive: moderate case n=15", () => {
	// Using n=15 instead of 30 for recursive to avoid timeout
	expect(climbStairs3(15)).toBe(987);
});

// Additional test cases across all methods
test("all methods: n=3 should return 3", () => {
	expect(climbStairs(3)).toBe(3);
	expect(climbStairs0(3)).toBe(3);
	expect(climbStairs1(3)).toBe(3);
	expect(climbStairs2(3)).toBe(3);
	expect(climbStairs3(3)).toBe(3);
});

test("all methods: n=4 should return 5", () => {
	expect(climbStairs(4)).toBe(5);
	expect(climbStairs0(4)).toBe(5);
	expect(climbStairs1(4)).toBe(5);
	expect(climbStairs2(4)).toBe(5);
	expect(climbStairs3(4)).toBe(5);
});

test("all methods: n=10 should return 89", () => {
	expect(climbStairs(10)).toBe(89);
	expect(climbStairs0(10)).toBe(89);
	expect(climbStairs1(10)).toBe(89);
	expect(climbStairs2(10)).toBe(89);
	expect(climbStairs3(10)).toBe(89);
});

test("all methods: n=20 should return 10946", () => {
	expect(climbStairs(20)).toBe(10946);
	expect(climbStairs0(20)).toBe(10946);
	expect(climbStairs1(20)).toBe(10946);
	expect(climbStairs2(20)).toBe(10946);
	expect(climbStairs3(20)).toBe(10946);
});
