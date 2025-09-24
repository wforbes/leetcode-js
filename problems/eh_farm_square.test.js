import { test, expect } from "vitest";
import { findFarmSquare } from "./eh_farm_square.js";


test("matrix0", () => {
	const matrix = [
		[0, 1, 1, 0, 1],
		[1, 1, 0, 1, 1],
		[0, 1, 1, 1, 0],
		[1, 1, 1, 1, 0],
		[1, 1, 1, 1, 1],
		[0, 0, 0, 0, 0]
	];
	expect(findFarmSquare(matrix)).toEqual(9);
});


test("matrix1", () => {
	const matrix = [
		[1,0,1,0,0],
		[1,0,1,1,1],
		[1,1,1,1,1],
		[1,0,0,1,0]
	];
	expect(findFarmSquare(matrix)).toEqual(4);
});