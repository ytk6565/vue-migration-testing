<template>
  <div>
    <p data-cy="counter">Times clicked: {{ count }}</p>
    <button @click="increment" data-cy="increment">increment</v-button>
    <button @click="decrement" data-cy="decrement">decrement</v-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue-demi";

import { useCounter } from "@/VCounter/compositions/useCounter";

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
