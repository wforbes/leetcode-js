export function strStr(haystack, needle) {
    let j = 0;
    for (let i = 0; i < haystack.length; i++) {
        if (
			haystack[i] === needle[j]
			&& haystack.substring(i, i+needle.length) === needle
		) {
			return i;
		}
    }
    return -1;
}

// derpy way
export function strStr2(haystack, needle) {
	return haystack.indexOf(needle);
}