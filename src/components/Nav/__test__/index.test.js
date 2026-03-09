import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Nav from "../index.jsx";
const categories = [
  { name: "portraits", description: "Portraits of people in my life" },
];
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();

afterEach(cleanup);

describe("Nav component", () => {
  // baseline test
  it("renders", () => {
    render(
      <Nav
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
      />,
    );
  });

  // snapshot test
  it("matches snapshot", () => {
    const { asFragment } = render(
      <Nav
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
      />,
    );

    // assert value comparison
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("emoji is visible", () => {
  it("inserts emoji into the h2", () => {
    render(
      <Nav
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
      />,
    );

    const cameraElement = screen.getByLabelText("camera");
    expect(cameraElement).toBeInTheDocument();
  });
});

describe("links are visible", () => {
  it("inserts text into the links", () => {
    // Arrange
    const { getByTestId } = render(
      <Nav
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
      />,
    );
    // Assert
    expect(screen.getByTestId("link")).toHaveTextContent("Oh Snap!");
    expect(screen.getByTestId("about")).toHaveTextContent("About me");
  });
});
