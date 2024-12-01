import js from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import globals from 'globals'

export default [
  js.configs.recommended,
  eslintConfigPrettier,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
        chrome: 'readonly',
      },
      ecmaVersion: 2022,
      sourceType: 'module',
    },
    rules: {
      'comma-dangle': ['error', 'always-multiline'],
      'spaced-comment': [
        'error',
        'always',
        {
          exceptions: ['!'],
        },
      ],
      'padded-blocks': 'off',
    },
  },
]
