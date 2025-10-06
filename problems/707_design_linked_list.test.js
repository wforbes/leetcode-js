import { test, expect } from "vitest";
import { MyLinkedList } from "./707_design_linked_list";

test("Scenario: Adding to an empty list", () => {
	const list = new MyLinkedList();
	list.addAtHead(1);
	// After adding the first element, it should be at index 0
	expect(list.get(0)).toBe(1);
	// The tail should also have been updated. Let's test this by adding at the tail.
	list.addAtTail(2);
	expect(list.get(1)).toBe(2);
});

test("Edge Case: addAtIndex(0, val) on an empty list", () => {
	const list = new MyLinkedList();
	// This should function like addAtHead on an empty list
	list.addAtIndex(0, 5);
	expect(list.get(0)).toBe(5);
	// The tail should be correctly set.
	list.addAtTail(10);
	expect(list.get(1)).toBe(10);
});

test("Edge Case: addAtIndex to the end of the list", () => {
	const list = new MyLinkedList();
	list.addAtHead(1);
	list.addAtHead(2); // List is now 2 -> 1
	// Add 3 at index 2 (the end of the list)
	list.addAtIndex(2, 3);
	expect(list.get(2)).toBe(3);
	// The tail should have been updated to the new node
	list.addAtTail(4);
	expect(list.get(3)).toBe(4);
});


test("Edge Case: get() with invalid index", () => {
	const list = new MyLinkedList();
	list.addAtHead(1);
	// Index out of bounds (positive)
	expect(list.get(1)).toBe(-1);
	// Index out of bounds (negative)
	expect(list.get(-1)).toBe(-1);
});

test("Edge Case: deleteAtIndex() at the tail", () => {
	const list = new MyLinkedList();
	list.addAtTail(1);
	list.addAtTail(2);
	list.addAtTail(3); // List is 1 -> 2 -> 3
	// Delete the tail node (index 2)
	list.deleteAtIndex(2);
	expect(list.get(2)).toBe(-1); // Index 2 should now be invalid
	expect(list.get(1)).toBe(2); // The new tail should be the node with value 2
	// The tail pointer should have been updated. Let's test by adding a new tail.
	list.addAtTail(4);
	expect(list.get(2)).toBe(4);
});

test("Comprehensive test of all operations", () => {
	const list = new MyLinkedList();
	list.addAtHead(1);
	list.addAtTail(3);
	list.addAtIndex(1, 2);    // linked list becomes 1->2->3
	expect(list.get(1)).toBe(2);
	list.deleteAtIndex(1);  // now the linked list is 1->3
	expect(list.get(1)).toBe(3);
	// test get on invalid index after delete
	expect(list.get(2)).toBe(-1);
});
