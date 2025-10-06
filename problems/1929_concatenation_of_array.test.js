import { test, expect } from "vitest";
import { getConcatenation } from "./1929_concatenation_of_array";

test("should concatenate [1,2,1]", () => {
	const nums = [1, 2, 1];
	const expected = [1, 2, 1, 1, 2, 1];
	expect(getConcatenation(nums)).toEqual(expected);
});

test("should concatenate [1,3,2,1]", () => {
	const nums = [1, 3, 2, 1];
	const expected = [1, 3, 2, 1, 1, 3, 2, 1];
	expect(getConcatenation(nums)).toEqual(expected);
});
