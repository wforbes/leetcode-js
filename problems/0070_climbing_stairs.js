//https://leetcode.com/problems/climbing-stairs
//https://neetcode.io/problems/climbing-stairs

// Dynamic Programming solution (bottom up, space optimized)
// Time Complexity: O(n)
// Space Complexity: O(1)
export function climbStairs(n) {
	// first solutions of fibonacci
	let one = 1;
	let two = 1;

	for (let i = 0; i < n - 1; i++) {
		let temp = one;
		one = one + two; // find next fib
		two = temp; // move up from prev fib
	}
	return one; // return last fib result
}

// Binet's formula for Fibonacci numbers
// Time Complexity: O(log n)
// Space Complexity: O(1)
export function climbStairs0(n) {
	let sqrt5 = Math.sqrt(5);
	let psi = (1 + sqrt5) / 2;
	let phi = (1 - sqrt5) / 2;
	return Math.round((Math.pow(psi, n + 1) - Math.pow(phi, n + 1)) / sqrt5);
}

// Dynamic Programming solution (bottom up with memoization)
// Time Complexity: O(n)
// Space Complexity: O(n)
export function climbStairs1(n) {
	let dp = new Array(n + 1).fill(-1);
	dp[1] = 1;
	dp[2] = 2;
	for (let i = 3; i <= n; i++) {
		dp[i] = dp[i - 1] + dp[i - 2];
	}
	return dp[n];
}

// Dynamic Programming solution (Top-Down with memoization)
// Time Complexity: O(n)
// Space Complexity: O(n)
export function climbStairs2(n) {
	const dp = new Int32Array(n).fill(-1);
	const dfs = (i) => {
		if (i >= n) return i == n;
		if (dp[i] != -1) return dp[i];
		return (dp[i] = dfs(i + 1) + dfs(i + 2));
	};
	return dfs(0);
}

// recursive solution
// Time Complexity: O(2^n)
// Space Complexity: O(n)
export function climbStairs3(n) {
	const dfs = (i) => {
		if (i >= n) return i == n;
		return dfs(i + 1) + dfs(i + 2);
	};
	return dfs(0);
}

console.log(`recursive: ${climbStairs3(30)}`);
console.log(`top-down: ${climbStairs2(30)}`);
console.log(`bottom-up: ${climbStairs1(30)}`);
console.log(`binet's formula: ${climbStairs0(30)}`);
console.log(`bottom-up space optimized: ${climbStairs(30)}`);