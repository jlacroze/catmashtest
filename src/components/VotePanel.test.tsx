import { render, screen, fireEvent } from "@testing-library/react";
import VotePanel from "./VotePanel";

describe("VotePanel", () => {
  const cats = [
    { id: "1", name: "Chat 1", imageUrl: "https://placekitten.com/200/200" },
    { id: "2", name: "Chat 2", imageUrl: "https://placekitten.com/201/201" },
  ];

  it("affiche deux chats avec leur nom et image", () => {
    render(<VotePanel cats={cats} onVote={jest.fn()} />);
    expect(screen.getByText("Chat 1")).toBeInTheDocument();
    expect(screen.getByText("Chat 2")).toBeInTheDocument();
    expect(screen.getAllByRole("img")).toHaveLength(2);
  });

  it("appelle onVote avec les bons ids quand on clique sur J'aime", () => {
    const onVote = jest.fn();
    render(<VotePanel cats={cats} onVote={onVote} />);
    const buttons = screen.getAllByRole("button", { name: /j'aime/i });
    fireEvent.click(buttons[0]);
    expect(onVote).toHaveBeenCalledWith("1", "2");
    fireEvent.click(buttons[1]);
    expect(onVote).toHaveBeenCalledWith("2", "1");
  });
});
