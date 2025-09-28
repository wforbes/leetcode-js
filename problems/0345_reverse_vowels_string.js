export function reverseVowels(s) {
	let rs = s.split("");
	let vowels = [
		"a", "e", "i", "o", "u",
		"A", "E", "I", "O", "U",];
	let temp;
	let i = 0;
	let j = s.length - 1;

	while (i < j) {
		if (vowels.includes(rs[i])) {
			let swapped = false;
			while (i < j && !swapped) {
				if (vowels.includes(rs[j])) {
					temp = rs[i];
                    rs[i] = rs[j];
                    rs[j] = temp;
					//declaration assignment is 5ms SLOWER
					//[rs[i], rs[j]] = [rs[j], rs[i]]; 
					swapped = true;
				}
				j--;
			}
		}
		i++;
	}
	return rs.join("");
}

//
export function reverseVowels2(s) {
	let vowels = ["a", "e", "i", "o", "u"];
	let sArr = s.split("");
	let temp;
	let left = 0;
	let right = sArr.length - 1;
	while (left < right) {
		if (!vowels.includes(sArr[left].toLowerCase())) {
			left++;
		} else if (!vowels.includes(sArr[right].toLowerCase())) {
			right--;
		} else {
			temp = sArr[left];
			sArr[left] = sArr[right];
			sArr[right] = temp;
			left++;
			right--;
		}
	}
	return sArr.join("");
}

// trying fastest with Set, shows 8ms - much slower?
export function reverseVowels3(s) {
	let vowels = new Set(["a", "e", "i", "o", "u"]);
	let sArr = s.split("");
	let temp;
	let left = 0;
	let right = sArr.length - 1;
	while (left < right) {
		if (!vowels.has(sArr[left].toLowerCase())) {
			left++;
		} else if (!vowels.has(sArr[right].toLowerCase())) {
			right--;
		} else {
			temp = sArr[left];
			sArr[left] = sArr[right];
			sArr[right] = temp;
			left++;
			right--;
		}
	}
	return sArr.join("");
}