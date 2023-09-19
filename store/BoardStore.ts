import { getTodosGroupByColumn } from '@/lib/getTodoGroupByColumn';
import { create } from 'zustand'

interface BoardStore {
    board: Board;
    getBoard: () => void;
}

export const useBearStore = create<BoardStore>((set) => ({
  board: {
    columns: new Map<TypedColumn, Column>()
  },
  getBoard: async() => {
    const board = await getTodosGroupByColumn();
    set({ board });

  }
  
  
}))  