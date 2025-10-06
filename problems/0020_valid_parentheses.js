/**
 * https://leetcode.com/problems/valid-parentheses/
 * 
 	Problem Description:
 	Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
	An input string is valid if:
	Open brackets must be closed by the same type of brackets.
	Open brackets must be closed in the correct order.
	Every close bracket has a corresponding open bracket of the same type.
 * @param {string} s
 * @return {boolean}
 */
export const isValid = (s) => {
	if (s.length % 2 !== 0) return false;

	const map = {
		')': '(',
		'}': '{',
		']': '['
	};
	const stack = [];

	for (let i = 0; i < s.length; i++) {
		if (map[s[i]]) {
			if (stack.pop() !== map[s[i]]) {
				return false;
			}
		} else {
			stack.push(s[i]);
		}
	}

	return stack.length === 0;
};