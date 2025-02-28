import config from "eslint-config-standard";


/** @type {import('eslint').Linter.Config[]} */
export default [
  ...[].concat(config),
  pluginJs.configs.recommended,

    {
        rules: {
            "no-unused-vars": "warn",
            "no-undef": "warn"
        }
    }
];