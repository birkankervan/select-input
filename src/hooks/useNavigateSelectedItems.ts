import { useCallback, useEffect, useState } from "react";
import { useInputStore, useSelectionStore } from "../store";

export const useNavigateSelectedItems = (
  inputRef: React.RefObject<HTMLInputElement>
) => {
  const { selectedItems } = useSelectionStore((state) => state);
  const { inputValue } = useInputStore((state) => state);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      const cursorPosition = inputRef.current?.selectionStart;

      if (
        (inputValue.length > 0 && cursorPosition !== 0) ||
        selectedItems.length === 0
      )
        return;

      switch (e.key) {
        case "ArrowRight":
          setCurrentIndex((prevIndex) =>
            prevIndex === null || prevIndex === selectedItems.length - 1
              ? 0
              : prevIndex + 1
          );
          break;
        case "ArrowLeft":
          setCurrentIndex((prevIndex) =>
            prevIndex === null || prevIndex === 0
              ? selectedItems.length - 1
              : prevIndex - 1
          );
          break;
        default:
          break;
      }
    },
    [inputValue, selectedItems, inputRef]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return {
    currentIndex,
  };
};
