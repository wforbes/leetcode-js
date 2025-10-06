import { test, expect } from "vitest";
import { ListNode, reverseList } from "./0206_reverse_linked_list";

const listToArray = (head) => {
	const arr = [];
	let current = head;
	while (current) {
		arr.push(current.val);
		current = current.next;
	}
	return arr;
};

test("reverses 5 item list", () => {
	const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
	const reversed = reverseList(head);
	expect(listToArray(reversed)).toEqual([5, 4, 3, 2, 1]);
})

test("reverses 2 item list", () => {
	const head = new ListNode(1, new ListNode(2));
	const reversed = reverseList(head);
	expect(listToArray(reversed)).toEqual([2, 1]);
})

test("reverse 20 item list", () => {
	const values = Array.from({ length: 20 }, (_, i) => i + 1);
	let head = new ListNode(values[0]);
	let current = head;
	for (let i = 1; i < values.length; i++) {
		current.next = new ListNode(values[i]);
		current = current.next;
	}

	const reversed = reverseList(head);
	expect(listToArray(reversed)).toEqual(values.reverse());
})