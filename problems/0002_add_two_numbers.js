/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/** https://leetcode.com/problems/add-two-numbers
 * Problem Description:
	You are given two non-empty linked lists representing two non-negative integers.
	The digits are stored in reverse order, and each of their nodes contains a single digit.
	Add the two numbers and return the sum as a linked list.
	You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
export function ListNode(val, next) {
	this.val = (val===undefined ? 0 : val)
	this.next = (next===undefined ? null : next)
}
export function addTwoNumbers(l1, l2) {
    let first = "";
    let second = "";
    while (l1?.next !== undefined || l2?.next !== undefined) {
		
        if (l1?.val !== undefined) {
            first = l1.val + first;
        }
        if (l2?.val !== undefined) {
            second = l2?.val + second;
        }
        
        l1 = l1?.next;
        l2 = l2?.next;
    }
	let result = (BigInt(first) + BigInt(second)) + "";
    let solution = null; 
	let prev = null;
    for (let i = 0; i < result.length; i++) {
        solution = new ListNode(+result[i], (prev ?? undefined));
		prev = solution;
    }
    return solution;
};