import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("affiche le titre CATMASH", () => {
    render(<Header />);
    expect(
      screen.getByRole("heading", { name: /catmash/i })
    ).toBeInTheDocument();
  });

  it("affiche le logo SVG", () => {
    render(<Header />);
    expect(document.querySelector("svg")).toBeInTheDocument();
  });
});
