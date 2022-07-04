module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:testing-library/react',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'next',
    'next/core-web-vitals',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/jsx-indent': [1, 2],
    'no-undef': 'off',
    indent: [1, 2],
    quotes: [2, 'single'],
    'object-curly-newline': [
      'error',
      {
        ImportDeclaration: { multiline: true, minProperties: 3 },
        ExportDeclaration: { multiline: true, minProperties: 3 },
      },
    ],
    semi: 'error',
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    'testing-library/render-result-naming-convention': 'off',
    'testing-library/no-render-in-setup': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/namespace': 2,
    'import/default': 2,
    'import/export': 2,
    'import/order': [
      'error', 
      {
        'groups': ['type', 'builtin', 'external', 'internal', 'index', 'sibling', 'parent', 'object'],
      },
    ],
  },
};
