export function Calculation() {
  const num1 = 10;
  const num2 = 5;

  return (
    <div className="calculation">
      <h2>Math and Count Operations</h2>
      <div data-testid="addition">{num1} + {num2} = {num1 + num2}</div>
      <div data-testid="subtraction">{num1} - {num2} = {num1 - num2}</div>
      <div data-testid="multiplication">{num1} * {num2} = {num1 * num2}</div>
      <div data-testid="division">{num1} / {num2} = {num1 / num2}</div>
    </div>
  );
}