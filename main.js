import { maximalSquare2 } from "./problems/0221_maximal_square.js";

const matrix = [ // leetcode test case 1
	["1","0","1","0","0"],
	["1","0","1","1","1"],
	["1","1","1","1","1"],
	["1","0","0","1","0"]
];

const result = maximalSquare2(matrix);

console.log(`result: ${result}`)

