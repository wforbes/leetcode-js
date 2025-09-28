/**
 * https://leetcode.com/problems/reverse-words-in-a-string
 * https://www.codeintuition.io/courses/array/F_yh3iVY76ckl-73VRttv
 * @param {string} s
 * @return {string}
 */
export const reverseWords = function (s) {
    // trim the string of leading/trailing spaces
    // replace instances of multiple spaces in the string
    //  with one space
    // split into an array of words
    let sArr = s.trim().replace(/(\s+)/gi, " ").split(" ");

    //set pointer for left and right
    // swap word on left for word on right
    let left = 0;
    let right = sArr.length - 1;
    while (left < right) {
        let temp = sArr[left]
        sArr[left] = sArr[right]
        sArr[right] = temp
        left++;
        right--;
    }

    // join the array into a string on spaces, and return it
    return sArr.join(" ")
};