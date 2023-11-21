import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GameForm from "./index";

jest.mock("next/router", () => ({
  useRouter() {
    return { push: jest.fn() };
  },
}));

test("renders two input fields and a button", () => {
  render(<GameForm onCreateGame={() => {}} />);

  // Check if the input fields are present
  expect(screen.getByLabelText("Name of game")).toBeInTheDocument();
  expect(
    screen.getByLabelText("Player names, separated by comma")
  ).toBeInTheDocument();

  // Check if the button is present
  expect(screen.getByText("Create game")).toBeInTheDocument();
});

test("renders a form with the accessible name 'Create a new game'", () => {
  // Check if the form header is present
  expect(screen.getByText("Create a new game")).toBeInTheDocument();
});

test("submits the correct form data when every field is filled out", async () => {});

test("does not submit form if one input field is left empty", async () => {});
