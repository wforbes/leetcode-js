import { test, expect } from "vitest";
import { reverseWords, reverseWords2, reverseWords3 } from "./0557_reverse_words_string_3.js"

test("4 words, 3 uppercase, 1 symbol", () => {
	let s = "Let's take LeetCode contest";
	expect(reverseWords(s)).toEqual("s'teL ekat edoCteeL tsetnoc")
});

test("2 words, 2 uppercase", () => {
	let s = "Mr Ding";
	expect(reverseWords(s)).toEqual("rM gniD")
});

test("4 words, 1 uppercase char", () => {
	let s = "This is a string";
	expect(reverseWords(s)).toEqual("sihT si a gnirts");
});

test("1 word, only lower letters", () => {
	let s = "random";
	expect(reverseWords(s)).toEqual("modnar");
});

test("v2: 4 words, 3 uppercase, 1 symbol", () => {
	let s = "Let's take LeetCode contest";
	expect(reverseWords2(s)).toEqual("s'teL ekat edoCteeL tsetnoc")
});

test("v2: 2 words, 2 uppercase", () => {
	let s = "Mr Ding";
	expect(reverseWords2(s)).toEqual("rM gniD")
});

test("v2: 4 words, 1 uppercase char", () => {
	let s = "This is a string";
	expect(reverseWords2(s)).toEqual("sihT si a gnirts");
});

test("v2: 1 word, only lower letters", () => {
	let s = "random";
	expect(reverseWords2(s)).toEqual("modnar");
});

test("v3: 4 words, 3 uppercase, 1 symbol", () => {
	let s = "Let's take LeetCode contest";
	expect(reverseWords3(s)).toEqual("s'teL ekat edoCteeL tsetnoc")
});

test("v3: 2 words, 2 uppercase", () => {
	let s = "Mr Ding";
	expect(reverseWords3(s)).toEqual("rM gniD")
});

test("v3: 4 words, 1 uppercase char", () => {
	let s = "This is a string";
	expect(reverseWords3(s)).toEqual("sihT si a gnirts");
});

test("v3: 1 word, only lower letters", () => {
	let s = "random";
	expect(reverseWords3(s)).toEqual("modnar");
});