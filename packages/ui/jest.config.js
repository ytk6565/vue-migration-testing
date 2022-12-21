const isVue3 = process.env.VUE_VERSION === "3";

/**
 * @type { import("jest").Config }
 */
module.exports = {
  moduleFileExtensions: ["js", "ts", "json", "vue"],
  transform: {
    ".*\\.(vue)$": isVue3 ? "@vue/vue3-jest" : "@vue/vue2-jest",
    "^.+\\.tsx?$": "ts-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  moduleNameMapper: {
    "^vue$": isVue3 ? "vue3" : "vue",
    "^@testing-library/vue$": isVue3
      ? "@testing-library/vue3"
      : "@testing-library/vue",
  },
  testEnvironment: "jsdom",
  // https://github.com/vuejs/vue-jest/issues/479#issuecomment-1295074840
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
  },
};
