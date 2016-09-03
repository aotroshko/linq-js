import allFn from './all.js';
import anyFn from './any.js';
import firstFn from './first.js';
import firstOrDefaultFn from './firstOrDefault.js';
import whereFn from './where.js';

let source = Symbol();

class Enumerable {
	constructor(arr) {
		if (Object.prototype.toString.call(arr) === '[object Array]') {
			this[source] = arr;
		} else if (typeof arr == 'string' || arr instanceof String) {
			this[source] = arr.split('');
		} else {
			throw new Error('Given parameter is not an array.');
		}
	}

	all(predicate) {
		return allFn(this[source], predicate);
	}

	any(predicate) {
		return anyFn(this[source], predicate);
	}

	first(predicate) {
		return firstFn(this[source], predicate);
	}

	firstOrDefault(predicate) {
		return firstOrDefaultFn(this[source], predicate);
	}

	toArray() {
		return this[source];
	}

	where(predicate) {
		this[source] = whereFn(this[source], predicate);
		return this;
	}
}

export default Enumerable;