import * as err from './errors.js';

export default (source, predicate) => {
	if (!source) {
		throw new err.ArgumentNullError('source');
	}

	if (!predicate) {
		throw new err.ArgumentNullError('predicate');
	}

	for (let i = 0; i < source.length; i++) {
		let item = source[i];

		if (!predicate(item)) {
			return false;
		}
	}

	return true;
}