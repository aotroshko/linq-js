import takeFn from '../src/take.js';
import * as err from '../src/errors.js';

describe('take.js', () => {
	let source = [1, 2, 3, 4, 5, 6, 7],
		predicate = (x) => x > 3;

	it('should return ArgumentNullError if "source" parameter is not passed', () => {
		let result = function() {
			takeFn(null, 5)
		};

		expect(result).toThrow(new err.ArgumentNullError('source'));
	});

	it('should return InvalidOperationError if "count" parameter is not integer', () => {
		let result = function() {
			takeFn(source, null)
		};

		expect(result).toThrow(new err.InvalidOperationError());
	});

	it('should return a specified number of elements from the start of a sequence', () => {
		let result = takeFn(source, 3);

		expect(result.length).toBe(3);
	});
});