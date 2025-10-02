export function hasDuplicate1(nums) {
	nums.sort((a, b) => a - b);
	for (let i = 1; i < nums.length; i++) {
		if (nums[i] === nums[i - 1]) {
			return true;
		}
	}
	return false;
}

export function hasDuplicate2(nums) {
	const set = new Set();
	for (let i = 0; i < nums.length; i++) {
		if (set.has(nums[i])) {
			return true;
		}
		set.add(nums[i]);
	}
	return false;
}

export function hasDuplicate3(nums) {
	return nums.length > new Set(nums).size;
}