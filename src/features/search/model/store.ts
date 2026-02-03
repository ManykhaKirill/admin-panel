import { create } from "zustand";

interface SearchStore {
  query: string;
  disabled: boolean;
  setQuery: (query: string) => void;
  setDisabled: (disabled: boolean) => void;
}

export const useSearchStore = create<SearchStore>((set) => ({
  query: "",
  disabled: false,
  setQuery: (query) => set({ query }),
  setDisabled: (disabled) => set({ disabled }),
}));