/**
 * https://leetcode.com/problems/container-with-most-water/
 * https://www.codeintuition.io/courses/array/afjinABhBDZ8dpuyVVmNF
 * @param {number[]} height
 * @return {number}
 */
export function maxArea(height) {
	let i = 0;
	let j = height.length - 1;
	let area = 0;
	while (i < j) {
		let x = j - i;
		let y = Math.min(height[i], height[j]);
		if (x * y > area) {
			area = x * y;
		}
		// reset j and increment i
		//  if its reached the middle of heights for this i
		if (j <= (height.length / 2) + 1) {
			j = height.length + 1;
			i++;
		}
		j--;
	}
	return area;
}

export function maxArea2(height) {
	let left = 0;
	let right = height.length - 1;
	let maxArea = 0;
	while (left < right) {
		maxArea = Math.max(
			Math.min(height[left], height[right]) * (right - left),
			maxArea
		);

		if (height[left] <= height[right]) {
			left++;
		} else {
			right--;
		}
	}

	return maxArea;
}