import { test, expect } from 'vitest';
import { strStr, strStr2 } from './0028_str_str.js';

test('Find at start of string', () => {
	expect(strStr("sadbutsad", "sad")).toEqual(0);
});

test('Find in the middle', () => {
	expect(strStr("hello", "ll")).toEqual(2);
});

test('Derp way: Find at start of string', () => {
	expect(strStr2("sadbutsad", "sad")).toEqual(0);
});

test('Derp way: Find in the middle', () => {
	expect(strStr2("hello", "ll")).toEqual(2);
});