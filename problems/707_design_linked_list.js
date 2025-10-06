/*
https://leetcode.com/problems/design-linked-list/description/
707. Design Linked List
Design your implementation of the linked list. You can choose to use a singly or doubly linked list.
A node in a singly linked list should have two attributes: val and next. val is the value of the current node, and next is a pointer/reference to the next node.
If you want to use the doubly linked list, you will need one more attribute prev to indicate the previous node in the linked list. Assume all nodes in the linked list are 0-indexed.

Implement the MyLinkedList class:

MyLinkedList() Initializes the MyLinkedList object.
int get(int index) Get the value of the indexth node in the linked list. If the index is invalid, return -1.
void addAtHead(int val) Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
void addAtTail(int val) Append a node of value val as the last element of the linked list.
void addAtIndex(int index, int val) Add a node of value val before the indexth node in the linked list. If index equals the length of the linked list, the node will be appended to the end of the linked list. If index is greater than the length, the node will not be inserted.
void deleteAtIndex(int index) Delete the indexth node in the linked list, if the index is valid.
*/
export class ListNode {
	constructor (val, next) {
		this.val = (val === undefined ? 0 : val);
		this.next = (next === undefined ? null : next);
	}
}

export const MyLinkedList = function () {
	this.head = new ListNode(-1);
	this.tail = this.head;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
	if (index < 0) return -1;
	let i = 0;
	let curr = this.head;
	while (i < index + 1) {
		if (curr.next === null) {
			return -1;
		}
		curr = curr.next;
		i++;
	}
	return curr.val;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
	let _head = this.head;
	let newHead = new ListNode(val, _head.next )
	this.head.next = newHead;
	if (newHead.next === null) {
		this.tail = newHead;
	}
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
	this.tail.next = new ListNode(val);
	this.tail = this.tail.next;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
	let curr = this.head;
	let i = 0;
	while (i < index && curr !== null) {
		i++;
		curr = curr.next;
	}
	if (curr) {
		let next = curr.next;
		curr.next = new ListNode(val, next);
		if (curr == this.tail) {
			this.tail = curr.next;
		}
	}
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
	let curr = this.head;
	let i = 0;
	while (i < index && curr !== null) {
		i++;
		curr = curr.next;
	}
	if (curr && curr.next) {
		if (curr.next == this.tail) {
			this.tail = curr;
		}
		curr.next = curr.next.next;
	}
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */