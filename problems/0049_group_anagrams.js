export function groupAnagrams(strs) {
	let letters = {};
    for (let s = 0; s < strs.length; s++) {
        const counts = new Array(26).fill(0);

        for (let l = 0; l < strs[s].length; l++) {
            counts[strs[s][l].charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
        }

        const key = counts.join(",");

        if (!letters[key]) {
            letters[key] = [];
        }
        letters[key].push(strs[s]);
    }
    return Object.values(letters);
}