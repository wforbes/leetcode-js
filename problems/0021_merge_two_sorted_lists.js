/**
 * Definition for singly-linked list.
 */
export class ListNode {
	constructor(val, next) {
		this.val = (val === undefined ? 0 : val)
		this.next = (next === undefined ? null : next)
	}
}
/**
 * https://leetcode.com/problems/merge-two-sorted-lists/description/
 * Problem Description:
	You are given the heads of two sorted linked lists list1 and list2.
	Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
	Return the head of the merged linked list.
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
export const mergeTwoLists = (list1, list2) => {
	const head = new ListNode(0);
	let curr = head;
	while (list1 !== null && list2 !== null) {
		if (list1.val <= list2.val) {
			// append node from list1 cause its smaller
			curr.next = list1;
			// move to next in list1
			list1 = list1.next;
		} else {
			// append node from list2 cause its smaller
			curr.next = list2;
			// move to next in list2
			list2 = list2.next;
		}
		curr = curr.next; //advance new 'head' led list
	}

	// if any remaining in either list, append to end of head list
	curr.next = (list1 !== null) ? list1 :
		(list2 !== null) ? list2 :
			null;

	return head.next
};
export const mergeTwoLists2 = (list1, list2) => {
	let head = new ListNode();
	let curr = head;

	if (!list1) return list2;
	if (!list2) return list1;

	while (list1 || list2) {
		if (list1.val <= list2.val) {
			curr.next = list1;
			list1 = list1.next;
		} else {
			curr.next = list2;
			list2 = list2.next;
		}
		curr = curr.next;

		if (!list1) {
			curr.next = list2;
			break;
		}

		if (!list2) {
			curr.next = list1;
			break;
		}
	}
	return head.next;
};
