import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Gallery from "../index.jsx";

const portrait = {
  name: "portraits",
  description: "Portraits of people in my life",
};

afterEach(cleanup);

describe("Gallery is rendering", () => {
  it("renders", () => {
    render(<Gallery currentCategory={portrait} />);
  });
  it("matches snapshot", () => {
    const { asFragment } = render(<Gallery currentCategory={portrait} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
describe("Title is Portraits", () => {
  it("renders", () => {
    const { getByTestId } = render(<Gallery currentCategory={portrait} />);
    expect(getByTestId("h1tag")).toHaveTextContent("Portraits");
  });
});
