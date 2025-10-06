import { test, expect } from "vitest";
import { MinStack } from "./0155_min_stack";

test("MinStack operations", () => {
	const minStack = new MinStack();

	// Push -2. Stack: [-2], Min: -2
	minStack.push(-2);
	// Push 0. Stack: [-2, 0], Min: -2
	minStack.push(0);
	// Push -3. Stack: [-2, 0, -3], Min: -3
	minStack.push(-3);

	// The minimum element should be -3.
	expect(minStack.getMin()).toBe(-3);

	// Pop the top element (-3). Stack: [-2, 0], Min: -2
	minStack.pop();

	// The top element should now be 0.
	expect(minStack.top()).toBe(0);

	// The minimum element should now be -2.
	expect(minStack.getMin()).toBe(-2);
});

test("handles duplicate minimums and updates correctly", () => {
	const minStack = new MinStack();

	// Push 5. Stack: [5], Min: 5
	minStack.push(5);
	// Push 2. Stack: [5, 2], Min: 2
	minStack.push(2);
	// Push 2 again. Stack: [5, 2, 2], Min: 2
	minStack.push(2);

	// Minimum should be 2.
	expect(minStack.getMin()).toBe(2);

	// Pop 2. Stack: [5, 2], Min should still be 2.
	minStack.pop();
	expect(minStack.top()).toBe(2);
	expect(minStack.getMin()).toBe(2);

	// Pop 2 again. Stack: [5], Min should now be 5.
	minStack.pop();
	expect(minStack.top()).toBe(5);
	expect(minStack.getMin()).toBe(5);

	// Push -1. Stack: [5, -1], Min should be -1.
	minStack.push(-1);
	expect(minStack.top()).toBe(-1);
	expect(minStack.getMin()).toBe(-1);
});

test("handles popping to empty and alternating min values", () => {
	const minStack = new MinStack();

	// Push 10, 20, then 5. Min should be 5.
	minStack.push(10);
	minStack.push(20);
	minStack.push(5);
	expect(minStack.getMin()).toBe(5);

	// Pop 5. Min should revert to 10. Top is 20.
	minStack.pop();
	expect(minStack.getMin()).toBe(10);
	expect(minStack.top()).toBe(20);

	// Push 1, then 3. Min should be 1.
	minStack.push(1);
	minStack.push(3);
	expect(minStack.getMin()).toBe(1);

	// Pop 3. Min should still be 1.
	minStack.pop();
	expect(minStack.getMin()).toBe(1);

	// Pop 1. Min should revert to 10.
	minStack.pop();
	expect(minStack.getMin()).toBe(10);
});
