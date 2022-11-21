import { act, renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";

describe("Pruebas en el useCounter", () => {
  test("sdebe retornar los valores por defecto", () => {
    const { result } = renderHook(() => useCounter());
    const { counter, decrement, increment, reset } = result.current;

    expect(counter).toBe(10);
    expect(decrement).toEqual(expect.any(Function));
    expect(increment).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });
  //==
  test("debe incrementar el contador", () => {
    const { result } = renderHook(() => useCounter());
    const { counter, increment } = result.current;
    act(() => {
      increment();
    });
    expect(result.current.counter).toBe(11);
  });
  //==
  test("debe disminuir el contador", () => {
    const { result } = renderHook(() => useCounter());
    const { decrement } = result.current;
    act(() => {
      decrement();
    });
    expect(result.current.counter).toBe(9);
  });
  //==
  test("debe resetear el contador", () => {
    const { result } = renderHook(() => useCounter());
    const { reset } = result.current;
    act(() => {
      reset();
    });
    expect(result.current.counter).toBe(10);
  });
});
