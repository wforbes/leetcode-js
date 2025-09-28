
/**
 * https://leetcode.com/problems/reverse-string-ii
 * https://www.codeintuition.io/courses/array/aRrQadUtLj2-l2fcbWYUY
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
export function reverseStr(s, k) {
	let sArr = s.split("");
	const segmentLengths = 2 * k;
	const n = sArr.length;
	for (let start = 0; start < n; start += segmentLengths) { // <--- remember this
		let left = start;
		let right = Math.min(start + k - 1, n - 1); // helps handle deciding on the last segment

		while (left < right) {
			// Swap the characters pointed by the left and right pointers
			//[sArr[left], sArr[right]] = [sArr[right], sArr[left]];
			let temp = sArr[left];
			sArr[left] = sArr[right];
			sArr[right] = temp;

			// Move the pointers towards the center of the string
			left++;
			right--;
		}
	}
	return sArr.join("");
}