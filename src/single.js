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
		if (source.length === 1) {
			return source[0];
		} else {
			throw new err.MoreThanOneElementError();
		}
	}

	predicate = utils.parseLambda(predicate);

	let result = null;

	for (let i = 0; i < source.length; i++) {
		let element = source[i];

		if (predicate(element)) {
			if (result) {
				throw new err.MoreThanOneMatchError();
			} else {
				result = element;
			}
		}
	}

	if (!result) {
		throw new err.NoMatchError();
	}

	return result;
}