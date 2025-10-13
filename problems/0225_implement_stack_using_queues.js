import { Queue } from "@datastructures-js/queue";
/*
https://leetcode.com/problems/implement-stack-using-queues/
https://neetcode.io/problems/implement-stack-using-queues
https://neetcode.io/courses/dsa-for-beginners/7
*/
export class MyStack {
	constructor() {
		// Queue class available from https://datastructures-js.info/docs/queue
		this.q = new Queue();
	}

	/** 
	 * @param {number} x
	 * @return {void}
	 */
	push(x) {
		this.q.push(x);
		// for all but the recently pushed item,
		//  push into Queue the popped items from Queue
		//  effectively reordering the items to be available
		//  on a LIFO basis
		for (let i = this.q.size() - 1; i > 0; i--) {
			this.q.push(this.q.pop());
		}
	}

	/**
	 * @return {number}
	 */
	pop() {
		return this.q.pop();
	}

	/**
	 * @return {number}
	 */
	top() {
		return this.q.front();
	}

	/**
	 * @return {boolean}
	 */
	empty() {
		return this.q.isEmpty();
	}
}

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */