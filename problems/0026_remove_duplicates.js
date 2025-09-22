
export default function removeDuplicates(nums) {
    let incomplete = true;
    let a = 0;
    let b = 1;
    while (incomplete) {
        let seeking = false;
        if (nums[a] === nums[b]) {
			//console.log(`found duplicates at ${a} and ${b} - ${JSON.stringify(nums)}`)
            seeking = true;
            while (seeking) {
				b++;
				if (b >= nums.length) {
					seeking = false;
					break;
				}
				//console.log('seeking for more')
                if (nums[a] !== nums[b]) {
					//console.log(`but didnt find any more... stopping seek`)
                    seeking = false;
                } else {
					//console.log(`found another duplicate at ${b}`)
                }
            }
			//console.log(`splicing at ${a} for length=${b-a}`)
            nums.splice(a, (b-a-1));
			//console.log(`nums is now ${JSON.stringify(nums)}`)
			//console.log(`incrementing a`)
            a++;
			//console.log(`a is now ${a}`)
			//console.log(`resetting b value to a+1`)
            b = a + 1;
			//console.log(`b is now ${b}`)
        } else {
			//console.log(`no duplicates found at ${a} and ${b}, incrementing both`)
			a++;
        	b++;
		}

		if (b >= nums.length){
			//console.log(`got to end of the array at b=${b}, array length=${nums.length}`)
			incomplete = false;
		}
			
    }
	//console.log(`returning ${nums.length}`)
	return nums.length;
}