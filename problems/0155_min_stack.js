/* 
https://leetcode.com/problems/min-stack/description/
Problem Description:
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
You must implement a solution with O(1) time complexity for each function.

 */
export var MinStack = function () {
	this.stack = [];
	this.min = Infinity;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
	if (this.stack.length === 0) {
		this.stack.push(0); // placeholder value
		this.min = val;
	} else {
		const diff = val - this.min; // store the diff
		this.stack.push(diff); // if its the new min it will be neg
		if (val < this.min) this.min = val;
	}
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
	if (this.stack.length === 0) return;
	const pop = this.stack.pop();
	// if pop is negative, it was the minimum
	//  so setting the min as the diff of pop
	//  resets min to be the old min value
	//  before this item was pushed
	if (pop < 0) this.min -= pop;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
	const top = this.stack[this.stack.length - 1];
	// if top is negative, the actual value is the min
	return top > 0 ? top + this.min : this.min;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
	return this.min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */