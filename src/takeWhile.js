import * as err from './errors.js';
import * as utils from './utils.js';

export default (source, predicate) => {
	if (!source) {
		throw new err.ArgumentNullError('source');
	}

	if (!predicate) {
		throw new err.ArgumentNullError('predicate');
	}

	predicate = utils.parseLambda(predicate);

	let result = [];

	for (let i = 0, len = source.length; i < len; i++) {
		let element = source[i];

		if (predicate(element)) {
			result.push(element);
		} else {
			return result;
		}
	}

	return result;
}