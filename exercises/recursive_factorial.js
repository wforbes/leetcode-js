// https://neetcode.io/courses/dsa-for-beginners/8
/*
	One-Branch Recursion
	This exercise was given to help demonstrate recursion
	Its used when a problem can be broken down into
		smaller subproblems
	
	We can consider the factorial of 5 as:
		5! = 5 * 4 * 3 * 2 * 1
		or 5! = 5 * 4!
	In the second case, we can see that the problem
		is actually n! = n * (n - 1)!
		and we can see this as the recursive case in code
		n! = n * factorial(n - 1)

	In this case though, when compared to iterative solution
		for the same problem, the recursive solution has
		worse space complexity O(n) vs O(1)
		( but the same time complexity O(n) )
*/
export function factorial(n) {
	// base case
	if (n <= 1) return 1;
	
	// recursive case
	return n * factorial(n - 1);
}

console.log(factorial(5));