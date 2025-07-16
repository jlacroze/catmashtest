import { render, screen } from "@testing-library/react";
import Podium from "./Podium";

describe("Podium", () => {
  const cats = [
    {
      id: "1",
      name: "Chat 1",
      imageUrl: "https://placekitten.com/200/200",
      score: 10,
    },
    {
      id: "2",
      name: "Chat 2",
      imageUrl: "https://placekitten.com/201/201",
      score: 8,
    },
    {
      id: "3",
      name: "Chat 3",
      imageUrl: "https://placekitten.com/202/202",
      score: 6,
    },
  ];

  it("affiche les 3 chats du podium avec leur nom et score", () => {
    render(<Podium cats={cats} />);
    expect(screen.getByText("Chat 1")).toBeInTheDocument();
    expect(screen.getByText("Chat 2")).toBeInTheDocument();
    expect(screen.getByText("Chat 3")).toBeInTheDocument();
    expect(screen.getByText(/Score : 10/)).toBeInTheDocument();
    expect(screen.getByText(/Score : 8/)).toBeInTheDocument();
    expect(screen.getByText(/Score : 6/)).toBeInTheDocument();
    expect(screen.getAllByRole("img")).toHaveLength(3);
  });
});
