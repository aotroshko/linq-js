import where from './where.js';

let source = Symbol();

class Enumerable {
	constructor(arr) {
		if(Object.prototype.toString.call(arr) === '[object Array]'){
			this[source] = arr;
		} else if(typeof arr == 'string' || arr instanceof String){
			this[source] = arr.split('');
		} else {
			throw new Error('Given parameter is not an array.');
		}
	}

	where(predicate) {
		this[source] = where(this[source], predicate);
		return this;
	}
}

export default Enumerable;