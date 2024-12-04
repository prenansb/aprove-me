module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'next/core-web-vitals',
    'plugin:prettier/recommended',
    'plugin:sonarjs/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'sonarjs'],
  ignorePatterns: ['!.vscode*'],
  rules: {
    'sonarjs/no-duplicate-string': ['error', { threshold: 10 }],
    'prettier/prettier': [
      'warn',
      {
        plugins: ['@ianvs/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss'],
        tailwindFunctions: ['tw', 'twMerge', 'tv', 'cn'],
        importOrderMergeDuplicateImports: true,
        importOrderCombineTypeAndValueImports: true,
        importOrderSortSpecifiers: true,
        importOrderTypeScriptVersion: '5.1.3',
        importOrder: [
          '^(next/(.*)$)|^(next$)',
          '^(react/(.*)$)|^(react$)',
          '<THIRD_PARTY_MODULES>',
          '^~/(.*)$',
          '^[./]|^[..]',
        ],
        importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
        pluginSearchDirs: false,
        endOfLine: 'auto',
        arrowParens: 'avoid',
        singleQuote: true,
        tabWidth: 2,
        semi: false,
        printWidth: 90,
      },
    ],
    'react/display-name': 0,
    'import/no-anonymous-default-export': 0,
  },
}