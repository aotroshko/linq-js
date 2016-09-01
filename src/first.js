import * as err from './errors.js';

export default (source, predicate) => {
	if (!source) {
		throw new err.ArgumentNullError('source');
	}

	if(source.length === 0) {
		return null;
	}

	if (!predicate) {
		return source[0];
	}

	for (let i = 0; i < source.length; i++) {
		let item = source[i];

		if (!predicate(item)) {
			return item;
		}
	}

	return null;
}