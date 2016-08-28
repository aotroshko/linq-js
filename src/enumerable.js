import where from './where.js';

let source = Symbol();

/**
 * Provides a set of functions for querying objects from arrays.
 */
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
	 * @returns {Array} Еhe resulting array of processed data.
	 */
	toArray() {
		return this[source];
	}

	/**
	 * Filters a sequence of values based on a predicate.
	 * @param {(Function|String)} predicate A function to test each element for a condition.
	 * @returns {Enumerable} Filtered sequence of values that satisfy the condition.
	 */
	where(predicate) {
		this[source] = where(this[source], predicate);
		return this;
	}
}

export default Enumerable;