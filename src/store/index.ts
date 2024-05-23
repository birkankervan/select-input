import { create } from "zustand";
import type {
  FilterState,
  ListState,
  LoadingState,
  SelectionState,
} from "../types";

const useSelectionStore = create<SelectionState>()((set) => ({
  selectedItems: [],
  itemRemove: (id) =>
    set((state) => ({
      selectedItems: state.selectedItems.filter((item) => item.id !== id),
    })),
  itemSelect: (newItem) =>
    set((state) => ({ selectedItems: [...state.selectedItems, newItem] })),
  removeLastItem: () =>
    set((state) => ({
      selectedItems: state.selectedItems.slice(
        0,
        state.selectedItems.length - 1
      ),
    })),
}));

const useInputStore = create<FilterState>((set) => ({
  inputValue: "",
  setInputValue: (value: string) => set({ inputValue: value }),
}));

const useLoadingStore = create<LoadingState>((set) => ({
  loading: false,
  setLoading: (value: boolean) => set({ loading: value }),
}));

const useListStore = create<ListState>((set) => ({
  isOpen: false,
  setIsOpen: (value: boolean) => set({ isOpen: value }),
}));

export { useInputStore, useListStore, useLoadingStore, useSelectionStore };
