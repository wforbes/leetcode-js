import { test, expect } from "vitest";
import { MyStack } from "./0225_implement_stack_using_queues";

test("basic stack operations - LeetCode Example 1", () => {
	const myStack = new MyStack();
	
	// Push two elements
	myStack.push(1);
	myStack.push(2);
	
	// Top should return 2 (last pushed element)
	expect(myStack.top()).toBe(2);
	
	// Pop should return 2 and remove it
	expect(myStack.pop()).toBe(2);
	
	// Top should now return 1
	expect(myStack.top()).toBe(1);
	
	// Stack should not be empty
	expect(myStack.empty()).toBe(false);
});

test("push and pop multiple elements", () => {
	const myStack = new MyStack();
	
	// Push multiple elements
	myStack.push(1);
	myStack.push(2);
	myStack.push(3);
	myStack.push(4);
	myStack.push(5);
	
	// Pop in LIFO order
	expect(myStack.pop()).toBe(5);
	expect(myStack.pop()).toBe(4);
	expect(myStack.pop()).toBe(3);
	expect(myStack.pop()).toBe(2);
	expect(myStack.pop()).toBe(1);
	
	// Stack should now be empty
	expect(myStack.empty()).toBe(true);
});

test("empty stack behavior", () => {
	const myStack = new MyStack();
	
	// New stack should be empty
	expect(myStack.empty()).toBe(true);
	
	// Push and pop one element
	myStack.push(1);
	expect(myStack.empty()).toBe(false);
	
	myStack.pop();
	expect(myStack.empty()).toBe(true);
});

test("top returns correct element without removing it", () => {
	const myStack = new MyStack();
	
	myStack.push(10);
	myStack.push(20);
	myStack.push(30);
	
	// Multiple calls to top should return the same element
	expect(myStack.top()).toBe(30);
	expect(myStack.top()).toBe(30);
	expect(myStack.top()).toBe(30);
	
	// Stack should still have all elements
	expect(myStack.pop()).toBe(30);
	expect(myStack.pop()).toBe(20);
	expect(myStack.pop()).toBe(10);
});

test("alternating push and pop operations", () => {
	const myStack = new MyStack();
	
	myStack.push(1);
	myStack.push(2);
	expect(myStack.pop()).toBe(2);
	
	myStack.push(3);
	expect(myStack.top()).toBe(3);
	
	myStack.push(4);
	expect(myStack.pop()).toBe(4);
	expect(myStack.pop()).toBe(3);
	expect(myStack.pop()).toBe(1);
	
	expect(myStack.empty()).toBe(true);
});

test("handles negative numbers", () => {
	const myStack = new MyStack();
	
	myStack.push(-1);
	myStack.push(-5);
	myStack.push(-10);
	
	expect(myStack.top()).toBe(-10);
	expect(myStack.pop()).toBe(-10);
	expect(myStack.pop()).toBe(-5);
	expect(myStack.pop()).toBe(-1);
});

test("handles duplicate values", () => {
	const myStack = new MyStack();
	
	myStack.push(7);
	myStack.push(7);
	myStack.push(7);
	
	expect(myStack.pop()).toBe(7);
	expect(myStack.pop()).toBe(7);
	expect(myStack.top()).toBe(7);
	expect(myStack.empty()).toBe(false);
	expect(myStack.pop()).toBe(7);
	expect(myStack.empty()).toBe(true);
});

test("single element operations", () => {
	const myStack = new MyStack();
	
	myStack.push(42);
	
	expect(myStack.top()).toBe(42);
	expect(myStack.empty()).toBe(false);
	expect(myStack.pop()).toBe(42);
	expect(myStack.empty()).toBe(true);
});

test("large sequence of operations", () => {
	const myStack = new MyStack();
	
	// Push numbers 1 through 10
	for (let i = 1; i <= 10; i++) {
		myStack.push(i);
	}
	
	// Check top is 10
	expect(myStack.top()).toBe(10);
	
	// Pop 5 elements
	for (let i = 10; i >= 6; i--) {
		expect(myStack.pop()).toBe(i);
	}
	
	// Top should now be 5
	expect(myStack.top()).toBe(5);
	
	// Push more elements
	myStack.push(100);
	myStack.push(200);
	
	expect(myStack.top()).toBe(200);
	expect(myStack.pop()).toBe(200);
	expect(myStack.pop()).toBe(100);
	expect(myStack.top()).toBe(5);
});