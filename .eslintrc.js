module.exports = {
	'env': {
		'commonjs': true,
		'es2020': true,
		'node': true
	},
	'extends': 'eslint:recommended',
	'parserOptions': {'ecmaVersion': 11},
	'rules': {
		'no-trailing-spaces': 'error',
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'never'
		],
		'object-curly-newline': [
			'error',
			{
				'ObjectExpression': {
					'multiline': true,
					'consistent': true
				},
				'ObjectPattern': {'multiline': true},
				'ImportDeclaration': {
					'multiline': true,
					'minProperties': 3
				},
				'ExportDeclaration': {
					'multiline': true,
					'minProperties': 3
				},
			},
		],
		'object-property-newline': [
			'error',
			{'allowAllPropertiesOnSameLine': false},
		]
	}
}
