import { test, expect } from "vitest";
import { reverseWords, reverseWords2, reverseWords3 } from "./0557_reverse_words_string_3.js"

test("4 words", () => {
	let s = "Let's take LeetCode contest";
	expect(reverseWords(s)).toEqual("s'teL ekat edoCteeL tsetnoc")
});

test("2 words", () => {
	let s = "Mr Ding";
	expect(reverseWords(s)).toEqual("rM gniD")
});

test("v2: 4 words", () => {
	let s = "Let's take LeetCode contest";
	expect(reverseWords2(s)).toEqual("s'teL ekat edoCteeL tsetnoc")
});

test("v2: 2 words", () => {
	let s = "Mr Ding";
	expect(reverseWords2(s)).toEqual("rM gniD")
});

test("v3: 4 words", () => {
	let s = "Let's take LeetCode contest";
	expect(reverseWords3(s)).toEqual("s'teL ekat edoCteeL tsetnoc")
});

test("v3: 2 words", () => {
	let s = "Mr Ding";
	expect(reverseWords3(s)).toEqual("rM gniD")
});