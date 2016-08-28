import where from './where.js';

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

	/**
	 * Returns an array that contains the elements from the input sequence.
	 * @returns {Array} array
	 */
	toArray() {
		return this[source];
	}

	where(predicate) {
		this[source] = where(this[source], predicate);
		return this;
	}
}

export default Enumerable;