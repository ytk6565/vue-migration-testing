import { resolve } from "path";
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
  build: {
    sourcemap: true,
    emptyOutDir: false,
    lib: {
      fileName: "main",
      formats: ["es"],
      entry: resolve(__dirname, "src/main.ts"),
    },
    rollupOptions: {
      external: ["vue", "vue-demi"],
      output: {
        globals: {
          vue: "Vue",
          "vue-demi": "VueDemi",
        },
      },
    },
  },
};

export default config;
