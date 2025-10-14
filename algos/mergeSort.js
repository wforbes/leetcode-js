//https://neetcode.io/courses/dsa-for-beginners/11

function merge(arr, s, m, e) {
	// find lengths and stand up temp arrays
	let sLen = m - s + 1;
	let eLen = e - m;
	let S = new Array(sLen);
	let E = new Array(eLen);

	// Copy the two halfs into temp arrays
	for (let i = 0; i < sLen; i++) {
		S[i] = arr[s + i];
	}
	for (let i = 0; i < eLen; i++) {
		E[i] = arr[m + 1 + i];
	}

	// set indicies of start (i), end (j), and mid point (k=start of end array)
	let i = 0, j = 0, k = s;
	// merge two sorted halfs into the original array
	while (i < sLen && j < eLen) {
		if (S[i] <= E[j]) { // less than or equal to for stability
			arr[k] = S[i];
			i++;
		} else {
			arr[k] = E[j];
			j++;
		}
		k++;
	}
	// move remaining elements into one of either of the temp arrays
	while (i < sLen) {
		arr[k] = S[i];
		i++;
		k++;
	}
	while (j < eLen) {
		arr[k] = E[j];
		j++;
		k++;
	}
}

export function mergeSort(arr, s, e) {
	if (s < e) {
		let m = Math.floor((s + e) / 2);
		mergeSort(arr, s, m);
		mergeSort(arr, m + 1, e);
		merge(arr, s, m, e);
	}
	return arr;
}

let list1 = [43, 23, 65, 85, 34, 75, 34, 4, 2, 7, 5, 8, 100, 42];
console.log(`list1 (pre): ${list1}`)
let sorted1 = mergeSort(list1, 0, list1.length - 1);
console.log(`list1 (post): ${list1}`)
console.log(`result1: ${sorted1}`)