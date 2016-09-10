import index from '../src/index.js';

describe('index.js', () => {
	it('should add asEnumerable function to Array.prototype', () => {
		expect(Array.prototype.asEnumerable).toBeDefined();
	});

	it('should add asEnumerable function to String.prototype', () => {
		expect(String.prototype.asEnumerable).toBeDefined();
	});

	it('should add Enumerable constructor to global object', () => {
		expect(window.Enumerable).toBeDefined();
	});
});