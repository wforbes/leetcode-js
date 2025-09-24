export function numMatchingSubseq(s, words) {
	let map = {};
	for (let i = 0; i < s.length; i++) {
		if (Object.hasOwn(map, s[i])) {
			map[s[i]].push(i);
		} else {
			map[s[i]] = [i];
		}
	}
	let result = 0;
	for (let i = 0; i < words.length; i++) {
		let currMap = structuredClone(map);
		let prevIdx = 0;
		let matches = 0;
		for (let j = 0; j < words[i].length; j++) {
			if (Object.hasOwn(currMap, words[i][j]) && currMap[words[i][j]].length > 0) {
				//let currIdx = currMap[words[i][j]].shift(); // stack would pop off top
				let indexOfIndex = currMap[words[i][j]].findIndex((num) => {
					return num >= prevIdx; // instead we should find index of the index we want
				});
				if (indexOfIndex === -1) {
					break;
				}
				let currIdx = currMap[words[i][j]][indexOfIndex];
				if (currIdx >= prevIdx) {
					currMap[words[i][j]].splice(indexOfIndex, 1); // remove map array item instead of popping
					matches += 1;
				} else {	
					break;
				}
				prevIdx = currIdx;
			} else {
				break;
			}
		}
		if (matches === words[i].length) {
			result += 1;
		}
	}
	return result;
}