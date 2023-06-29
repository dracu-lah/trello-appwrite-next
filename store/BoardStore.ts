import { databases } from "@/appwrite";
import { getTodosGroupedByColoumn } from "@/libs/getTodosGroupedByColoumn";
import { create } from "zustand";

interface BoardState {
  board: Board;
  getBoard: () => void;
  setBoardState: (board: Board) => void;
  updateTodoInDB: (todo: Todo, columnId: TypedColumn) => void;
  searchString: string;
  setSearchString: (searchString: string) => void;
}

export const useBoardStore = create<BoardState>((set) => ({
  board: { columns: new Map<TypedColumn, Column>() },
  searchString: "",

  getBoard: async () => {
    const board = await getTodosGroupedByColoumn();
    set({ board });
  },
  setBoardState: (board) => set({ board }),
  updateTodoInDB: async (todo, columnId) => {
    await databases.updateDocument(
      "6492a39d932fac34456b",
      "6492a3f3dc2b6a6df10f",
      todo.$id,
      { title: todo.title, status: columnId }
    );
  },
  setSearchString: (searchString) => set({ searchString }),
}));
