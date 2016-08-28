import * as err from './errors.js';

export default (source, predicate) => {
	if (!source) {
		throw new err.ArgumentNullError('source');
	}

	if (!predicate) {
		return source.length > 0;
	}

	for (let i = 0; i < source.length; i++) {
		let item = source[i];

		if (predicate(item)) {
			return true;
		}
	}

	return false;
}