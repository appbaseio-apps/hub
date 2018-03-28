module.exports = {
	extends: [
		'airbnb',
		'prettier/react',
	],
	plugins: [
		'prettier',
	],
	env: {
		browser: true,
		es6: true,
	},
	parser:
		'babel-eslint',
	rules: {
		'react/jsx-filename-extension': [
			'error',
			{
				extensions: [
					'.js',
					'.jsx',
				],
			},
		],
		'prettier/prettier': [
			'error',
			{
				singleQuote: true,
			},
		],
		indent: [
			2,
			'tab',
			{
				SwitchCase: 1,
				VariableDeclarator: 1,
			},
		],
		'no-tabs': 0,
		'no-underscore-dangle': 0,
		'operator-linebreak': [
			'error',
			'before',
		],
		'prefer-destructuring': 0,
		'no-console': [
			'error',
			{
				allow: [
					'warn',
					'error',
				],
			},
		],
		'class-methods-use-this': 0,

		'react/jsx-indent': [
			2,
			'tab',
		],
		'react/jsx-indent-props': [
			2,
			'tab',
		],
		'react/no-danger': 0,
		'react/no-typos': 0,
		'react/require-default-props': 0,
		'react/no-unused-prop-types': 0,
		'react/sort-comp': 0,
		'jsx-a11y/label-has-for': [
			2,
			{
				components: [
					'Label',
				],
				required: {
					every: [
						'id',
					],
				},
				allowChildren: false,
			},
		],
	},
};