import { test, expect } from "vitest";
import { maxArea, maxArea2 } from "./0011_container_with_most_water.js";

test("9 heights, solution at 1 and 6", () => {
	let nums = [2, 4, 3, 3, 5, 2, 4, 3, 2];
	let ans = 20;
	expect(maxArea(nums)).toEqual(ans);
});

test("9 heights, solution at 1 and 8", () => {
	let nums = [1, 8, 6, 2, 5, 4, 8, 3, 7];
	let ans = 49;
	expect(maxArea(nums)).toEqual(ans);
});

test("v2: 9 heights, solution at 1 and 6", () => {
	let nums = [2, 4, 3, 3, 5, 2, 4, 3, 2];
	let ans = 20;
	expect(maxArea2(nums)).toEqual(ans);
});

test("v2: 9 heights, solution at 1 and 8", () => {
	let nums = [1, 8, 6, 2, 5, 4, 8, 3, 7];
	let ans = 49;
	expect(maxArea2(nums)).toEqual(ans);
});


