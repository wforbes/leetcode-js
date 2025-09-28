import { test, expect } from "vitest";
import { validPalindrome, validPalindrome2 } from "./0125_valid_palindrome.js"

test("7 words, commas, colon, 2 uppercase", () => {
	let s = "A man, a plan, a canal: Panama";
	expect(validPalindrome(s)).toEqual(true)
});

test("3 words, 2 spaces", () => {
	let s = "race a car";
	expect(validPalindrome(s)).toEqual(false)
});

test("1 space, empty string", () => {
	let s = " ";
	expect(validPalindrome(s)).toEqual(true)
});

test("4 words, normal spaces", () => {
	let s = "a man nam a";
	expect(validPalindrome(s)).toEqual(true)
});

test("4 words, normal spaces (again)", () => {
	let s = "race car rac ecar";
	expect(validPalindrome(s)).toEqual(true)
});

test("3 words, 2 spaces, false", () => {
	let s = "This is codeintuition";
	expect(validPalindrome(s)).toEqual(false)
});

test("1 number and 1 letter", () => {
	let s = "0P";
	expect(validPalindrome(s)).toEqual(false)
});

test("1 letter", () => {
	let s = "a";
	expect(validPalindrome(s)).toEqual(true)
});

test("1 letter, trailing period", () => {
	let s = "a.";
	expect(validPalindrome(s)).toEqual(true)
});

//

test("v2: 7 words, commas, colon, 2 uppercase", () => {
	let s = "A man, a plan, a canal: Panama";
	expect(validPalindrome2(s)).toEqual(true)
});

test("v2: 3 words, 2 spaces", () => {
	let s = "race a car";
	expect(validPalindrome2(s)).toEqual(false)
});

test("v2: 1 space, empty string", () => {
	let s = " ";
	expect(validPalindrome2(s)).toEqual(true)
});

test("v2: 4 words, normal spaces", () => {
	let s = "a man nam a";
	expect(validPalindrome2(s)).toEqual(true)
});

test("v2: 4 words, normal spaces (again)", () => {
	let s = "race car rac ecar";
	expect(validPalindrome2(s)).toEqual(true)
});

test("v2: 3 words, 2 spaces, false", () => {
	let s = "This is codeintuition";
	expect(validPalindrome2(s)).toEqual(false)
});

test("v2: 1 number and 1 letter", () => {
	let s = "0P";
	expect(validPalindrome2(s)).toEqual(false)
});

test("v2: 1 letter", () => {
	let s = "a";
	expect(validPalindrome2(s)).toEqual(true)
});

test("v2: 1 letter, trailing period", () => {
	let s = "a.";
	expect(validPalindrome2(s)).toEqual(true)
});
