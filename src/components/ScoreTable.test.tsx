import { render, screen } from "@testing-library/react";
import ScoreTable from "./ScoreTable";

describe("ScoreTable", () => {
  const cats = [
    {
      id: "1",
      name: "Chat 1",
      imageUrl: "https://placekitten.com/200/200",
      score: 5,
    },
    {
      id: "2",
      name: "Chat 2",
      imageUrl: "https://placekitten.com/201/201",
      score: 3,
    },
  ];

  it("affiche tous les chats avec leur nom, image et score", () => {
    render(<ScoreTable cats={cats} />);
    expect(screen.getByText("Chat 1")).toBeInTheDocument();
    expect(screen.getByText("Chat 2")).toBeInTheDocument();
    expect(screen.getAllByRole("img")).toHaveLength(2);
    expect(screen.getByText(/Score : 5/)).toBeInTheDocument();
    expect(screen.getByText(/Score : 3/)).toBeInTheDocument();
  });
});
