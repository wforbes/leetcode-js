/* https://leetcode.com/problems/design-browser-history/description/
1472. Design Browser History
You have a browser of one tab where you start on the homepage and you can visit another url,
get back in the history number of steps or move forward in the history number of steps.

Implement the BrowserHistory class:
- BrowserHistory(string homepage) Initializes the object with the homepage of the browser.
- void visit(string url) Visits url from the current page. It clears up all the forward history.
- string back(int steps) Move steps back in history. If you can only return x steps in the
	history and steps > x, you will return only x steps. Return the current url after moving back
	in history at most steps.
- string forward(int steps) Move steps forward in history. If you can only forward x steps
	in the history and steps > x, you will forward only x steps. Return the current url after
	forwarding in history at most steps.
*/

export class ListNode {
	constructor(val, prev, next) {
		this.val = (val === undefined ? 0 : val);
		this.prev = (prev === undefined ? null : prev);
		this.next = (next === undefined ? null : next);
	}
}

/**
 * @param {string} homepage
 */
export class BrowserHistory {

	constructor(homepage) {
		this.head = new ListNode(homepage)
		this.currentPage = this.head;
	}

	/** 
	 * @param {string} url
	 * @return {void}
	 */
	visit(url) {
		let newPage = new ListNode(url);
		let oldCurrent = this.currentPage;
		oldCurrent.next = newPage;
		newPage.prev = oldCurrent;
		this.head = newPage;
		this.currentPage = this.head;
		return true;
	}

	/** 
	 * @param {number} steps
	 * @return {string}
	 */
	back(steps) {
		while (steps > 0 && this.currentPage.prev) {
			this.currentPage = this.currentPage.prev;
			steps--;
		}
		return this.currentPage.val;
	}

	/** 
	 * @param {number} steps
	 * @return {string}
	 */
	forward(steps) {
		while (steps > 0 && this.currentPage.next) {
			this.currentPage = this.currentPage.next;
			steps--;
		}
		return this.currentPage.val;
	}

	getFullHistory() {
		let curr = this.head;
		let response = "";
		while (curr !== null) {
			if (curr === this.currentPage && curr.val === this.currentPage.val) {
				response += `[${curr.val}]->`	
			} else {
				response += `${curr.val}->`
			}
			
			curr = curr.prev;
		}
		return response+"(end)";
	}
	getCurrentPage() {
		return this.currentPage.val;
	}
}

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */