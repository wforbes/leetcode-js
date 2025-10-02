export const validAnagram = (s, t) => {
	if (s.length !== t.length) {
		return false;
	}

	const counts = new Array(26).fill(0);

	for (let i = 0; i < s.length; i++) {
		counts[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
		counts[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
	}

	return counts.every((count) => {
		return count === 0;
	});
}

export const isAnagram = function (s, t) {
	if (s.length !== t.length) {
		return false;
	}

	const countS = {};
	const countT = {};
	for (let i = 0; i < s.length; i++) {
		countS[s[i]] = (countS[s[i]] || 0) + 1;
		countT[t[i]] = (countT[t[i]] || 0) + 1;
	}

	for (const key in countS) {
		if (countS[key] !== countT[key]) {
			return false;
		}
	}
	return true;
}

export const isAnagram2 = function (s, t) {
	if (s.length !== t.length) return false;
	return s.split("").sort().join("") === t.split("").sort().join("");
};