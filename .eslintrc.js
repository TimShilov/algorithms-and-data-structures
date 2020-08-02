module.exports = {
  env: {
    commonjs: true,
    es2020: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:unicorn/recommended", "prettier"],
  parserOptions: {
    ecmaVersion: 11,
  },
  plugins: ["unicorn"],
  rules: {},
};
