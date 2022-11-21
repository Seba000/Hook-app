import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-ejemplos";
import { useCounter } from "../../src/hooks/useCounter";
import { useFetch } from "../../src/hooks/useFetch";
jest.mock("../../src/hooks/useFetch");
jest.mock("../../src/hooks/useCounter");
describe("Pruebas en <MultipleCustomHooks/>", () => {
  //
  const mockIncrement = jest.fn();

  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  //

  test("debe mostrar el component por defecto", () => {
    useFetch.mockReturnValue({ data: null, isLoading: true, hasError: null });
    render(<MultipleCustomHooks />);
    expect(screen.getByText("Cargando..."));
    expect(screen.getByText("BreakingBad quotes"));

    const nextButton = screen.getByRole("button", { name: "Next quote" });
    expect(nextButton.disabled).toBeTruthy();
  });

  //
  test("debe mostrar un quote de Breaking bad", () => {
    useFetch.mockReturnValue({
      data: [{ author: "Sebastian", quote: "Hola mundo" }],
      isLoading: false,
      hasError: null,
    });
    render(<MultipleCustomHooks />);
    expect(screen.getByText("Hola mundo"));
    expect(screen.getByText("Sebastian"));

    const nextButton = screen.getByRole("button", { name: "Next quote" });
    expect(nextButton.disabled).toBeFalsy();
  });
  //
  test("debe llamar la funcion de incrementar", () => {
    useFetch.mockReturnValue({
      data: [{ author: "Sebastian", quote: "Hola mundo" }],
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);
    const nextButton = screen.getByRole("button", { name: "Next quote" });
    fireEvent.click(nextButton);

    expect(mockIncrement).toHaveBeenCalled();
  });
});
