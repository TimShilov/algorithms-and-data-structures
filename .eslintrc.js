module.exports = {
    env: {
        commonjs: true,
        es2020: true,
        node: true,
    },
    extends: [
        "eslint:recommended",
        "optimize-regex/recommended",
        "plugin:node/recommended",
        "plugin:promise/recommended",
        "plugin:sonarjs/recommended",
        "plugin:unicorn/recommended",
        "prettier",
    ],
    parserOptions: {
        ecmaVersion: 11,
    },
    plugins: [
        "unicorn",
        "optimize-regex",
        "promise",
        "sonarjs",
        "jest",
        "jest-formatting",
    ],
    rules: {},
};
