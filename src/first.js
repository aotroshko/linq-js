import * as err from './errors.js';
import * as utils from './utils.js';

export default (source, predicate) => {
	if (!source) {
		throw new err.ArgumentNullError('source');
	}

	if (source.length === 0) {
		throw new err.NoElementsError();
	}

	if (!predicate) {
		return source[0];
	}

	predicate = utils.parseLambda(predicate);

	for (let i = 0; i < source.length; i++) {
		let item = source[i];

		if (predicate(item)) {
			return item;
		}
	}

	throw new err.NoMatchError();
}