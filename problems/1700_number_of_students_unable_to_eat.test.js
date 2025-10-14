import { test, expect } from "vitest";
import { countStudents } from "./1700_number_of_students_unable_to_eat";

/* test legend from LLM
LeetCode Example 1 - Basic scenario where 1 student cannot eat
LeetCode Example 2 - All students can eat
All students prefer same sandwich type that matches - Perfect match scenario
All students prefer same sandwich type that doesn't match - No one can eat
Alternating preferences - Students and sandwiches alternate
Single student and sandwich match - Edge case with one of each
Single student and sandwich no match - Edge case where single student can't eat
Many students, few sandwiches - Running out of sandwiches early
Students need to cycle multiple times - Complex rotation scenario
Large input with all matches - Performance test where all can eat
Large input with some unable to eat - Performance test with partial matches
Empty arrays - Edge case (though problem constraints say n >= 1)
All circular sandwiches only - Testing with preference 0
All square sandwiches only - Testing with preference 1
*/

test("LeetCode Example 1 - Basic scenario where 1 student cannot eat", () => {
	const students = [1, 1, 0, 0];
	const sandwiches = [0, 1, 0, 1];
	// Explanation:
	// - Front student leaves the top sandwich and returns to the end of the line making students = [1,0,0,1].
	// - Front student leaves the top sandwich and returns to the end of the line making students = [0,0,1,1].
	// - Front student takes the top sandwich and leaves the line making students = [0,1,1] and sandwiches = [1,0,1].
	// - Front student leaves the top sandwich and returns to the end of the line making students = [1,1,0].
	// - Front student takes the top sandwich and leaves the line making students = [1,0] and sandwiches = [0,1].
	// - Front student leaves the top sandwich and returns to the end of the line making students = [0,1].
	// - Front student takes the top sandwich and leaves the line making students = [1] and sandwiches = [1].
	// - Front student takes the top sandwich and leaves the line making students = [] and sandwiches = [].
	// Hence all students are able to eat.
	expect(countStudents(students, sandwiches)).toBe(0);
});

test("LeetCode Example 2 - All students can eat", () => {
	const students = [1, 1, 1, 0, 0, 1];
	const sandwiches = [1, 0, 0, 0, 1, 1];
	// All students eventually get their preferred sandwich
	expect(countStudents(students, sandwiches)).toBe(0);
});

test("all students prefer same sandwich type that matches", () => {
	const students = [0, 0, 0, 0];
	const sandwiches = [0, 0, 0, 0];
	// Perfect match - everyone gets their preference immediately
	expect(countStudents(students, sandwiches)).toBe(0);
});

test("all students prefer same sandwich type that doesn't match", () => {
	const students = [0, 0, 0, 0];
	const sandwiches = [1, 1, 1, 1];
	// No one can eat - all students want circular but only square available
	expect(countStudents(students, sandwiches)).toBe(4);
});

test("no students can eat after first sandwich", () => {
	const students = [1, 1, 1, 1];
	const sandwiches = [0, 1, 1, 1];
	// Top sandwich is circular (0) but all students want square (1)
	// No one will take the first sandwich, so 4 students unable to eat
	expect(countStudents(students, sandwiches)).toBe(4);
});

test("alternating preferences with perfect match", () => {
	const students = [0, 1, 0, 1];
	const sandwiches = [0, 1, 0, 1];
	// Alternating pattern that matches perfectly
	expect(countStudents(students, sandwiches)).toBe(0);
});

test("single student and sandwich match", () => {
	const students = [0];
	const sandwiches = [0];
	// Edge case: one student gets their preference
	expect(countStudents(students, sandwiches)).toBe(0);
});

test("single student and sandwich no match", () => {
	const students = [0];
	const sandwiches = [1];
	// Edge case: one student cannot eat
	expect(countStudents(students, sandwiches)).toBe(1);
});

test("students need to cycle multiple times", () => {
	const students = [1, 0, 1, 0, 1, 0];
	const sandwiches = [0, 0, 0, 1, 1, 1];
	// Students need to rotate several times before matches occur
	expect(countStudents(students, sandwiches)).toBe(0);
});

test("two students left unable to eat", () => {
	const students = [0, 0, 1, 1];
	const sandwiches = [1, 1, 0, 0];
	// First two sandwiches are square (1), but front students want circular (0)
	// They'll keep rotating until the students wanting square (1) get to front
	// After those eat, only circular sandwiches left for circular-preferring students
	expect(countStudents(students, sandwiches)).toBe(0);
});

test("some students unable to eat - mismatch at end", () => {
	const students = [0, 0, 0, 1, 1, 1, 1];
	const sandwiches = [1, 0, 0, 0, 1, 1, 1];
	// First sandwich is square but first three students want circular
	// Eventually the square-preferring students will eat the square sandwiches
	expect(countStudents(students, sandwiches)).toBe(0);
});

test("exactly half unable to eat", () => {
	const students = [0, 0, 0, 0, 1, 1];
	const sandwiches = [1, 1, 1, 0, 0, 0];
	// First 3 sandwiches are square, but most students initially want circular
	// The 2 students wanting square will eventually get to front and eat
	// Then 4 students remain wanting circular, and 3 circular sandwiches remain
	// Wait, let me recalculate: 4 students want circular (0), 2 want square (1)
	// Sandwiches: 3 square (1), 3 circular (0)
	// The 2 students wanting square will eat 2 of the 3 square sandwiches
	// Then 1 square sandwich remains at top, and 4 students wanting circular
	// Those 4 students will never eat the square sandwich
	expect(countStudents(students, sandwiches)).toBe(4);
});

test("all circular sandwiches only", () => {
	const students = [0, 0, 1, 0, 0];
	const sandwiches = [0, 0, 0, 0, 0];
	// More circular sandwiches than needed, one student wants square
	// That student will never eat
	expect(countStudents(students, sandwiches)).toBe(1);
});

test("all square sandwiches only", () => {
	const students = [1, 1, 0, 1, 1];
	const sandwiches = [1, 1, 1, 1, 1];
	// All sandwiches are square, one student wants circular
	// That student will never eat
	expect(countStudents(students, sandwiches)).toBe(1);
});

test("larger input - all can eventually eat", () => {
	const students = [1, 0, 1, 0, 1, 0, 1, 0, 1, 0];
	const sandwiches = [0, 0, 0, 0, 0, 1, 1, 1, 1, 1];
	// Equal numbers of each preference and sandwich type
	expect(countStudents(students, sandwiches)).toBe(0);
});

test("larger input - some unable to eat", () => {
	const students = [1, 1, 1, 1, 1, 0, 0, 0, 0, 0];
	const sandwiches = [0, 0, 0, 1, 1, 1, 1, 1, 1, 1];
	// 5 students want square, 5 want circular
	// 3 circular sandwiches on top, then 7 square
	// But we only have 3 circular sandwiches total and 5 students want circular
	// So 2 students will be unable to eat
	expect(countStudents(students, sandwiches)).toBe(2);
});