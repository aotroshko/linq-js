import * as err from './errors.js';

let parseLambda = (lambdaExpression) => {
	if (typeof lambdaExpression !== 'string') {
		return lambdaExpression;
	}

	let lambdaParts = lambdaExpression.split('=>'),
		inputParameters = lambdaParts[0],
		expression = lambdaParts[1];

	if (!inputParameters || !expression) {
		throw new err.InvalidOperationError();
	}

	inputParameters = inputParameters.replace('(', '').replace(')', '');

	if (!expression.startsWith('return ')) {
		expression = 'return ' + expression;
	}

	return new Function(inputParameters, expression);
}

export {
	parseLambda
}