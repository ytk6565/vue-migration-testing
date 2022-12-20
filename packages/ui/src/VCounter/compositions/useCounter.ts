import { ref } from "vue-demi";

export const useCounter = (defaultCount = 0) => {
  const count = ref(defaultCount);
  const increment = () => count.value++;
  const decrement = () => count.value--;

  return { count, increment, decrement };
};
