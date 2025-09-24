import { groupAnagrams } from "./0049_group_anagrams.js";
import { test, expect } from "vitest";

test("handles 6 strings of 3 anagrams", () => {
	expect(groupAnagrams(["act", "pots", "tops", "cat", "stop", "hat"]))
		.toStrictEqual([['act', 'cat'], ['pots', 'tops', 'stop'], ['hat']]);
})

test("handles array of one string", () => {
	expect(groupAnagrams(["x"])).toStrictEqual([["x"]]);
})