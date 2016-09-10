import * as err from './errors.js';

export default (source, predicate) => {
	if (!source) {
		throw new err.ArgumentNullError('source');
	}

	if (source.length === 0) {
		throw new err.NoElementsError();
	}

	if (!predicate) {
		return source[source.length - 1];
	}

	for (let i = source.length - 1; i >= 0; i--) {
		let item = source[i];

		if (predicate(item)) {
			return item;
		}
	}

	throw new err.NoMatchError();
}