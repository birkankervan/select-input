import { useCallback, useEffect } from "react";

const useRemoveOnKeyPress = (isSelected: boolean, removeItem: () => void) => {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (isSelected && (event.key === "Enter" || event.key === "Backspace")) {
        removeItem();
      }
    },
    [isSelected, removeItem]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);
};

export default useRemoveOnKeyPress;
