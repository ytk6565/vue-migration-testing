import { UserConfig } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";
import pluginVue3 from "@vitejs/plugin-vue";
import * as compilerVue3 from "vue3/compiler-sfc";

const isVue3 = process.env.VUE_VERSION === "3";

const config: UserConfig = {
  resolve: {
    alias: {
      ...(isVue3 ? { vue: "vue3" } : {}),
    },
  },
  plugins: [
    ...(isVue3
      ? [pluginVue3({ compiler: compilerVue3 })]
      : [createVuePlugin()]),
  ],
};

export default config;
