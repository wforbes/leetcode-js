export const productExceptSelf = function (nums) {
	const result = new Array(nums.length).fill(1);

	// iterate through to get the prefix products
	//  these are the product before the number at i
	for (let i = 1; i < nums.length; i++) {
		result[i] = result[i - 1] * nums[i - 1];
	}

	// reverse iterate through to get the suffix products
	//  these are the product after the number at i 
	//  and in the same pass, multiply them with the
	//  suffixes
	let suffix = 1; // at the far right, there is no suffix
	for (let i = nums.length - 1; i >= 0; i--) {
		result[i] *= suffix;
		suffix *= nums[i];
	}

	return result;
};