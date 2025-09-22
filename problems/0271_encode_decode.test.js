import { encode, decode } from "./0271_encode_decode.js";
import { test, expect } from "vitest";

test("handles 4 words with a-z chars", () => {
	expect(
		decode(
			encode(["neet","code","love","you"])
		)
	).toStrictEqual(["neet","code","love","you"]);
})

test("handles 4 words with a-z and symbol", () => {
	expect(
		decode(
			encode(["we", "say", ":", "yes"])
		)
	).toStrictEqual(["we", "say", ":", "yes"]);
})