/**
 * https://leetcode.com/problems/valid-palindrome/
 * https://www.codeintuition.io/courses/array/pTJ82C-tcrd_mpXj3YDA8
 * @param {string} s
 * @return {boolean}
 */
export function validPalindrome(s) {
	if (s.length === 0) return false;
    let cleaned = s.replaceAll(/[^a-zA-Z0-9]/g, "").toLowerCase();
	if (cleaned.length === 1) return true;
	let left = 0;
	let right = cleaned.length - 1;
	while (left < right) {
		if (cleaned[left] !== cleaned[right]) {
			return false;
		}
		left++;
		right--;
	}

	return true;
}

export function validPalindrome2(s) {
	s = s.replace(/[^a-zA-Z0-9]/gi, "").toLowerCase();
	return s === s.split("").reverse().join("");
}