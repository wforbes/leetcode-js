import { test, expect } from "vitest";
import { ListNode, mergeTwoLists, mergeTwoLists2 } from "./0021_merge_two_sorted_lists";

const arrayToList = (arr) => {
	if (!arr || arr.length === 0) {
		return null;
	}
	let head = new ListNode(arr[0]);
	let current = head;
	for (let i = 1; i < arr.length; i++) {
		current.next = new ListNode(arr[i]);
		current = current.next;
	}
	return head;
};

const listToArray = (head) => {
	const arr = [];
	let current = head;
	while (current) {
		arr.push(current.val);
		current = current.next;
	}
	return arr;
};

test("v1: merge [1,2,4] and [1,3,4]", () => {
	const list1 = arrayToList([1, 2, 4]);
	const list2 = arrayToList([1, 3, 4]);
	const merged = mergeTwoLists(list1, list2);
	expect(listToArray(merged)).toEqual([1, 1, 2, 3, 4, 4]);
});

test("v1: merge two empty lists", () => {
	const list1 = arrayToList([]);
	const list2 = arrayToList([]);
	const merged = mergeTwoLists(list1, list2);
	expect(listToArray(merged)).toEqual([]);
});

test("v1: merge empty list with [0]", () => {
	const list1 = arrayToList([]);
	const list2 = arrayToList([0]);
	const merged = mergeTwoLists(list1, list2);
	expect(listToArray(merged)).toEqual([0]);
});
test("v2: merge [1,2,4] and [1,3,4]", () => {
	const list1 = arrayToList([1, 2, 4]);
	const list2 = arrayToList([1, 3, 4]);
	const merged = mergeTwoLists2(list1, list2);
	expect(listToArray(merged)).toEqual([1, 1, 2, 3, 4, 4]);
});

test("v2: merge two empty lists", () => {
	const list1 = arrayToList([]);
	const list2 = arrayToList([]);
	const merged = mergeTwoLists2(list1, list2);
	expect(listToArray(merged)).toEqual([]);
});

test("v2: merge empty list with [0]", () => {
	const list1 = arrayToList([]);
	const list2 = arrayToList([0]);
	const merged = mergeTwoLists2(list1, list2);
	expect(listToArray(merged)).toEqual([0]);
});
