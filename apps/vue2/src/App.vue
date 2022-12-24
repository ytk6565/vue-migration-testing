<template>
  <div id="app">
    <VCounter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue-demi";
import { VCounter } from "@packages/ui";

export default defineComponent({
  name: "App",
  components: {
    VCounter,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
