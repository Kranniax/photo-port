import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContactForm from "../index.jsx";

afterEach(cleanup);
describe("Contact Form", () => {
  it("renders without crashing", () => {
    render(<ContactForm />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<ContactForm />);
    expect(asFragment).toMatchSnapshot();
  });

  it("renders contact form heading", () => {
    render(<ContactForm />);
    expect(screen.getByText(/contact me/i)).toBeInTheDocument();
  });

  it("renders form inputs", () => {
    render(<ContactForm />);
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
  });

  it("renders submit button", () => {
    render(<ContactForm />);
    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
  });

    it("uses data-testid to verify heading and button", () => {
        render(<ContactForm />);
        expect(screen.getByTestId("contact-heading")).toHaveTextContent("Contact me");
        expect(screen.getByTestId("submit-button")).toHaveTextContent("Submit");
    });
});
