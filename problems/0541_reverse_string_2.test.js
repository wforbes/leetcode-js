import { test, expect } from "vitest";
import { reverseStr} from "./0541_reverse_string_2.js"

test("7 letters, k=2", () => {
	let s = "abcdefg";
	let k = 2;
	expect(reverseStr(s, k)).toEqual("bacdfeg")
});

test("4 letters, k=2", () => {
	let s = "abcd";
	let k = 2;
	expect(reverseStr(s, k)).toEqual("bacd")
});