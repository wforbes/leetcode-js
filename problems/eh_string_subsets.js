// FROM : https://www.youtube.com/watch?v=Ebyesd3mPAA
// Given a string 's' and an array of strings 'words'
//	return the number of 'words' that are a subsequence of 's'.
// A subsequence of a string is a new string generated from the original string
//	with some characters (can be none) deleted without changing the relative
// 	order of the remaining characters.

// Examples:
//	s = "abcde", words = ["a", "bb", "acd", "ace"]
// 		output = 3
//	s = "dsahjpjauf", words = ["ahjpjau", "ja", "ahbwzgqnuk", "tnmlanowax"]
//		output = 2
export function stringSubsets(s, words) {
	if (s.length === 0) return 0;
	let result = 0;
	for (let i = 0; i < words.length; i++) {
		let filtered = s.split("").filter((c) => words[i].includes(c)).join("");
		if (filtered.includes(words[i])) {
			result++;
		}
	}

	return result;
}

export function stringSubsets2(s, words) {
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