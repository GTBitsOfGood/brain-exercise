module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parser: "babel-eslint", // needed to make babel stuff work properly
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
    "prettier",
    "plugin:react/recommended",
    "plugin:react-native-a11y/basic",
  ],
};
