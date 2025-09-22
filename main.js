// last problem worked
import { removeElement, removeElement2 } from './problems/0027_remove_element.js'
import { perfTest } from './perf_test.js';

let test0 = [
	0, 1, 2, 3, 4, 4, 4, 4, 5, 6,
	7, 8, 8, 8, 8, 9, 2, 5, 2, 5,
	2, 3, 4, 3, 2, 3, 4, 3, 3, 5,
	5, 3, 3, 2, 3, 4, 6, 2, 5, 3,
	6, 5, 6, 5, 2, 3, 4, 3, 3, 2,
	3, 5
]; //52 length, eight 4s, result length 44

// set up large scale
let mag = 1000000; // magnitude of num items in array
let toFind = 4;
let countToFind = 0;
let test1 = [];
let len1 = 2 * mag; // lever for adding to length within magnitude
for (let i = 0; i < len1; i++) {
	// load the array, count the number of 'toFind' pushed in
	let num = Math.floor(Math.random() * 10)
	if (num === toFind) countToFind++;
	test1.push(num);
}

let { result: res, duration } = perfTest(removeElement, test1, 4)
console.log(`toFind=${toFind}, countToFind=${countToFind}`)
console.log(`starting length = ${len1}`)
console.log(`result: ${res} (should be ${len1 - countToFind})`)
console.log(`perf dur: ${duration.toFixed(4)}`)

/* // volume average
const iters = 1000;
let durs = [];
console.log(`--------------------------------`)
console.log(`running ${iters} times`);
for (let i = 0; i < iters; i++) {
	let test1 = [];
	for (let i = 0; i < len1; i++) {
		let num = Math.floor(Math.random() * 10)
		if (num === toFind) countToFind++;
		test1.push(num);
	}
	let { result: res, duration } = perfTest(removeElement, test1, 4)
	durs.push(duration.toFixed(4));
}
durs = durs.map(d => Number(d))
let sum = durs.reduce((prev, curr) => prev + curr)
let average = (sum / iters).toFixed(4);
console.log(`Average Performance: ${average}ms`)
*/

/*
console.log(`pre test0.length ${test0.length}`)
const result = removeElement2(test0, 4);
console.log(`result ${result}`)
console.log(`post test0.length ${test0.length}`)
*/