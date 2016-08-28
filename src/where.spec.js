import where from './where.js';
import * as err from './errors.js';

describe('where.js', () => {
	let source = [1, 2, 3, 4, 5, 6, 7],
		predicate = function (x) { return x > 3; };

	it('should return ArgumentNullError if "source" parameter is not passed', () => {
		let result = function(){
			where(null, predicate)
		};
		expect(result).toThrow(new err.ArgumentNullError('source'));
	});

	it('should return ArgumentNullError if "predicate" parameter is not passed', () => {
		let result = function(){
			where(source, null)
		};
		expect(result).toThrow(new err.ArgumentNullError('predicate'));
	});

	it('should return filtered sequence of values', () => {
		let result = where(source, predicate);
		expect(result.length).toBe(4);
	});
});