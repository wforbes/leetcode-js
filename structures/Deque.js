// From: https://neetcode.io/problems/queue
// Part of the NeetCode DSA for Beginners course
// https://neetcode.io/courses/dsa-for-beginners/7


class Node {
// Helper class for the Deque
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

export class Deque {
    constructor() {
        this._head = new Node(-1);
        this._tail = new Node(-1);

        this._head.next = this._tail;
        this._tail.prev = this._head;
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        return this._head.next === this._tail;
    }

    /**
     * @param {number} value
     */
    append(value) {
        const newNode = new Node(value);
        newNode.prev = this._tail.prev;
        newNode.next = this._tail;
        // set the node before dummy tail to have
        //  next prop pointing to the new node.
        // inserting it between actual tail and dummy tail.
        this._tail.prev.next = newNode;
        this._tail.prev = newNode;
    }

    /**
     * @param {number} value
     * @return {void}
     */
    appendleft(value) {
        const newNode = new Node(value);
        newNode.next = this._head.next;
        newNode.prev = this._head;
        // set the node after dummy head to have
        //  prev prop pointing to the new node.
        // inserting it between dummy head and actual head.
        this._head.next.prev = newNode;
        this._head.next = newNode;
    }

    /**
     * @return {void}
     */
    pop() {
        if (this.isEmpty()) return -1;
        const targetNode = this._tail.prev; // get the actual tail node
        const value = targetNode.value; // extract value out of target node to return
        // swap out the target node, attach dummy tail to prev
        const prevNode = targetNode.prev; // get the node prev to target node
        this._tail.prev = prevNode; // set dummy tails prev as the target's prev
        prevNode.next = this._tail;
        return value;
    }

    /**
     * @return {number}
     */
    popleft() {
        if (this.isEmpty()) return -1;
        const targetNode = this._head.next;
        const value = targetNode.value;
        // swap out the target node, attach dummy head to next
        const nextNode = targetNode.next;
        this._head.next = nextNode;
        nextNode.prev = this._head;
        return value;
    }
}
