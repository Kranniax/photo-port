import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import PhotoList from "../index.jsx";

afterEach(cleanup);

describe("PhotoList is rendering", () => {
  it("renders", () => {
    render(<PhotoList />);
  });
  it("matches snapshot", () => {
    const { asFragment } = render(<PhotoList />);
    expect(asFragment()).toMatchSnapshot();
  });
});
