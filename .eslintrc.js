module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parser: "@babel/eslint-parser", // needed to make babel stuff work properly
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["react", "react-native", "prettier", "import"],
  extends: [
    "airbnb-base",
    "airbnb/hooks",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "plugin:react-native-a11y/basic",
  ],
  rules: {
    "no-restricted-globals": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      env: { browser: true, node: true, es6: true },
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended-type-checked",
        "airbnb-typescript",
        "plugin:prettier/recommended",
      ],
      globals: { Atomics: "readonly", SharedArrayBuffer: "readonly" },
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 11,
        sourceType: "module",
        project: "./tsconfig.json",
      },
      plugins: ["@typescript-eslint", "prettier"],
      rules: {
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "error",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/quotes": "off",
        "react/react-in-jsx-scope": "off",
        "no-underscore-dangle": "off",
        "import/prefer-default-export": "off",
        "import/extensions": "off",
        "global-require": "off",
        "@typescript-eslint/no-floating-promises": "off",
        "@typescript-eslint/no-misused-promises": [
          "error",
          {
            checksVoidReturn: false,
          },
        ],
        "prettier/prettier": [
          "error",
          {
            endOfLine: "auto",
          },
        ],
      },
    },
  ],
};
