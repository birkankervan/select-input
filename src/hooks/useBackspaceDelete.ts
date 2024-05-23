import { useCallback, useEffect } from "react";
import { useSelectionStore } from "../store";

export const useBackspaceDelete = (
  inputRef: React.RefObject<HTMLInputElement>
) => {
  const { selectedItems, removeLastItem } = useSelectionStore((state) => ({
    selectedItems: state.selectedItems,
    removeLastItem: state.removeLastItem,
  }));

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Backspace" && inputRef.current?.value.length === 0) {
        if (selectedItems.length > 0) {
          e.preventDefault();
          removeLastItem();
        }
      }
    },
    [inputRef, selectedItems, removeLastItem]
  );

  useEffect(() => {
    const inputElement = inputRef.current;
    if (inputElement) {
      inputElement.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      if (inputElement) {
        inputElement.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, [inputRef, handleKeyDown]);
};
