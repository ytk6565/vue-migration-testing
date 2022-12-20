<template>
  <div>
    <p>Times clicked: {{ count }}</p>
    <button @click="increment">increment</button>
    <button @click="decrement">decrement</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue-demi";

import { useCounter } from "./compositions/useCounter";

export default defineComponent({
  setup() {
    const { count, increment, decrement } = useCounter();

    return {
      count,
      increment,
      decrement,
    };
  },
});
</script>
