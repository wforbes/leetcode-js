import { expect, test } from 'vitest';
import { validAnagram } from './0242_valid_anagrams.js';

test('handles a 7 char anagram set', () => {
	expect(validAnagram("anagram", "nagaram")).toStrictEqual(true);
});

test('handles 3 char strings, not anagram set', () => {
	expect(validAnagram("rat", "car")).toStrictEqual(false);
})