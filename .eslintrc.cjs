module.exports = {
  root: true,
  extends: [
    "plugin:vue/recommended",
    "eslint:recommended",
    "plugin:import/recommended",
    ...[
      "./config/eslint/base/best-practices",
      "./config/eslint/base/possible-errors",
      "./config/eslint/base/style",
      "./config/eslint/base/variables",
      "./config/eslint/base/es6",
      "./config/eslint/imports",
      "./config/eslint/vue",
    ].map(require.resolve),
  ],
};
