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
    "prettier",
    "plugin:react/recommended",
    "plugin:react-native-a11y/basic",
  ],
  rules: {
    "no-restricted-globals": "off",
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
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "airbnb-typescript",
        "prettier",
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
      },
    },
  ],
};
