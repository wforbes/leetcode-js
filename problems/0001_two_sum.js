/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export function twoSum(nums, target) {
	const m = new Map();
	for (let i = 0; i < nums.length; i++) {
		const diff = target - nums[i];
		if (m.has(diff)) {
			return [m.get(diff), i]
		}
		m.set(nums[i], i);
	}
}

export function twoSum2(arr, target) {
	arr.sort((a, b) => a - b);

	let left = 0;
	let right = arr.length - 1;
	while (left < right) {
		let sum = arr[left] + arr[right];
		if (sum === target) {
			return [arr[left], arr[right]];
		} else if (sum < target) {
			left++;
		} else {
			right--;
		}
	}
	return [];
}