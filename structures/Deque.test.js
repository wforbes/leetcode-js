import { test, expect } from "vitest";
import { Deque } from "./Deque";

/* test legend from LLM
Basic append and pop operations - Testing right side operations
Basic appendleft and popleft operations - Testing left side operations
Mixed operations from both ends - Comprehensive test mixing all operations
isEmpty on new and emptied deque - Testing empty state detection
Pop and popleft on empty deque - Edge case behavior
Single element operations - Testing with one element
Alternating append sides - Adding from both ends alternately
Alternating pop sides - Removing from both ends alternately
Large sequence of operations - Performance and correctness with many operations
Append then popleft - Using deque as a queue (FIFO)
Appendleft then pop - Using deque as a queue from left
Append then pop - Using deque as a stack (LIFO)
Building from both ends - Complex pattern of insertions
Emptying from both ends - Complex pattern of deletions
*/

test("basic append and pop operations", () => {
	const deque = new Deque();
	deque.append(1);
	deque.append(2);
	deque.append(3);
	
	// Should pop from right end (LIFO for append/pop)
	expect(deque.pop()).toBe(3);
	expect(deque.pop()).toBe(2);
	expect(deque.pop()).toBe(1);
});

test("basic appendleft and popleft operations", () => {
	const deque = new Deque();
	deque.appendleft(1);
	deque.appendleft(2);
	deque.appendleft(3);
	
	// Should pop from left end (LIFO for appendleft/popleft)
	expect(deque.popleft()).toBe(3);
	expect(deque.popleft()).toBe(2);
	expect(deque.popleft()).toBe(1);
});

test("mixed operations from both ends", () => {
	const deque = new Deque();
	deque.append(1);
	deque.append(2);
	deque.append(3);
	
	expect(deque.popleft()).toBe(1);
	expect(deque.pop()).toBe(3);
	expect(deque.pop()).toBe(2);
});

test("isEmpty on new deque", () => {
	const deque = new Deque();
	expect(deque.isEmpty()).toBe(true);
});

test("isEmpty after adding and removing elements", () => {
	const deque = new Deque();
	
	deque.append(1);
	expect(deque.isEmpty()).toBe(false);
	
	deque.pop();
	expect(deque.isEmpty()).toBe(true);
	
	deque.appendleft(2);
	expect(deque.isEmpty()).toBe(false);
	
	deque.popleft();
	expect(deque.isEmpty()).toBe(true);
});

test("pop on empty deque returns -1", () => {
	const deque = new Deque();
	expect(deque.pop()).toBe(-1);
});

test("popleft on empty deque returns -1", () => {
	const deque = new Deque();
	expect(deque.popleft()).toBe(-1);
});

test("single element via append then pop", () => {
	const deque = new Deque();
	deque.append(42);
	
	expect(deque.isEmpty()).toBe(false);
	expect(deque.pop()).toBe(42);
	expect(deque.isEmpty()).toBe(true);
});

test("single element via append then popleft", () => {
	const deque = new Deque();
	deque.append(42);
	
	expect(deque.popleft()).toBe(42);
	expect(deque.isEmpty()).toBe(true);
});

test("single element via appendleft then pop", () => {
	const deque = new Deque();
	deque.appendleft(42);
	
	expect(deque.pop()).toBe(42);
	expect(deque.isEmpty()).toBe(true);
});

test("single element via appendleft then popleft", () => {
	const deque = new Deque();
	deque.appendleft(42);
	
	expect(deque.popleft()).toBe(42);
	expect(deque.isEmpty()).toBe(true);
});

test("alternating append from both ends", () => {
	const deque = new Deque();
	
	deque.append(1);      // [1]
	deque.appendleft(2);  // [2, 1]
	deque.append(3);      // [2, 1, 3]
	deque.appendleft(4);  // [4, 2, 1, 3]
	
	expect(deque.popleft()).toBe(4);
	expect(deque.popleft()).toBe(2);
	expect(deque.popleft()).toBe(1);
	expect(deque.popleft()).toBe(3);
});

test("alternating pop from both ends", () => {
	const deque = new Deque();
	
	deque.append(1);
	deque.append(2);
	deque.append(3);
	deque.append(4);
	deque.append(5);
	// [1, 2, 3, 4, 5]
	
	expect(deque.pop()).toBe(5);      // [1, 2, 3, 4]
	expect(deque.popleft()).toBe(1);  // [2, 3, 4]
	expect(deque.pop()).toBe(4);      // [2, 3]
	expect(deque.popleft()).toBe(2);  // [3]
	expect(deque.pop()).toBe(3);      // []
	expect(deque.isEmpty()).toBe(true);
});

