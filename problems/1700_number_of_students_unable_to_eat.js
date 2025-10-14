import { Queue } from "@datastructures-js/queue";

export function countStudents(students, sandwiches) {
	const qStu = Queue.fromArray(students);
	const qSan = Queue.fromArray(sandwiches);
	let sinceLastMatch = 0;
	while (sinceLastMatch < qStu.size()) {

		// ran out of sandwiches
		if (qSan.isEmpty()) return qStu.size();

		// we have a match
		if (qStu.front() === qSan.front()) {
			qStu.dequeue();
			qSan.dequeue();
			sinceLastMatch = 0;
		} else {
			// no match, student goes to the end of the queue
			sinceLastMatch++;
			qStu.enqueue(qStu.dequeue());
		}
	}
	return qStu.size();
}