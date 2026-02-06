import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Nav from "../index.jsx";

afterEach(cleanup);

describe("Nav component", () => {
  // baseline test
  it("renders", () => {
    render(<Nav />);
  });

  // snapshot test
  it("matches snapshot", () => {
    const { asFragment } = render(<Nav />);

    // assert value comparison
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("emoji is visible", () => {
  it("inserts emoji into the h2", () => {
    render(<Nav />);

    const cameraElement = screen.getByLabelText("camera");
    expect(cameraElement).toBeInTheDocument();
  });
});

describe("links are visible", () => {
  it("inserts text into the links", () => {
    // Arrange
    const { getByTestId } = render(<Nav />);
    // Assert
    expect(screen.getByTestId("link")).toHaveTextContent("Oh Snap!");
    expect(screen.getByTestId("about")).toHaveTextContent("About me");
  });
});
