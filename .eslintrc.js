module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'no-unused-vars': 'off',
    'max-classes-per-file': 'off',
    'no-param-reassign': 'off',
    'prefer-const': ['off', {
      destructuring: 'any',
      ignoreReadBeforeAssign: true,
    }],
  },
};
