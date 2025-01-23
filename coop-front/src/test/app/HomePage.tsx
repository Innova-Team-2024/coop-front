import { render, screen } from "@testing-library/react";
import HomePage from "@/app/page";
import '@testing-library/jest-dom';

describe("Homepage", () => {
  it("Tiene que decir como deployar", () => {
    render(<HomePage />);
    expect(screen.getByText("Deploy now")).toBeInTheDocument();
  });

  it("Tiene que darnos la documentacion", () => {
    render(<HomePage />);
    expect(screen.getByText("Read our docs")).toBeInTheDocument();
  });
});