const RULES_ESTATUS = {
  OFF: "off",
  WARN: "warn",
  ERROR: "error",
}

module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  extends: ["eslint:recommended", "standard", "prettier"],
  settings: {
    react: {
      version: "detect",
    },
  },

  overrides: [],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "eol-last": RULES_ESTATUS.OFF,
    "no-prototype-builtins": RULES_ESTATUS.OFF,
  },
}
