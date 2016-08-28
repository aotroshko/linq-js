import anyFn from '../src/any.js';
import * as err from '../src/errors.js';

describe('any.js', () => {
	it('should return ArgumentNullError if "source" parameter is not passed', () => {
		let result = function(){
			anyFn(null);
		};
		expect(result).toThrow(new err.ArgumentNullError('source'));
	});

	describe('when predicate is not used', () => {
		it('should return "true" if source array is not empty', () => {
			let source = [1, 2, 3],
				result = anyFn(source);

			expect(result).toBe(true);
		});

		it('should return "false" if source array has no items', () => {
			let result = anyFn([]);
				
			expect(result).toBe(false);
		});
	});

	describe('when predicate is used', () => {
		it('should return "true" if any element of a sequence satisfies a condition', () => {
			let source = [1, 2, 3],
				predicate = (x) => x === 3,
				result = anyFn(source, predicate);

			expect(result).toBe(true);
		});

		it('should return "false" if there is all elements of a sequence does not satisfy a condition', () => {
			let source = [1, 2, 3],
				predicate = (x) => (x === 5),
				result = anyFn(source, predicate);

			expect(result).toBe(false);
		});
	});
});