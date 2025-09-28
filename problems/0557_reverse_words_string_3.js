export const reverseWords = function (s) {
	let words = s.split(/[\s+]/g);
	for (let i = 0; i < words.length; i++) {
		//words[i] = words[i].split("").reverse().join(""); //<-- what I'd usually do.
		let word = words[i].split("");
		let left = 0;
		let right = word.length - 1;
		while (left < right) {
			let temp = word[left];
			word[left] = word[right];
			word[right] = temp;
			left++;
			right--;
		}
		words[i] = word.join("");
	}
	return words.join(" ");
};

export const reverseWords2 = function (s) {
	const arr = s.split(" ");
	for (let i = 0; i < arr.length; i++) {
		arr[i] = arr[i].split("").reverse().join("");
	}
	return arr.join(" ");
}

export const reverseWords3 = function (s) {
	return s
		.split(' ')
		.map((x) => x.split('').reverse().join(''))
		.join(' ');
}