test("use as FIFO queue with append and popleft", () => {
	const deque = new Deque();
	
	// Enqueue at right
	deque.append(1);
	deque.append(2);
	deque.append(3);
	
	// Dequeue from left (FIFO)
	expect(deque.popleft()).toBe(1);
	expect(deque.popleft()).toBe(2);
	expect(deque.popleft()).toBe(3);
});

test("use as FIFO queue with appendleft and pop", () => {
	const deque = new Deque();
	
	// Enqueue at left
	deque.appendleft(1);
	deque.appendleft(2);
	deque.appendleft(3);
	
	// Dequeue from right (FIFO for this direction)
	expect(deque.pop()).toBe(1);
	expect(deque.pop()).toBe(2);
	expect(deque.pop()).toBe(3);
});

test("use as LIFO stack with append and pop", () => {
	const deque = new Deque();
	
	deque.append(1);
	deque.append(2);
	deque.append(3);
	
	// Stack behavior (LIFO)
	expect(deque.pop()).toBe(3);
	expect(deque.pop()).toBe(2);
	expect(deque.pop()).toBe(1);
});

test("use as LIFO stack with appendleft and popleft", () => {
	const deque = new Deque();
	
	deque.appendleft(1);
	deque.appendleft(2);
	deque.appendleft(3);
	
	// Stack behavior (LIFO)
	expect(deque.popleft()).toBe(3);
	expect(deque.popleft()).toBe(2);
	expect(deque.popleft()).toBe(1);
});

test("handles negative numbers", () => {
	const deque = new Deque();
	
	deque.append(-1);
	deque.appendleft(-5);
	deque.append(-10);
	// [-5, -1, -10]
	
	expect(deque.pop()).toBe(-10);
	expect(deque.popleft()).toBe(-5);
	expect(deque.pop()).toBe(-1);
});

test("handles zero values", () => {
	const deque = new Deque();
	
	deque.append(0);
	deque.appendleft(0);
	deque.append(0);
	
	expect(deque.pop()).toBe(0);
	expect(deque.popleft()).toBe(0);
	expect(deque.pop()).toBe(0);
});

test("large sequence of operations", () => {
	const deque = new Deque();
	
	// Add 10 elements from right
	for (let i = 1; i <= 10; i++) {
		deque.append(i);
	}
	
	// Add 10 elements from left
	for (let i = 11; i <= 20; i++) {
		deque.appendleft(i);
	}
	// [20, 19, ..., 11, 1, 2, ..., 10]
	
	// Remove 5 from right
	expect(deque.pop()).toBe(10);
	expect(deque.pop()).toBe(9);
	expect(deque.pop()).toBe(8);
	expect(deque.pop()).toBe(7);
	expect(deque.pop()).toBe(6);
	
	// Remove 5 from left
	expect(deque.popleft()).toBe(20);
	expect(deque.popleft()).toBe(19);
	expect(deque.popleft()).toBe(18);
	expect(deque.popleft()).toBe(17);
	expect(deque.popleft()).toBe(16);
	
	// Should have 10 elements left
	expect(deque.isEmpty()).toBe(false);
});

test("complex interleaved operations", () => {
	const deque = new Deque();
	
	deque.append(1);
	deque.append(2);
	expect(deque.popleft()).toBe(1);
	
	deque.appendleft(3);
	deque.append(4);
	expect(deque.pop()).toBe(4);
	
	deque.appendleft(5);
	// [5, 3, 2]
	
	expect(deque.popleft()).toBe(5);
	expect(deque.pop()).toBe(2);
	expect(deque.popleft()).toBe(3);
	expect(deque.isEmpty()).toBe(true);
});

test("building from both ends then emptying from both ends", () => {
	const deque = new Deque();
	
	// Build: [4, 2, 1, 3, 5]
	deque.append(1);
	deque.appendleft(2);
	deque.append(3);
	deque.appendleft(4);
	deque.append(5);
	
	// Empty from both ends symmetrically
	expect(deque.popleft()).toBe(4);
	expect(deque.pop()).toBe(5);
	expect(deque.popleft()).toBe(2);
	expect(deque.pop()).toBe(3);
	expect(deque.popleft()).toBe(1);
	
	expect(deque.isEmpty()).toBe(true);
	
	// Should be able to use again after emptying
	deque.append(100);
	expect(deque.pop()).toBe(100);
});

test("multiple empty operations in sequence", () => {
	const deque = new Deque();
	
	// Multiple pops on empty deque
	expect(deque.pop()).toBe(-1);
	expect(deque.popleft()).toBe(-1);
	expect(deque.pop()).toBe(-1);
	expect(deque.popleft()).toBe(-1);
	
	// Should still work after failed operations
	deque.append(1);
	expect(deque.pop()).toBe(1);
});