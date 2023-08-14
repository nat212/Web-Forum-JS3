module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "prettier"],
  plugins: ["jest"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}", "webpack.config.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
    {
      env: { "jest/globals": true },
      files: ["test.js"],
    },
    {
      files: ["to_bundle/**/*.js"],
      parserOptions: {
        sourceType: "module",
      },
      env: {
        node: true,
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    quotes: "error",
  },
};
