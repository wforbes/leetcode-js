/**
 * https://leetcode.com/problems/3sum
 * https://neetcode.io/problems/three-integer-sum
 * https://algomap.io/problems/3sum
 * @param {number[]} nums
 * @return {number[][]}
 */
export const threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    let n = nums.length;
    let answer = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            break;
        } else if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        let left = i + 1;
        let right = n - 1;
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                answer.push([nums[i], nums[left], nums[right]]);
                left++;
                right++;
                while (left < right && nums[left] === nums[left - 1]) {
                    left++;
                }
                while (left < right && nums[right] === nums[right + 1]) {
                    right--;
                }
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return answer;
};