export function isSubsequence(s, t) {
	let tptr = 0;
	for (let i = 0; i < s.length; i++) {
		const foundIdx = t.indexOf(s[i], tptr);
		if (foundIdx === -1) {
			return false;
		}
		tptr = foundIdx + 1;
	}
	return true;
}

export function isSubsequence2(s, t) {
	if (s.length === 0) return true;
	if (t.length === 0) return false;
	if (s.length > t.length) return false;

	let sptr = 0;
	let tptr = 0;
	while (tptr < t.length && sptr < s.length) {
		if (s[sptr] !== t[tptr]) {
			tptr++;
			continue;
		}
		sptr++;
		tptr++;
	}
	return sptr >= s.length;
}

export function isSubsequence3(s, t) {
	let map = {};
	for (let i = 0; i < t.length; i++) {
		if (Object.hasOwn(map, t[i])) {
			map[t[i]].push(i);
		} else {
			map[t[i]] = [i];
		}
	}

	let prevIdx = 0;
	let matches = 0;
	for (let j = 0; j < s.length; j++) {
		if (Object.hasOwn(map, s[j]) && map[s[j]].length > 0) {
			//let currIdx = map[s[j]].shift(); // stack would pop off top
			let indexOfIndex = map[s[j]].findIndex((num) => {
				return num >= prevIdx; // instead we should find
				// index on map value array of the string index we want
			});
			if (indexOfIndex === -1) {
				break;
			}
			let currIdx = map[s[j]][indexOfIndex];
			if (currIdx >= prevIdx) {
				// remove map array item instead of popping..
				map[s[j]].splice(indexOfIndex, 1); 
				matches += 1;
			} else {	
				break;
			}
			prevIdx = currIdx;
		} else {
			break;
		}
	}
	return matches === s.length;
}

