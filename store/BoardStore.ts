import { database } from '@/AppWritr';
import { getTodosGroupByColumn } from '@/lib/getTodoGroupByColumn';
import { create } from 'zustand'

interface BoardStore {
  board: Board;
  getBoard: () => void;
  setBoardState: (board: Board) => void;
  updateTodoInDB: (todo: Todo, columId: TypedColumn) => void;
}

export const useBearStore = create<BoardStore>((set) => ({
  board: {
    columns: new Map<TypedColumn, Column>()
  },
  getBoard: async () => {
    const board = await getTodosGroupByColumn();
    set({ board });

  },

  setBoardState: (board) => set({ board }),

  updateTodoInDB: async (todo, columnId) => {
    await database.updateDocument(
      process.env.NEXT_PUBLIC_DATABASE_ID!,
      process.env.NEXT_PUBLIC_TODO_COLLECTIONS_ID!,
      todo.$id,
      {
        title: todo.title,
        status: columnId,
      }
    );
  },

})); 