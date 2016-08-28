import * as err from '../src/errors.js';

describe('errors.js', () => {
	describe('ArgumentNullError', () => {
		it('should be defined', () => {
			expect(err.ArgumentNullError).toBeDefined();
		});

		it('should return the correct message', () => {
			let paramName = 'testParam';

			try{
				throw new err.ArgumentNullError(paramName);
			} catch(e) {
				expect(e.name).toBe('Error');
				expect(e.message).toBe('Value cannot be null. Parameter name: ' + paramName);
			}
		});
	});

	describe('ArgumentOutOfRangeError', () => {
		it('should be defined', () => {
			expect(err.ArgumentOutOfRangeError).toBeDefined();
		});

		it('should return the correct message', () => {
			let paramName = 'testParam';

			try{
				throw new err.ArgumentOutOfRangeError(paramName);
			} catch(e) {
				expect(e.name).toBe('Error');
				expect(e.message).toBe('Specified argument was out of the range. Parameter name: ' + paramName);
			}
		});
	});

	describe('IndexOutOfRangeError', () => {
		it('should be defined', () => {
			expect(err.IndexOutOfRangeError).toBeDefined();
		});

		it('should return the correct message', () => {
			try{
				throw new err.IndexOutOfRangeError();
			} catch(e) {
				expect(e.name).toBe('Error');
				expect(e.message).toBe('Index was outside the bounds of the array.');
			}
		});
	});

	describe('InvalidOperationError', () => {
		it('should be defined', () => {
			expect(err.InvalidOperationError).toBeDefined();
		});

		it('should return the correct message', () => {
			try{
				throw new err.InvalidOperationError();
			} catch(e) {
				expect(e.name).toBe('Error');
				expect(e.message).toBe('Operation is not valid.');
			}
		});
	});

	describe('NotImplementedError', () => {
		it('should be defined', () => {
			expect(err.NotImplementedError).toBeDefined();
		});

		it('should return the correct default message', () => {
			try{
				throw new err.NotImplementedError();
			} catch(e) {
				expect(e.name).toBe('Error');
				expect(e.message).toBe('The function or operation is not implemented.');
			}
		});

		it('should return the correct transmitted message', () => {
			let message = 'test message';

			try{
				throw new err.NotImplementedError(message);
			} catch(e) {
				expect(e.name).toBe('Error');
				expect(e.message).toBe(message);
			}
		});
	});
});