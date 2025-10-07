import { test, expect } from "vitest";
import { BrowserHistory } from "./problems/1472_design_browser_history.js";

/* (from https://leetcode.com/problems/design-browser-history/description/)
Input:
["BrowserHistory","visit","visit","visit","back","back","forward","visit","forward","back","back"]
[["leetcode.com"],["google.com"],["facebook.com"],["youtube.com"],[1],[1],[1],["linkedin.com"],[2],[2],[7]]
Output:
[null,null,null,null,"facebook.com","google.com","facebook.com",null,"linkedin.com","google.com","leetcode.com"]

Explanation:
BrowserHistory browserHistory = new BrowserHistory("leetcode.com");
browserHistory.visit("google.com");       // You are in "leetcode.com". Visit "google.com"
browserHistory.visit("facebook.com");     // You are in "google.com". Visit "facebook.com"
browserHistory.visit("youtube.com");      // You are in "facebook.com". Visit "youtube.com"
browserHistory.back(1);                   // You are in "youtube.com", move back to "facebook.com" return "facebook.com"
browserHistory.back(1);                   // You are in "facebook.com", move back to "google.com" return "google.com"
browserHistory.forward(1);                // You are in "google.com", move forward to "facebook.com" return "facebook.com"
browserHistory.visit("linkedin.com");     // You are in "facebook.com". Visit "linkedin.com"
browserHistory.forward(2);                // You are in "linkedin.com", you cannot move forward any steps.
browserHistory.back(2);                   // You are in "linkedin.com", move back two steps to "facebook.com" then to "google.com". return "google.com"
browserHistory.back(7);                   // You are in "google.com", you can move back only one step to "leetcode.com". return "leetcode.com"
*/
test("leetcode example", () => {
	const browserHistory = new BrowserHistory("leetcode.com");
	
	browserHistory.visit("google.com");       // You are in "leetcode.com". Visit "google.com"
	browserHistory.visit("facebook.com");     // You are in "google.com". Visit "facebook.com"
	browserHistory.visit("youtube.com");      // You are in "facebook.com". Visit "youtube.com"
	expect(browserHistory.getCurrentPage()).toEqual("youtube.com");

	// You are in "youtube.com", move back to "facebook.com" return "facebook.com"
	expect(browserHistory.back(1)).toEqual("facebook.com");; 
	expect(browserHistory.getCurrentPage()).toEqual("facebook.com");

	// You are in "facebook.com", move back to "google.com" return "google.com"
	expect(browserHistory.back(1)).toEqual("google.com");                   
	expect(browserHistory.getCurrentPage()).toEqual("google.com");
	
	// You are in "google.com", move forward to "facebook.com" return "facebook.com"
	expect(browserHistory.forward(1)).toEqual("facebook.com");
	expect(browserHistory.getCurrentPage()).toEqual("facebook.com");

	// You are in "facebook.com". Visit "linkedin.com"
	expect(browserHistory.visit("linkedin.com")).toEqual(true);
	// You are in "linkedin.com", you cannot move forward any steps.
	expect(browserHistory.forward(2)).toEqual("linkedin.com");
	// You are in "linkedin.com", move back two steps to "facebook.com" then to "google.com". return "google.com"
	expect(browserHistory.back(2)).toEqual("google.com");
	expect(browserHistory.getCurrentPage()).toEqual("google.com");
	
	// You are in "google.com", you can move back only one step to "leetcode.com". return "leetcode.com"
	expect(browserHistory.back(7)).toEqual("leetcode.com");
});