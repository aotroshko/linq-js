import singleFn from '../src/single.js';
import * as err from '../src/errors.js';

describe('single.js', () => {
	it('should return ArgumentNullError if "source" parameter is not passed', () => {
		let result = function() {
			singleFn(null);
		};

		expect(result).toThrow(new err.ArgumentNullError('source'));
	});

	it('should return NoElementsError if "source" parameter has no elements', () => {
		let result = function() {
			singleFn([]);
		};

		expect(result).toThrow(new err.NoElementsError());
	});

	describe('when predicate is not used', () => {
		it('should return MoreThanOneElementError if "source" contains more than one element', () => {
			let source = [1, 2, 3],
				result = function() {
					singleFn(source);
				};

			expect(result).toThrow(new err.MoreThanOneElementError());
		});

		it('should return element if a sequence consists of only one element', () => {
			let result = singleFn([5]);

			expect(result).toBe(5);
		});
	});

	describe('when predicate is used', () => {
		it('should return the single element of a sequence if it is only one in a sequence that satisfies a condition', () => {
			let source = [
					{ name: 'Name1', age: 25 },
					{ name: 'Name2', age: 30 },
					{ name: 'Name3', age: 30 }
				],
				predicate = (x) => x.age === 25,
				result = singleFn(source, predicate);

			expect(result.name).toBe('Name1');
		});

		it('should throw MoreThanOneMatchError if more than one elements of a sequence satisfies a condition', () => {
			let source = [1, 2, 3, 3],
				predicate = (x) => x === 3,
				result = function() {
					singleFn(source, predicate)
				};

			expect(result).toThrow(new err.MoreThanOneMatchError());
		});

		it('should throw NoMatchError if all elements of a sequence does not satisfy a condition', () => {
			let source = [1, 2, 3],
				predicate = (x) => x === 5,
				result = function() {
					singleFn(source, predicate)
				};

			expect(result).toThrow(new err.NoMatchError());
		});
	});
});