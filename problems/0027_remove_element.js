
// first cold attempt... but its slow
//	performance testing shows 1.6ms on 20k array items
//		189.2ms on 200k array items
//		73000ms (7.3 seconds) on 2mil array items
export function removeElement(nums, val) {
	let incomplete = true;
    let a = 0;
	//console.log(`nums is ${JSON.stringify(nums)}, val is ${val}`);
    while (incomplete) {
		//console.log(`considering nums[a]=${nums[a]}`)
        if(nums[a] === val) {
			//console.log(`Found at ${a}, splicing`)
            nums.splice(a, 1);
			//console.log(`after splice: ${JSON.stringify(nums)}`)
        } else {
			a++;
			//console.log(`incremented - a is now ${a}`);
		}
        
		//console.log(`nums.length = ${nums.length}`)
        if (a >= nums.length) {
			//console.log(`breaking while`)
            incomplete = false;
        }
    }
	//console.log(`nums.length = ${nums.length}`);
    return nums.length;
}

// second attempt with study/hints
//	performance testing shows 0.025ms on 20k array items
//		0.235ms on 200k array items (demonstrates O(n))
export function removeElement2(nums, val) {
	let orgEnd = nums.length - 1;
	let i = 0;
	for (let j = 0; j < nums.length; j++) {
		//console.log(`nums = ${JSON.stringify(nums)}`)
		//console.log(`checking at j=${j} (${nums[j]})`)
		if (nums[j] !== val) {
			//console.log(`Not found at j=${j}, setting nums[${i}] as nums[${j}] (${nums[i]} as ${nums[j]})`)
			nums[i] = nums[j];
			i++;
			//console.log(`incremened i, now ${i}`)
		}
	}
	//console.log(`nums pre splice/pop ${JSON.stringify(nums)}`)
	
	for (let k = 0; k < orgEnd - i + 1; k++) {
		nums.pop() // using pop instead of splice, testing shows 10% faster
	}
	
	//console.log(`nums post splice/pop ${JSON.stringify(nums)}`)
	//console.log(`returning i=${i}`)
	return i;
}