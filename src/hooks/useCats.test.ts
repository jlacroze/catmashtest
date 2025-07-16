import { renderHook, act } from "@testing-library/react";
import { useCats } from "./useCats";

const mockCats = [
  { id: "1", url: "https://placekitten.com/200/200" },
  { id: "2", url: "https://placekitten.com/201/201" },
];

describe("useCats", () => {
  beforeEach(() => {
    // Mock fetch pour retourner des chats factices
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ images: mockCats }),
      })
    ) as jest.Mock;
    // Nettoie le localStorage
    localStorage.clear();
  });

  it("charge les chats depuis le fetch et les mappe correctement", async () => {
    const { result } = renderHook(() => useCats());
    // Attendre que le hook ait fini de charger
    await act(async () => {
      await Promise.resolve();
    });
    expect(result.current.cats).toHaveLength(2);
    expect(result.current.cats[0]).toEqual({
      id: "1",
      name: "Chat 1",
      imageUrl: "https://placekitten.com/200/200",
    });
  });

  it("vote pour un chat et met à jour les scores", async () => {
    const { result } = renderHook(() => useCats());
    await act(async () => {
      await Promise.resolve();
    });
    act(() => {
      result.current.vote("1", "2");
    });
    expect(result.current.scores).toEqual({ "1": 1, "2": 0 });
    // Le score est bien reporté dans getCatsWithScores
    expect(result.current.getCatsWithScores()[0].score).toBe(1);
    expect(result.current.getCatsWithScores()[1].score).toBe(0);
  });

  it("sauvegarde les scores dans le localStorage", async () => {
    const { result } = renderHook(() => useCats());
    await act(async () => {
      await Promise.resolve();
    });
    act(() => {
      result.current.vote("1", "2");
    });
    const stored = JSON.parse(localStorage.getItem("catmash_scores") || "{}");
    expect(stored).toEqual({ "1": 1, "2": 0 });
  });
});
