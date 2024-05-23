import { useCallback, useEffect, useRef, useState } from "react";
import { useSelectionStore } from "../store";
import { Character } from "../types";

export const useSelectableList = (items: Character[]) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const { itemSelect, selectedItems, itemRemove } = useSelectionStore(
    (state) => state
  );

  const handleSelection = useCallback(
    (item: Character) => {
      const alreadySelected = selectedItems.some(
        (selected) => selected.id === item.id
      );
      if (alreadySelected) {
        itemRemove(item.id);
      } else {
        itemSelect(item);
      }
    },
    [itemRemove, itemSelect, selectedItems]
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (items.length === 0) return;

      switch (e.key) {
        case "ArrowDown":
          setSelectedIndex((prevIndex) =>
            prevIndex === null || prevIndex === items.length - 1
              ? 0
              : prevIndex + 1
          );
          break;
        case "ArrowUp":
          setSelectedIndex((prevIndex) =>
            prevIndex === null || prevIndex === 0
              ? items.length - 1
              : prevIndex! - 1
          );
          break;
        case "Enter":
          if (selectedIndex !== null) {
            handleSelection(items[selectedIndex]);
          }
          break;
        default:
          break;
      }
    },
    [handleSelection, items, selectedIndex]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  useEffect(() => {
    if (listRef.current && selectedIndex !== null) {
      const selectedItem = listRef.current.children[
        selectedIndex
      ] as HTMLElement;
      if (selectedItem) {
        selectedItem.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }
    }
  }, [selectedIndex]);

  useEffect(() => {
    setSelectedIndex(null);
  }, [items]);

  return {
    selectedIndex,
    handleSelection,
    listRef,
  };
};
