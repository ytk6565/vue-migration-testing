<template>
  <div>
    <p data-cy="counter">Times clicked: {{ count }}</p>
    <v-button @click="increment" data-cy="increment">increment</v-button>
    <v-button @click="decrement" data-cy="decrement">decrement</v-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue-demi";

import { useCounter } from "@/VCounter/compositions/useCounter";
import VButton from "@/VButton/index.vue";

export default defineComponent({
  components: {
    VButton,
  },
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
