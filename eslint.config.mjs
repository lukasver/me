import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';

const eslintConfig = [
  ...nextCoreWebVitals,
  ...nextTypescript,
  {
    ignores: ['node_modules/**', '.next/**', 'out/**', 'build/**', 'next-env.d.ts'],
  },
  {
    rules: {
      'react/no-unescaped-entities': 'off',
      'react-hooks/rules-of-hooks': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/no-explicit-any': 'off',
      'react/no-children-prop': 'warn',
      '@typescript-eslint/ban-ts-comment': 'warn',
      // Rules added by typescript-eslint v8 and eslint-plugin-react-hooks v7
      // (pulled in by eslint-config-next 16). Off to keep lint parity with Next 14.
      '@typescript-eslint/no-empty-object-type': 'off',
      'react-hooks/set-state-in-effect': 'off',
    },
    settings: {
      next: {
        rootDir: ['./'],
      },
    },
  },
];

export default eslintConfig;
