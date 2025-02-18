module.exports = {
  root: true,
  env: {
    node: true,
  },
  parserOptions: {
    "ecmaVersion": 2018,
  },
  extends: [],
  rules: {
    "no-restricted-globals": ["error", "name", "length"],
    "prefer-arrow-callback": "error",
    "quotes": ["error", "double", {"allowTemplateLiterals": true}],
  },
  overrides: [
    {
      files: ["**/*.spec.*"],
      env: {
        mocha: true,
      },
      rules: {},
    },
  ],
  globals: {},
  
};
