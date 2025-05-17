module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "standard",
    "plugin:prettier/recommended", // includes both eslint-plugin-prettier and eslint-config-prettier // "eslint-plugin-prettier" runs Prettier formatting checks as ESLint rules and reports formatting issues. // "eslint-config-prettier" disables ESLint rules that clash with Prettier.
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "no-unused-vars": "error", // keep code-quality rules only here
    camelcase: "off",
    "object-shorthand": "off",

    // Below are redundent now, as we are using prettier for formatting
    // quotes: ["error", "double"], // 👈 force double quotes
    // semi: ["error", "always"], // 👈 Enforce semicolons
    // "comma-dangle": ["error", "always-multiline"], // 👈 Enforce trailing commas
    // "space-before-function-paren": ["error", "never"], // 👈 Enforce no space before ()
    // 'indent': ['error', 2], // 👈 Enforce 2 spaces for indentation
  },
};
