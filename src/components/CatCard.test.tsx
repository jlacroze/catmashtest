import { render, screen, fireEvent } from "@testing-library/react";
import CatCard from "./CatCard";

describe("CatCard", () => {
  const baseProps = {
    id: "abc",
    name: "Chat Test",
    imageUrl: "https://placekitten.com/200/200",
  };

  it("affiche le nom et l'image du chat", () => {
    render(<CatCard {...baseProps} />);
    expect(screen.getByText("Chat Test")).toBeInTheDocument();
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", baseProps.imageUrl);
    expect(img).toHaveAttribute("alt", baseProps.name);
  });

  it("affiche le score si fourni", () => {
    render(<CatCard {...baseProps} score={5} />);
    expect(screen.getByText(/Score : 5/)).toBeInTheDocument();
  });

  it("affiche le bouton J'aime si onVote est fourni", () => {
    render(<CatCard {...baseProps} onVote={jest.fn()} />);
    expect(screen.getByRole("button", { name: /j'aime/i })).toBeInTheDocument();
  });

  it("appelle onVote lors d'un clic sur le bouton J'aime", () => {
    const onVote = jest.fn();
    render(<CatCard {...baseProps} onVote={onVote} />);
    fireEvent.click(screen.getByRole("button", { name: /j'aime/i }));
    expect(onVote).toHaveBeenCalledTimes(1);
  });
});
