import React from "react";
import { render, screen } from "@testing-library/react";
import NavBar from "./navBar";
import renderer from "react-test-renderer";
import { within } from "@testing-library/dom";

configure({ testIdAttribute: "data-test" });
const tableId = "my-table";
const tableHeaderId = "header-section";

describe("Test first column is present", () => {
  // beforeEach(() => {
  //   var component = renderer(<NavBar></NavBar>);
  //   // render(<NavBar />);
  // });

  test("Project name is present", () => {
    const component = renderer.create(<NavBar></NavBar>);
    const table = screen.getByTestId(tableId);
    expect(table).toBeInTheDocument();

    const headerSection = within(table);
    expect(headerSection.getByTestId(tableHeaderId)).toBeInTheDocument();

    expect(component.getByText("Hackhate 2020")).toBeInTheDocument();
  });
});
