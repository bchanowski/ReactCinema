import { create } from "zustand";

type DateState = {
  date: Date | null;
  setDate: (date: Date) => void;
};

export const useDateStore = create<DateState>((set) => ({
  date: null,
  setDate: (date: Date) => set({ date }),
}));
