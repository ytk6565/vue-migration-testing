// TODO: Vue 3 で実行時のエラーを修正する
import { render, fireEvent } from "@testing-library/vue";
import VCounter from "../index.vue";

test("increments value on click", async () => {
  // The render method returns a collection of utilities to query your component.
  const { getByText } = render(VCounter);

  // getByText returns the first matching node for the provided text, and
  // throws an error if no elements match or if more than one match is found.
  getByText("Times clicked: 0");

  const button = getByText("increment");

  // Dispatch a native click event to our button element.
  await fireEvent.click(button);
  await fireEvent.click(button);

  getByText("Times clicked: 2");
});
