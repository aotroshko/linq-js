import anyFn from './any.js';
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

	any(predicate) {
		return anyFn(this[source], predicate);
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