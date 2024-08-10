module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'react-native/react-native': true
  },
  extends: [
    'eslint:recommended',
    // 'airbnb',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-native/all',
    'prettier'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
    'react-native',
    'only-warn',
    'prettier'
  ],
  root: true,
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'prettier/prettier': ['warn', {endOfLine: 'auto'}],
    'react/jsx-filename-extension': [
      'warn',
      {extensions: ['.js', '.jsx', '.tsx']}
    ],

    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-var-requires': 0,

    'react-native/sort-styles': 0,
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 0,
    'react-native/no-inline-styles': 0,
    'react-native/no-color-literals': 0,
    'react-native/no-raw-text': 0,
    'react-native/no-single-element-style-arrays': 2
  }
};
