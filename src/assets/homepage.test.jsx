import { render, screen } from "@testing-library/react";
import { Calculation } from "./homepage";

describe("Calculation Component", () => {
  test("renders all math operations correctly", () => {
    render(<Calculation />);
    
    // Check addition
    const addition = screen.getByTestId("addition");
    expect(addition).toHaveTextContent("10 + 5 = 15");
    
    // Check subtraction
    const subtraction = screen.getByTestId("subtraction");
    expect(subtraction).toHaveTextContent("10 - 5 = 5");
    
    // Check multiplication
    const multiplication = screen.getByTestId("multiplication");
    expect(multiplication).toHaveTextContent("10 * 5 = 50");
    
    // Check division
    const division = screen.getByTestId("division");
    expect(division).toHaveTextContent("10 / 5 = 2");
  });

  test("renders heading", () => {
    render(<Calculation />);
    const heading = screen.getByRole("heading", { name: /math operations/i });
    expect(heading).toBeInTheDocument();
  });

  test("all operation results are numbers", () => {
    render(<Calculation />);
    
    const addition = screen.getByTestId("addition");
    const subtraction = screen.getByTestId("subtraction");
    const multiplication = screen.getByTestId("multiplication");
    const division = screen.getByTestId("division");
    
    // Extract the results from the text
    expect(addition.textContent).toMatch(/=\s*15$/);
    expect(subtraction.textContent).toMatch(/=\s*5$/);
    expect(multiplication.textContent).toMatch(/=\s*50$/);
    expect(division.textContent).toMatch(/=\s*2$/);
  });
});