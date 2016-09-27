import takeWhileFn from '../src/takeWhile.js';
import * as err from '../src/errors.js';

describe('takeWhile.js', () => {
	let source = [1, 2, 3, 4, 5, 6, 7],
		predicate = (x) => x <= 3;

	it('should return ArgumentNullError if "source" parameter is not passed', () => {
		let result = function() {
			takeWhileFn(null, predicate)
		};

		expect(result).toThrow(new err.ArgumentNullError('source'));
	});

	it('should return ArgumentNullError if "predicate" parameter is not passed', () => {
		let result = function() {
			takeWhileFn(source, null)
		};

		expect(result).toThrow(new err.ArgumentNullError('predicate'));
	});

	it('should return elements from a sequence as long as a specified condition is true', () => {
		let result = takeWhileFn(source, predicate);

		expect(result).toEqual([1, 2, 3]);
	});
});