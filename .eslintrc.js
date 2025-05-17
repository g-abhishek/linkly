module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    jest: true,
  },
  extends: "standard",
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        ".eslintrc.{js,cjs}",
      ],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "no-unused-vars": "error",
    quotes: ["error", "double"], // 👈 force double quotes
    semi: ["error", "always"], // 👈 Enforce semicolons
    "comma-dangle": ["error", "always-multiline"], // 👈 Enforce trailing commas
    "space-before-function-paren": ["error", "never"], // 👈 Enforce no space before ()
    'indent': ['error', 2], // 👈 Enforce 2 spaces for indentation
  },
};
