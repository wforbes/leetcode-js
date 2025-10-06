/**
 * Definition for singly-linked list. */
export class ListNode {
	constructor(val, next) {
		this.val = (val === undefined ? 0 : val)
		this.next = (next === undefined ? null : next)
	}
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
export const reverseList = function (head) {
	let prev = null;
	let curr = head;
	let next = null;
	while (curr !== null) {
		next = curr.next;
		curr.next = prev;
		prev = curr;
		curr = next;
	}
	return prev;
};