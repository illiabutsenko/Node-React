/* eslint-disable react/jsx-filename-extension */
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./CounterOld";
import '@testing-library/jest-dom';

test("renders the initial counts and button", () => {
  render(<Counter />);

  const countElement = screen.getAllByText("You clicked 0 times")[0];
  const button = screen.getAllByText("Click Me")[0];

  expect(countElement).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});

test("increments the count when the increment button is clicked", () => {
  render(<Counter />);
  
  const countElement = screen.getAllByText("You clicked 0 times")[0];
  const button = screen.getAllByText("Click Me")[0];

  fireEvent.click(button);

  expect(countElement).toHaveTextContent("You clicked 1 times");

});