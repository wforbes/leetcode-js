export function maximalSquare(matrix) {
	let rows = matrix.length;
	let cols = rows > 0 ? matrix[0].length : 0;
	let maxLength = 0;
	let dp = new Array(cols + 1).fill(0);
	let prev = 0;
	for (let i = 1; i <= rows; i++) {
		for (let j = 1; j <= cols; j++) {
			let temp = dp[j];
			if (matrix[i - 1][j - 1] == '1') {
				dp[j] = Math.min(dp[j - 1], prev, dp[j]) + 1;
				maxLength = Math.max(maxLength, dp[j]);
			} else {
				dp[j] = 0;
			}
			prev = temp;
		}
	}
	return maxLength ** 2;
}

export function maximalSquare2(matrix) {
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
			if (matrix[r][c] === "1") {
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