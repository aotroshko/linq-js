import containsFn from '../src/contains.js';
import * as err from '../src/errors.js';

describe('contains.js', () => {
	it('should return ArgumentNullError if "source" parameter is not passed', () => {
		let result = function() {
			containsFn(null);
		};

		expect(result).toThrow(new err.ArgumentNullError('source'));
	});

	describe('when the default equality comparer is used', () => {
		it('should return "true" if a sequence contains specified element', () => {
			let source = [1, 2, 3],
				result = containsFn(source, 1);

			expect(result).toBe(true);
		});

		it('should return "false" if a sequence does not contain specified element', () => {
			let source = [1, 2, 3],
				result = containsFn(source, 5);

			expect(result).toBe(false);
		});
	});

	describe('when a specified comparer is used', () => {
		it('should return "true" if a sequence contains specified element', () => {
			let source = [
					{ name: 'Name1', age: 25 },
					{ name: 'Name2', age: 30 },
					{ name: 'Name3', age: 30 }
				],
				value = { name: 'Name3' },
				comparer = (x, y) => x.name === y.name,
				result = containsFn(source, value, comparer);

			expect(result).toBe(true);
		});

		it('should return "false" if a sequence does not contain specified element', () => {
			let source = [
					{ name: 'Name1', age: 25 },
					{ name: 'Name2', age: 30 },
					{ name: 'Name3', age: 30 }
				],
				value = { name: 'Name5' },
				comparer = (x, y) => x.name === y.name,
				result = containsFn(source, value, comparer);

			expect(result).toBe(false);
		});
	});
});