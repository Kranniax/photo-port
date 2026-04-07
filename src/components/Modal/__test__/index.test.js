import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Modal from "../index.jsx";

const mockToggleModal = jest.fn();
const currentPhoto = {
  name: "Park bench",
  category: "landscape",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
  index: 1,
};

afterEach(cleanup);

describe("Modal component", () => {
  it("renders", () => {
    // baseline render component test
    <Modal currentPhoto={currentPhoto} onClose={mockToggleModal} />;
  });

  // snapshot test
  it("matches snapshot DOM node structure", () => {
    // Arrange the snapshot -declare variables
    const { asFragment } = render(
      <Modal currentPhoto={currentPhoto} onClose={mockToggleModal} />,
    );
    // Assert the match
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("Click Event", () => {
    it("calls onClose handler", () => {
        render(<Modal currentPhoto={currentPhoto} onClose={mockToggleModal} />);
        const closeButton = screen.getByText(/Close this modal/i);
        closeButton.click();
        expect(mockToggleModal).toHaveBeenCalled();
    });
});
