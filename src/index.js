import Enumerable from './enumerable.js';

Array.prototype.asEnumerable = String.prototype.asEnumerable = function() {
	return new Enumerable(this);
};