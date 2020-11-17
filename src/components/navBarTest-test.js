import React from "react";
import { render, screen, configure } from "@testing-library/react";
import NavBar from "./navBar";
import "@testing-library/jest-dom/extend-expect";
import fireEvent from "@testing-library/user-event";

configure({ testIdAttribute: "data-test" });
const projectNameSectionId = "project-name";
const buttonForPopoverId = "button-for-popover";
const popoverId = "popover";

jest.mock("./images/hateHackLogo.png", () => jest.fn());

describe("Test Nav Bar", () => {
  beforeEach(() => {
    render(<NavBar />);
  });

  //This is a simple test, which tests that the project name section is in the component, and that it contains the correct text.
  test("Project name is present", () => {
    const projectNameSection = screen.getByTestId(projectNameSectionId);
    expect(projectNameSection).toBeInTheDocument();
    expect(projectNameSection).toHaveTextContent("Hackhate 2020");
  });

  //This shows a different way to test that the correct text is in the component.
  test("Project name is present using getByText", () => {
    expect(screen.getByText("Hackhate 2020")).toBeInTheDocument();
  });

  //This shows how to test that clicking a button produces the correct action.
  test("Clicking button opens popover", () => {
    const button = screen.getByTestId(buttonForPopoverId);
    expect(button).toBeInTheDocument();

    //Testing that the popover isn't open
    expect(screen.queryByTestId(popoverId)).toBeNull();

    fireEvent.click(button);
    //Testing that the popover is open after the button is clicked
    expect(screen.getByTestId(popoverId)).toBeInTheDocument();
  });
});
