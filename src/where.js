import * as err from './errors.js';

export default (source, predicate) => {
	if (!source) {
		throw new err.ArgumentNullError('source');
	}

	if (!predicate) {
		throw new err.ArgumentNullError('predicate');
	}

	let result = [];

	for (let i = 0, len = source.length; i < len; i++) {
		let item = source[i];

		if (predicate(item)) {
			result.push(item);
		}
	}

	return result;
}