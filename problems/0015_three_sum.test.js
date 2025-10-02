import { test, expect } from "vitest";
import { threeSum } from "./0015_three_sum.js"
import { isEqual } from "lodash";

test("6 numbers, 2 solutions, includes negative", () => {
	const input = [-1,0,1,2,-1,-4];
	const output = threeSum(input);
	const ans = [[-1,-1,2],[-1,0,1]];
	const comparison = isEqual(output, ans)
	expect(comparison).toBe(true);
})

test("3 numbers, no solutions, no negative", () => {
	const input = [0,1,1];
	const output = threeSum(input);
	const ans = [];
	const comparison = isEqual(output, ans)
	expect(comparison).toBe(true);
});

test("3 zeros, 1 solution", () => {
	const input = [0,0,0];
	const output = threeSum(input);
	const ans = [[0,0,0]];
	const comparison = isEqual(output, ans)
	expect(comparison).toBe(true);
})