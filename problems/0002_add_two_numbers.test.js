import { test, expect } from "vitest";
import { addTwoNumbers, ListNode, addTwoNumbers2 } from "./0002_add_two_numbers";

test("leetcode example", () => {
	const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
	const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
	let result = addTwoNumbers(l1, l2);
	const resultArray = [];
	while (result) {
		resultArray.push(result.val);
		result = result.next;
	}
	expect(resultArray).toEqual([7, 0, 8]);
});

test("v2: leetcode example", () => {
	const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
	const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
	let result = addTwoNumbers2(l1, l2);
	const resultArray = [];
	while (result) {
		resultArray.push(result.val);
		result = result.next;
	}
	expect(resultArray).toEqual([7, 0, 8]);
});