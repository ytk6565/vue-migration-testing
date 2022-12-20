import { useCounter } from "../useCounter";

describe("useCounter", () => {
  it("increment", () => {
    const { count, increment } = useCounter(0);
    expect(count.value).toBe(0);
    increment();
    expect(count.value).toBe(1);
  });

  it("decrement", () => {
    const { count, decrement } = useCounter(0);
    expect(count.value).toBe(0);
    decrement();
    expect(count.value).toBe(-1);
  });
});
