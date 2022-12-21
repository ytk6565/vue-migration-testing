import { defineConfig } from "cypress";
import deepmerge from "deepmerge";

const isVue3 = process.env.VUE_VERSION === "3";

import viteConfigDefault from "./vite.config";

let viteConfig = viteConfigDefault;

if (!isVue3) {
  const config = { resolve: { alias: { "cypress/vue": "cypress/vue2" } } };
  viteConfig = deepmerge(viteConfigDefault, config);
}

export default defineConfig({
  component: {
    devServer: {
      framework: "vue",
      bundler: "vite",
      viteConfig,
    },
  },
});
