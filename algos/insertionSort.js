// https://neetcode.io/courses/dsa-for-beginners/10
function insertionSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		let j = i - 1;
		while (j >= 0 && arr[j + 1] < arr[j]) {
			let tmp = arr[j + 1];
			arr[j + 1] = arr[j];
			arr[j] = tmp;
			j--;
		}
	}
	return arr;
}

let test1 = [34, 23, 24, 26, 38, 99, 2, 5];
console.log(`test1 (pre): ${test1}`)
insertionSort(test1);
console.log(`test1 (post): ${test1}`)
