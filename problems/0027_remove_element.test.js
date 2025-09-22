import { test, expect } from 'vitest';
import { removeElement, removeElement2 } from './0027_remove_element.js';

test('Removes two elements in array of 4 numbers', () => {
	expect(removeElement([3,2,2,3], 3)).toEqual(2);
});


test('Removes 3 elements in array of 8 items', () => {
	expect(removeElement([0,1,2,2,3,0,4,2], 2)).toEqual(5);
});

test('removeElement2: Removes two elements in array of 4 numbers', () => {
	expect(removeElement2([3,2,2,3], 3)).toEqual(2);
});


test('removeElement2: Removes 3 elements in array of 8 items', () => {
	expect(removeElement2([0,1,2,2,3,0,4,2], 2)).toEqual(5);
});
