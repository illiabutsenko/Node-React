import { render, screen } from "@testing-library/react";
import Joke from "./Joke";
import useFetch from "../hooks/useFetch";
import '@testing-library/jest-dom';

jest.mock("../hooks/useFetch", () => ({
  __esModule: true,
  default: jest.fn(),
}));

test("displays joke on successful fetch", () => {
  const joke = "Chuck Norris can divide by zero.";
  useFetch.mockReturnValue({
    data: {value: joke},
    loading: false,
    error: null
  });
  render(<Joke />);
  expect(screen.getByText(`Joke: ${joke}`)).toBeInTheDocument();
});
