class CustomError extends Error {
	constructor(message) {
		super();

		this.name = this.constructor.name;
		this.message = message;

		if (typeof Error.captureStackTrace === 'function') {
			Error.captureStackTrace(this, this.constructor);
		} else {
			this.stack = (new Error(message)).stack;
		}
	}
}

class ArgumentNullError extends CustomError {
	constructor(paramName) {
		super('Value cannot be null. Parameter name: ' + paramName);
	}
}

class ArgumentOutOfRangeError extends CustomError {
	constructor(paramName) {
		super('Specified argument was out of the range. Parameter name: ' + paramName);
	}
}

class IndexOutOfRangeError extends CustomError {
	constructor() {
		super('Index was outside the bounds of the array.');
	}
}

class InvalidOperationError extends CustomError {
	constructor(message) {
		super(message || 'Operation is not valid.');
	}
}

class NotImplementedError extends CustomError {
	constructor(message) {
		super(message || 'The function or operation is not implemented.');
	}
}

class NoElementsError extends InvalidOperationError {
	constructor() {
		super('Sequence contains no elements.');
	}
}

class NoMatchError extends InvalidOperationError {
	constructor() {
		super('Sequence contains no matching element.');
	}
}

class MoreThanOneElementError extends InvalidOperationError {
	constructor() {
		super('Sequence contains more than one element.');
	}
}

class MoreThanOneMatchError extends InvalidOperationError {
	constructor() {
		super('Sequence contains more than one matching element.');
	}
}

export {
	ArgumentNullError,
	ArgumentOutOfRangeError,
	IndexOutOfRangeError,
	InvalidOperationError,
	NotImplementedError,
	NoElementsError,
	NoMatchError,
	MoreThanOneElementError,
	MoreThanOneMatchError
};