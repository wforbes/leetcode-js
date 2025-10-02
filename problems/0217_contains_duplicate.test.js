import { test, expect } from "vitest";
import { hasDuplicate1, hasDuplicate2 } from "./0217_contains_duplicate.js";

test("v2: 10 nums, many duplicates", () => {
	const nums = [1,1,1,3,3,4,3,2,4,2];
	expect(hasDuplicate2(nums)).toEqual(true);
});

test("v2: 4 nums, no duplicates", () => {
	const nums = [1,2,3,4];
	expect(hasDuplicate2(nums)).toEqual(false);
});