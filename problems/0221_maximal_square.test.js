import { test, expect } from "vitest";
import { maximalSquare, maximalSquare2 } from "./0221_maximal_square.js";

test("matrix1", () => {
	const matrix = [
		["1","0","1","0","0"],
		["1","0","1","1","1"],
		["1","1","1","1","1"],
		["1","0","0","1","0"]
	];
	expect(maximalSquare(matrix)).toEqual(4);
});

test("matrix2", () => {
	const matrix = [
		["0","1"],
		["1","0"]
	];
	expect(maximalSquare(matrix)).toEqual(1);
});

test("matrix2", () => {
	const matrix = [
		["0"]
	];
	expect(maximalSquare(matrix)).toEqual(0);
});


test("recursive: matrix1", () => {
	const matrix = [
		["1","0","1","0","0"],
		["1","0","1","1","1"],
		["1","1","1","1","1"],
		["1","0","0","1","0"]
	];
	expect(maximalSquare2(matrix)).toEqual(4);
});

test("recursive: matrix2", () => {
	const matrix = [
		["0","1"],
		["1","0"]
	];
	expect(maximalSquare2(matrix)).toEqual(1);
});

test("recursive: matrix2", () => {
	const matrix = [
		["0"]
	];
	expect(maximalSquare2(matrix)).toEqual(0);
});
