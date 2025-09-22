import { performance } from 'perf_hooks';

export function perfTest(func, ...args) {
	//console.log(...args)
	const start = performance.now();
	const result = func(...args);
	const end = performance.now();
	const duration = end - start;
	//console.log(`Execution in ${duration.toFixed(4)} ms`);
	return { result, duration };
}