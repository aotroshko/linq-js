import allFn from '../src/all.js';
import * as err from '../src/errors.js';

describe('any.js', () => {
	it('should return ArgumentNullError if "source" parameter is not passed', () => {
		let predicate = (x) => x === 1;

		let result = function() {
			allFn(null, predicate);
		};

		expect(result).toThrow(new err.ArgumentNullError('source'));
	});

	it('should return ArgumentNullError if "predicate" parameter is not passed', () => {
		let source = [1, 2, 3];

		let result = function() {
			allFn(source, null);
		};

		expect(result).toThrow(new err.ArgumentNullError('predicate'));
	});

	it('should return "true" if all elements of a sequence satisfy a condition', () => {
		let source = [1, 2, 3],
			predicate = (x) => x < 5;

		let result = allFn(source, predicate);

		expect(result).toBe(true);
	});

	it('should return "false" if a sequence contains at least one element that does not satisfy a condition', () => {
		let source = [1, 2, 3],
			predicate = (x) => x === 3;

		let result = allFn(source, predicate);

		expect(result).toBe(false);
	});
});