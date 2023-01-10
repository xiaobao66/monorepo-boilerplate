module.exports = {
  parser: '@typescript-eslint/parser',

  parserOptions: {
    project: './tsconfig.json',
  },

  env: {
    es6: true,
  },

  extends: ['@tencent/eslint-config-tencent', '@tencent/eslint-config-tencent/ts'],
};
