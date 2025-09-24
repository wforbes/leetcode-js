import { test, expect } from "vitest";
import { numMatchingSubseq } from "./0792_number_of_matching_subsequences.js";

test("idk", () => {
	expect(numMatchingSubseq("abcde", ["a","bb","acd","ace"])).toEqual(3);
})


test("idk2", () => {
	expect(numMatchingSubseq("dsahjpjauf", ["ahjpjau","ja","ahbwzgqnuk","tnmlanowax"])).toEqual(2);
})