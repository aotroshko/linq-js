import lastOrDefaultFn from '../src/lastOrDefault.js';
import * as err from '../src/errors.js';

describe('lastOrDefault.js', () => {
	it('should return ArgumentNullError if "source" parameter is not passed', () => {
		let result = function() {
			lastOrDefaultFn(null);
		};

		expect(result).toThrow(new err.ArgumentNullError('source'));
	});

	describe('when predicate is not used', () => {
		it('should return the last element of a sequence', () => {
			let source = [1, 2, 3],
				result = lastOrDefaultFn(source);

			expect(result).toBe(3);
		});

		it('should return null if source array has no items', () => {
			let result = lastOrDefaultFn([]);

			expect(result).toBeNull();
		});
	});

	describe('when predicate is used', () => {
		it('should return the last element of a sequence that satisfies a condition', () => {
			let source = [
					{ name: 'Name1', age: 25 },
					{ name: 'Name2', age: 30 },
					{ name: 'Name3', age: 30 }
				],
				predicate = (x) => x.age === 30,
				result = lastOrDefaultFn(source, predicate);

			expect(result.name).toBe('Name3');
		});

		it('should return null if all elements of a sequence does not satisfy a condition', () => {
			let source = [1, 2, 3],
				predicate = (x) => x === 5,
				result = lastOrDefaultFn(source, predicate);

			expect(result).toBeNull();
		});
	});
});