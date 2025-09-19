import { test, expect } from 'vitest';
import twoSum from './0001_two_sum.js';

test('Handles out of order numbers where solution exists', () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
});

test('Handles 4 numbers where solution exists', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
});

test('Handles 2 numbers where solution exists', () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
});