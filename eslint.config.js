import globals from "globals";
import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import vueParser from "vue-eslint-parser"; 
import prettierConfig from "eslint-config-prettier"; // Импорт конфигурации Prettier
import prettierPlugin from "eslint-plugin-prettier";

export default [
  {
    files: ["**/*.{js,mjs,cjs,vue}"],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
      },
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      vue: pluginVue,
      prettier: prettierPlugin, 
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...pluginVue.configs["recommended"].rules,
      ...prettierConfig.rules, 
      "prettier/prettier": "error", 
      "no-console": "warn",
      "no-debugger": "warn",
      "vue/multi-word-component-names": "off",
    },
  },
];