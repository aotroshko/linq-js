import allFn from './all.js';
import anyFn from './any.js';
import containsFn from './contains.js';
import firstFn from './first.js';
import firstOrDefaultFn from './firstOrDefault.js';
import lastFn from './last.js';
import lastOrDefaultFn from './lastOrDefault.js';
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

	contains(value, comparer) {
		return containsFn(this[source], value, comparer);
	}

	first(predicate) {
		return firstFn(this[source], predicate);
	}

	firstOrDefault(predicate) {
		return firstOrDefaultFn(this[source], predicate);
	}

	last(predicate) {
		return lastFn(this[source], predicate);
	}

	lastOrDefault(predicate) {
		return lastOrDefaultFn(this[source], predicate);
	}

	toArray() {
		return this[source];
	}

	where(predicate) {
		this[source] = whereFn(this[source], predicate);
		return this;
	}

	[Symbol.iterator]() {
		let arr = this[source],
			nextIndex = 0;

		return {
			next: () => {
				return nextIndex < arr.length
					? { value: arr[nextIndex++], done: false }
					: { done: true };
			}
		}
	}
}

export default Enumerable;