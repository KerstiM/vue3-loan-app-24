const coreRules = {
  'array-bracket-newline': [
    'error',
    {
      'minItems': 1,
    },
  ],
  'arrow-body-style': [
    'error',
    'as-needed',
  ],
  'function-call-argument-newline': [
    'error',
    'consistent',
  ],
  'function-paren-newline': [
    'error',
    'multiline-arguments',
  ],
  'no-multiple-empty-lines': [
    'error',
    {
      'max': 1,
      'maxEOF': 0,
      'maxBOF': 0,
    },
  ],
  'no-redeclare': [
    'error',
    {
      'builtinGlobals': false,
    },
  ],
  'no-restricted-imports': [
    'error',
    {
      'name': 'lodash',
      'message': 'Please use lodash-es instead.',
    },
  ],
  'no-unused-vars': [
    'error',
    {
      'vars': 'all',
      'argsIgnorePattern': '^_',
      'varsIgnorePattern': '^_',
      'destructuredArrayIgnorePattern': '^_',
    },
  ],
  'no-var': 'error',
  'object-curly-newline': [
    'error',
    {
      'ObjectExpression': {
        'multiline': true,
        'minProperties': 1,
      },
    },
  ],
  'padding-line-between-statements': [
    'error',
    {
      blankLine: 'always',
      prev: '*',
      next: [
        'block-like',
        'return',
        'export',
      ],
    },
    {
      blankLine: 'always',
      prev: [
        'block-like',
        'const',
        'let',
        'import',
      ],
      next: '*',
    },
    {
      blankLine: 'any',
      prev: [
        'const',
        'let',
      ],
      next: [
        'const',
        'let',
      ],
    },
    {
      blankLine: 'any',
      prev: [
        'import',
      ],
      next: [
        'import',
      ],
    },
    {
      blankLine: 'any',
      prev: [
        'export',
      ],
      next: [
        'export',
      ],
    },
  ],
  'prefer-rest-params': 'off',
  'prefer-spread': 'off',
  'semi-spacing': [
    'error',
    {
      'before': false,
      'after': true,
    },
  ],
  'semi-style': [
    'error',
    'last',
  ],
  'space-in-parens': [
    'error',
    'never',
  ],
  'spaced-comment': [
    'error',
    'always',
    {
      'markers': [
        '/',
      ],
    },
  ],
};
const vueRules = {
  'vue/attribute-hyphenation': [
    'error',
    'always',
  ],
  'vue/array-bracket-newline': [
    'error',
    'consistent',
  ],
  'vue/array-bracket-spacing': [
    'error',
    'never',
  ],
  'vue/arrow-spacing': 'error',
  'vue/block-spacing': [
    'error',
    'always',
  ],
  'vue/block-tag-newline': [
    'error',
    {
      'singleline': 'ignore',
      'multiline': 'always',
      'maxEmptyLines': 0,
    },
  ],
  'vue/brace-style': [
    'error',
    '1tbs',
    {
      'allowSingleLine': true,
    },
  ],
  'vue/comma-dangle': [
    'error',
    'always-multiline',
  ],
  'vue/comma-spacing': [
    'error',
    {
      'before': false,
      'after': true,
    },
  ],
  'vue/comma-style': [
    'error',
    'last',
  ],
  'vue/component-definition-name-casing': [
    'error',
    'kebab-case',
  ],
  'vue/component-tags-order': [
    'error',
    {
      'order': [
        'template',
        'script',
        'style',
      ],
    },
  ],
  'vue/custom-event-name-casing': [
    'error',
    'kebab-case',
  ],
  'vue/define-macros-order': [
    'error',
    {
      'order': [
        'defineProps',
        'defineEmits',
      ],
    },
  ],
  'vue/dot-location': [
    'error',
    'property',
  ],
  'vue/dot-notation': 'error',
  'vue/eqeqeq': [
    'error',
    'always',
  ],
  'vue/first-attribute-linebreak': [
    'error',
    {
      'singleline': 'beside',
      'multiline': 'below',
    },
  ],
  'vue/func-call-spacing': [
    'error',
    'never',
  ],
  'vue/html-button-has-type': 'error',
  'vue/html-closing-bracket-newline': [
    'error',
    {
      'singleline': 'never',
      'multiline': 'always',
    },
  ],
  'vue/html-closing-bracket-spacing': [
    'error',
    {
      'startTag': 'never',
      'endTag': 'never',
      'selfClosingTag': 'always',
    },
  ],
  'vue/html-comment-content-newline': [
    'error',
    {
      'singleline': 'never',
      'multiline': 'always',
    },
  ],
  'vue/html-comment-content-spacing': [
    'error',
    'always',
  ],
  'vue/html-comment-indent': 'error',
  'vue/html-indent': [
    'error',
    2,
    {
      'attribute': 1,
      'baseIndent': 1,
      'closeBracket': 0,
      'alignAttributesVertically': true,
    },
  ],
  'vue/key-spacing': [
    'error',
    {
      'mode': 'minimum',
    },
  ],
  'vue/keyword-spacing': 'error',
  'vue/multiline-html-element-content-newline': [
    'error',
    {
      'ignoreWhenEmpty': true,
      'allowEmptyLines': false,
    },
  ],
  'vue/no-bare-strings-in-template': [
    'error',
    {
      'allowlist': [
        '(',
        ')',
        ',',
        '.',
        '&',
        '+',
        '-',
        '=',
        '*',
        '/',
        '#',
        '%',
        '!',
        '?',
        ':',
        '[',
        ']',
        '{',
        '}',
        '<',
        '>',
        '\u00b7',
        '\u2022',
        '\u2010',
        '\u2013',
        '\u2014',
        '\u2212',
        '|',
      ],
      'attributes': {
        '/.+/': [
          'title',
          'label',
          'aria-label',
          'aria-placeholder',
          'aria-roledescription',
          'aria-valuetext',
        ],
        'input': [
          'placeholder',
        ],
        'img': [
          'alt',
        ],
      },
      'directives': [
        'v-text',
      ],
    },
  ],
  'vue/no-constant-condition': 'error',
  'vue/no-empty-component-block': 'error',
  'vue/no-extra-parens': 'error',
  'vue/no-irregular-whitespace': 'error',
  'vue/no-multi-spaces': 'error',
  'vue/no-multiple-objects-in-class': 'error',
  'vue/no-potential-component-option-typo': [
    'error',
    {
      'presets': [
        'all',
      ],
    },
  ],
  'vue/no-static-inline-styles': [
    'error',
    {
      'allowBinding': true,
    },
  ],
  'vue/no-sparse-arrays': 'error',
  'vue/no-useless-concat': 'error',
  'vue/no-useless-mustaches': 'error',
  'vue/no-useless-v-bind': 'error',
  'vue/no-v-text': 'error',
  'vue/object-curly-newline': [
    'error',
    {
      'ObjectExpression': {
        'multiline': true,
        'minProperties': 2,
      },
      'ObjectPattern': {
        'multiline': true,
      },
      'ImportDeclaration': 'never',
      'ExportDeclaration': {
        'multiline': true,
        'minProperties': 3,
      },
    },
  ],
  'vue/object-curly-spacing': [
    'error',
    'always',
    {
      'objectsInObjects': false,
    },
  ],
  'vue/object-property-newline': 'error',
  'vue/object-shorthand': 'error',
  'vue/operator-linebreak': [
    'warn',
    'after',
    {
      'overrides': {
        '?': 'before',
        ':': 'before',
      },
    },
  ],
  'vue/order-in-components': 'error',
  'vue/padding-line-between-blocks': [
    'error',
    'always',
  ],
  'vue/prefer-template': 'error',
  'vue/require-explicit-emits': [
    'error',
    {
      'allowProps': false,
    },
  ],
  'vue/require-name-property': 'error',
  'vue/singleline-html-element-content-newline': [
    'error',
    {
      'ignoreWhenNoAttributes': true,
      'ignoreWhenEmpty': true,
    },
  ],
  'vue/space-in-parens': [
    'error',
    'never',
  ],
  'vue/space-infix-ops': 'error',
  'vue/space-unary-ops': 'error',
  'vue/template-curly-spacing': 'error',
  'vue/v-on-event-hyphenation': [
    'error',
    'always',
    {
      'autofix': true,
    },
  ],
  'vue/v-on-function-call': [
    'error',
    'never',
  ],
  'vue/v-slot-style': [
    'error',
    'shorthand',
  ],
};
const typescriptRules = {
  '@typescript-eslint/ban-ts-comment': 'error',
  '@typescript-eslint/ban-tslint-comment': 'error',
  '@typescript-eslint/camelcase': 'off',
  '@typescript-eslint/consistent-type-assertions': [
    'error',
    {
      assertionStyle: 'as',
    },
  ],
  '@typescript-eslint/consistent-type-definitions': [
    'error',
    'type',
  ],
  '@typescript-eslint/consistent-type-imports': [
    'error',
    {
      prefer: 'type-imports',
      disallowTypeAnnotations: false,
    },
  ],
  '@typescript-eslint/member-delimiter-style': [
    'error',
    {
      'multiline': {
        'delimiter': 'semi',
        'requireLast': true,
      },
      'singleline': {
        'delimiter': 'semi',
        'requireLast': true,
      },
      'multilineDetection': 'brackets',
    },
  ],
  '@typescript-eslint/no-empty-function': 'off',
  '@typescript-eslint/no-explicit-any': 'error',
  '@typescript-eslint/no-this-alias': 'off',
  '@typescript-eslint/no-unused-vars': 'off',
  '@typescript-eslint/no-use-before-define': 'off',
  '@typescript-eslint/sort-type-union-intersection-members': [
    'error',
    {
      checkUnions: false,
    },
  ],
  '@typescript-eslint/space-infix-ops': 'error',
  '@typescript-eslint/type-annotation-spacing': 'error',
};
const importRules = {
  'import/no-duplicates': 'off',
};

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    '@vue/typescript/recommended',
    'plugin:markdown/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
  },
  plugins: [
    'markdown',
    'import',
  ],
  rules: {
    ...coreRules,
    ...vueRules,
    ...typescriptRules,
    ...importRules,
  },
  overrides: [
    {
      files: './config/*.{js,ts}',
      extends: [
        './.eslintrc-tests.cjs',
      ],
    },
    {
      files: '**/*.spec.{js,ts}',
      extends: [
        './.eslintrc-tests.cjs',
      ],
      rules: {
        'array-bracket-newline': 'off',
        'array-element-newline': 'off',
        'constructor-super': 'off',
      },
    },
    {
      files: '**/*.{ts,vue}',
      rules: {
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            'vars': 'all',
            'argsIgnorePattern': '^_',
            'varsIgnorePattern': '^_',
            'destructuredArrayIgnorePattern': '^_',
          },
        ],
      },
    },
    {
      files: '**/*.json',
      rules: {
        'quotes': [
          'error',
          'double',
        ],
        'comma-dangle': [
          'error',
          'never',
        ],
        'semi': 'off',
      },
    },
  ],
};
