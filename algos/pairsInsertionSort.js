/* https://neetcode.io/problems/insertionSort
Implement Insertion Sort and return intermediate states.
Insertion Sort is a simple sorting algorithm that builds the sorted list one element at a time, from left to right. It works by repeatedly taking an element from the unsorted portion and inserting it into its correct position in the sorted portion of the list.

Objective:
	Given a list of key-value pairs, sort the list by key using Insertion Sort. Return a list of lists showing the state of the array after each insertion. If two key-value pairs have the same key, maintain their relative order in the sorted list.

Input:
	pairs - a list of key-value pairs, where each key-value has an integer key and a string value. (0 <= pairs.length <= 100).
Example 1:
	Input:
		pairs = [(5, "apple"), (2, "banana"), (9, "cherry")]

	Output:
		[[(5, "apple"), (2, "banana"), (9, "cherry")], 
		[(2, "banana"), (5, "apple"), (9, "cherry")], 
		[(2, "banana"), (5, "apple"), (9, "cherry")]]
	Notice that the output shows the state of the array after each insertion. The last state is the final sorted array. There should be pairs.length states in total.
*/
class Pair {
	/**
	* @param {number} key The key to be stored in the pair
	* @param {string} value The value to be stored in the pair
	*/
	constructor(key, value) {
		this.key = key;
		this.value = value;
	}
}
function pairsInsertionSort(pairs) {
	let result = [];
	// start i as 0 to get the first state of pairs without swaps
	for (let i = 0; i < pairs.length; i++) {
		let j = i - 1;
		while (j >= 0 && pairs[j + 1].key < pairs[j].key) {
			let temp = pairs[j + 1];
			pairs[j + 1] = pairs[j];
			pairs[j] = temp;
			j--;
		}
		result.push([...pairs]);
	}
	return result;
}

let pairs = [new Pair(3, "cat"), new Pair(3, "bird"), new Pair(2, "dog")];
console.log(`pairs (pre): ${JSON.stringify(pairs)}`);
let states = pairsInsertionSort(pairs);
console.log(`states: ${JSON.stringify(states)}`);