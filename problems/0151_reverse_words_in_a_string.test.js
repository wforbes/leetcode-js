import { test, expect } from "vitest";
import { reverseWords } from "./0151_reverse_words_in_a_string.js"

test("4 words", () => {
	let s = "the sky is blue";
	expect(reverseWords(s)).toEqual("blue is sky the")
});

test("2 words, 2 leading and trailing spaces", () => {
	let s = "  hello world  ";
	expect(reverseWords(s)).toEqual("world hello")
});

test("3 words, 2 extra spaces between 2 words", () => {
	let s = "a good   example";
	expect(reverseWords(s)).toEqual("example good a")
});