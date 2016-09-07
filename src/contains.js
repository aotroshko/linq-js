import * as err from './errors.js';

export default (source, value, comparer) => {
	if (!source) {
		throw new err.ArgumentNullError('source');
	}

	if (comparer == null) {
		comparer = function(x, y) {
			return Object.is(x, y);
		};
	}

	for (let i = 0; i < source.length; i++) {
		let element = source[i];

		if (comparer(element, value)) {
			return true;
		}
	}

	return false;
}