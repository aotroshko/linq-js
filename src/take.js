import * as err from './errors.js';
import * as utils from './utils.js';

export default (source, count) => {
	if (!source) {
		throw new err.ArgumentNullError('source');
	}

	if (!utils.isInteger(count)) {
		throw new err.InvalidOperationError();
	}

	if (count <= 0) {
		return [];
	}

	return source.slice(0, count);
}