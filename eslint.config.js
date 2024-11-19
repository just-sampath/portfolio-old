import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default [
  {
    ignores: [
      '**/dist/**/*',
      '**/dist/*',
      'dist',
      'dist/**',
      'dist/**/*',
      'node_modules/**',
    ],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2020,
        ...globals.node,
        React: 'readonly',
        require: 'readonly',
        process: 'readonly',
        __REACT_DEVTOOLS_GLOBAL_HOOK__: 'readonly',
        IS_REACT_ACT_ENVIRONMENT: 'readonly',
        MSApp: 'readonly',
        queueMicrotask: 'readonly',
        reportError: 'readonly',
        FormData: 'readonly',
        URLSearchParams: 'readonly',
        DOMException: 'readonly',
        SVGElement: 'readonly',
        PointerEvent: 'readonly',
        IntersectionObserver: 'readonly',
        HTMLElement: 'readonly',
        Element: 'readonly',
        cancelAnimationFrame: 'readonly',
        requestAnimationFrame: 'readonly',
      },
    },
  },
  {
    files: ['**/*.{js,jsx}'],
    ...js.configs.recommended,
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tseslint.parser,
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      // React rules
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      
      // Basic TypeScript rules
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { 
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^[A-Z_]',
        ignoreRestSiblings: true,
      }],
      '@typescript-eslint/no-explicit-any': 'warn',
      
      // Relaxing problematic rules
      'no-undef': 'off', // TypeScript handles this
      'no-empty': 'warn',
      'no-prototype-builtins': 'off',
      'no-useless-escape': 'warn',
      'no-control-regex': 'off',
      'no-constant-condition': ['error', { checkLoops: false }],
      'no-fallthrough': ['error', { commentPattern: 'falls?\\s?through' }],
      'getter-return': 'error',
      'no-func-assign': 'warn',
      'valid-typeof': 'error',
      'no-unreachable': 'warn',
      'no-cond-assign': ['error', 'except-parens'],
      'no-sparse-arrays': 'warn',
      'no-redeclare': 'error',
      'no-self-assign': 'warn',
      'no-misleading-character-class': 'warn',
    },
  },
];
