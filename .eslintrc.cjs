/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');
module.exports = {
  root: true,
  env: {
    node: true,
    'vue/setup-compiler-macros': true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  extends: ['plugin:vue/vue3-recommended', 'eslint:recommended', '@vue/typescript/recommended', 'prettier', 'plugin:storybook/recommended'],
  plugins: ['prettier', '@typescript-eslint'],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-var-requires': 'off',
    'no-sequences': 'off',
    'no-irregular-whitespace': 0,
    'prettier/prettier': ['error', {
      endOfLine: 'auto'
    }],
    'vue/attribute-hyphenation': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'vue/require-default-prop': 'off',
    'object-shorthand': 'off',
    'no-useless-escape': 'off',
    'vue/no-v-html': 'off',
    'vue/multi-word-component-names': 'off'
  },
  ignorePatterns: ['dist', '**/*.scss']
};