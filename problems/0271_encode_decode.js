
export function encode(strs) {
	if (strs.length === 0) return '';
	let sizes = [];
	let result = "";
	for (let i = 0; i < strs.length; i++) {
		sizes.push(strs[i].length);
	}
	for (let i = 0; i < sizes.length; i++) {
		result += sizes[i]+",";
	}
	result += "~";
	for (let i = 0; i < strs.length; i++) {
		result += strs[i];
	}
	return result;
}


export function decode(str) {
	if (str.length === 0) return [];
	let i = 0;
	let result = [];
	let sizes = [];
	while (str[i] !== '~') {
		let curr = '';
		while (str[i] !== ',') {
			curr += str[i];
			i++
		}
		sizes.push(parseInt(curr));
		i++;
	}
	i++;
	for (let j = 0; j < sizes.length; j++) {
		result.push(str.substr(i, sizes[j]))
		i += sizes[j];
	}
	return result;
}