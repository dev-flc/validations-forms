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
  extends: ["plugin:react/recommended", "standard", "prettier"],
  settings: {
    react: {
      version: "detect",
    },
  },

  overrides: [],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "eol-last": RULES_ESTATUS.OFF,
  },
}
