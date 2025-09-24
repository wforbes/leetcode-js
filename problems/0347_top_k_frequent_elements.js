
export function topKFrequent(nums, k) {
    const count = {};
    const freq = Array.from({ length: nums.length + 1 }, () => []);

    for (let i = 0; i < nums.length; i++) {
        // for every nums array element
        //  we set a property on count object with that number as the key
        //  and the value is the number of times that number occurred
        count[nums[i]] = (count[nums[i]] || 0) + 1;
    }

    // Next, we use our freq array which is only as long as
    //  the maximum times any number in the nums array can occur
    //      (nums.length + 1)
    // To set the number from nums array in the index of freq that
    //  corresponds to the number of times it occurred
    // Example: If the nums number 74 occurred 4 times, it is pushed into
    //  the array at index 4 of the freq array.

    let props = Object.keys(count);
    for (let i = 0; i < props.length; i++) {
        // for every property on counts
        //  we want to get the prop name (the number from nums input array)
        //  access its value on count object (the number of times the num occurred in the input array)
        //  and access the index of freq at that value 
        //  then push the prop name into that spot
        freq[count[props[i]]].push(parseInt(props[i]));
    }
    // KEY GOAL:
    // this gives freq a string[][] where the first dimension is the amount of occurances
    //  and the second dimension is the number that occurred that many times

    const result = [];
    for (let i = freq.length - 1; i > 0; i--) {
        // starting from the end of freq (since we want the largest occurrance amounts)
        for (const n of freq[i]) {
            // push from the array contained at each freq index
            //  into the result array
            result.push(n);
            if (result.length === k) {
                // return once we've added k amount of numbers to result array
                return result;
            }
        }
    }
}