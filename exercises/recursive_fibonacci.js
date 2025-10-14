// https://neetcode.io/courses/dsa-for-beginners/9
/* Two-Branch Recursion
	This exercise was given to help demonstrate recursion
		in a situation where the function is broken down into
		two smaller subproblems
	
	We can consider the fibonacci of 5 as:
		fib(5) = fib(4) + fib(3)
		fib(4) = fib(3) + fib(2)
		fib(3) = fib(2) + fib(1)
		fib(2) = fib(1) + fib(0)

	When compared to iterative solution for the same problem,
		the recursive solution has worse time complexity O(2^n) vs O(n)
		and worse space complexity O(n) vs O(1)
*/

export function fibonacci(n) {
	if (n <= 1) return n;
	return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(5));
console.log(fibonacci(26));