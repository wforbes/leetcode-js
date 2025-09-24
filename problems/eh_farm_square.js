// https://www.youtube.com/watch?v=Ti5vfu9arXQ

export function findFarmSquare(matrix) {
	let cache = new Map();
	let rows = matrix.length;
	let cols = matrix[0].length;

	let helper = (r, c) => {
		if (r >= rows || c >= cols) {
			return 0;
		}

		if (!cache.has(`${r}, ${c}`)) {
			let down = helper(r + 1, c);
			let right = helper(r, c + 1);
			let diag = helper(r + 1, c + 1);
			cache.set(`${r}, ${c}`, 0);
			if (matrix[r][c] === 1) {
				cache.set(`${r}, ${c}`, 1 + Math.min(down, right, diag));
			}
		}

		return cache.get(`${r}, ${c}`);
	}

	helper(0, 0)
	let maxLength = 0;
	for (const value of cache.values()) {
		if (value > maxLength) {
			maxLength = value;
		}
	}

	return maxLength ** 2; // ** 2 to get area...
}
