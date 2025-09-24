import { expect, test } from "vitest";
import { stringSubsets, stringSubsets2 } from "./eh_string_subsets.js";

test('Finds 3 subsets from 4 items, with non-sequential string occurence', () => {
	expect(stringSubsets("abcde", ["a", "bb", "acd", "ace"])).toEqual(3);
})

test('Finds 2 subsets from 4 array items, without non-sequential string occurence', () => {
	expect(stringSubsets("dsahjpjauf", ["ahjpjau", "ja", "ahbwzgqnuk", "tnmlanowax"])).toEqual(2);
})

test('Finds 3 subsets from 4 items, with non-sequential string occurence', () => {
	expect(stringSubsets2("abcde", ["a", "bb", "acd", "ace"])).toEqual(3);
})

test('Finds 2 subsets from 4 array items, without non-sequential string occurence', () => {
	expect(stringSubsets2("dsahjpjauf", ["ahjpjau", "ja", "ahbwzgqnuk", "tnmlanowax"])).toEqual(2);
})