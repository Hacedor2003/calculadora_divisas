module.exports = {
	root: true,
	parserOptions: {
		ecmaVersion: 2021,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
			tsx: true,
		},
	},
	env: {
		browser: true,
		node: true,
		es2021: true,
	},
	extends: ['eslint:recommended', 'next/core-web-vitals'],
	plugins: ['unused-imports'],
	rules: {
		'unused-imports/no-unused-imports': 'error',
	},
};
