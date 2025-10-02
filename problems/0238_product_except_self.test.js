import { test, expect } from "vitest";
import { productExceptSelf } from "./0238_product_except_self.js";

test("4 numbers, all pos, no zero", () => {
	let nums = [1,2,3,4];
	let ans = [24, 12, 8, 6];
	expect(productExceptSelf(nums)).toEqual(ans);
});

test("5 numbers, some neg, with zero", () => {
	let nums = [-1,1,0,-3,3];
	let ans = [-0,0,9,-0,0]; // weird vitest -0 flakiness
	expect(productExceptSelf(nums)).toEqual(ans);
});