import * as err from './errors.js';
import * as utils from './utils.js';

export default (source, predicate) => {
	if (!source) {
		throw new err.ArgumentNullError('source');
	}

	if (source.length === 0) {
		return null;
	}

	if (!predicate) {
		return source[source.length - 1];
	}

	predicate = utils.parseLambda(predicate);

	for (let i = source.length - 1; i >= 0; i--) {
		let item = source[i];

		if (predicate(item)) {
			return item;
		}
	}

	return null;
}