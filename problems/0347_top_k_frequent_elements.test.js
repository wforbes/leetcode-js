import { expect, test } from 'vitest';
import { topKFrequent } from './0347_top_k_frequent_elements.js';

test('array of 6, top 2 items', () => {
	expect(topKFrequent([1, 2, 2, 3, 3, 3], 2)).toEqual([3, 2]);
});

test('array of 8, top 1 item', () => {
	expect(topKFrequent([7, 7, 7, 3, 5, 2, 7, 4], 1)).toEqual([7]);
});

test('array of 26, top 6 items', () => {
	const input = [
		42, 34, 64, 23, 64, 34, 756, 54, 54,
		54, 34, 25, 65, 45, 87, 34, 65, 34,
		23, 65, 34, 76, 34, 87, 34, 56
	];
	const output = [ 34, 54, 65, 23, 64, 87 ];
	expect(topKFrequent(input, 6)).toEqual(output);
})