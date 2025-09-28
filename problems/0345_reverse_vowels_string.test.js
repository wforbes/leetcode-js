import { test, expect } from "vitest";
import { reverseVowels, reverseVowels2, reverseVowels3 } from "./0345_reverse_vowels_string.js"

test("4 vowels, 2 same, upper and lower", () => {
	let s = "IceCreAm";
	expect(reverseVowels(s)).toEqual("AceCreIm")
});

test("2 vowels", () => {
	let s = "random";
	expect(reverseVowels(s)).toEqual("rondam")
});

test("v2: 4 vowels, 2 same, upper and lower", () => {
	let s = "IceCreAm";
	expect(reverseVowels2(s)).toEqual("AceCreIm")
});
test("v2: 2 vowels", () => {
	let s = "random";
	expect(reverseVowels2(s)).toEqual("rondam")
});

test("v3: 4 vowels, 2 same, upper and lower", () => {
	let s = "IceCreAm";
	expect(reverseVowels3(s)).toEqual("AceCreIm")
})

test("v3: 2 vowels", () => {
	let s = "random";
	expect(reverseVowels3(s)).toEqual("rondam")
});