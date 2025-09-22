import { test, expect } from 'vitest';
import removeDuplicates from './0026_remove_duplicates.js';

test('Removes one duplicate set in array of 3', () => {
	let inputNums = [1, 1, 2];
	let updatedNums = [1, 2];
	let result = 2;
	expect(removeDuplicates(inputNums)).toEqual(result);
	expect(inputNums).toEqual(updatedNums);
});

test('Removes one set of 2 duplicates in array of 3', () => {
	let inputNums = [1, 1, 1]
	let updatedNums = [1];
	let result =  1;
    expect(removeDuplicates(inputNums)).toEqual(result);
	expect(inputNums).toEqual(updatedNums);
});

test('Removes one duplicate in array of 2', () => {
	let inputNums = [1, 1];
	let updatedNums = [1];
	let result = 1;
    expect(removeDuplicates(inputNums)).toEqual(result);
	expect(inputNums).toEqual(updatedNums);
});

test('Removes one duplicate at the end of array of 3', () => {
	let inputNums = [1, 2, 2];
	let updatedNums = [1, 2];
	let result = 2;
    expect(removeDuplicates(inputNums)).toEqual(result);
	expect(inputNums).toEqual(updatedNums);
});

test('Removes two sets of 4 duplicates', () => {
	let inputNums = [0, 1, 2, 3, 4, 4, 4, 4, 5, 6, 7, 8, 8, 8, 8, 9]
	let updatedNums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
	let result = 10;
    expect(removeDuplicates(inputNums)).toEqual(result);
	expect(inputNums).toEqual(updatedNums);
});