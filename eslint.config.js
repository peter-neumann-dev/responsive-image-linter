import globals from "globals";
import js from "@eslint/js";

export default [js.configs.recommended, {
    languageOptions: {
        globals: {
            ...globals.node,
            ...globals.browser,
            chrome: "readonly",
        },

        ecmaVersion: 2022,
        sourceType: "module",
    },

    rules: {
        "comma-dangle": ["error", "always-multiline"],

        "spaced-comment": ["error", "always", {
            exceptions: ["!"],
        }],

        "padded-blocks": "off",
    },
}];
