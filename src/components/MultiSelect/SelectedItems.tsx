import { memo, RefObject } from "react";
import { useNavigateSelectedItems } from "../../hooks/useNavigateSelectedItems";
import { useSelectionStore } from "../../store";
import { ItemChip } from "./ItemChip";

interface SelectedItemsProps {
  inputRef: RefObject<HTMLInputElement>;
}

export const SelectedItems: React.FC<SelectedItemsProps> = memo(
  ({ inputRef }) => {
    const { selectedItems } = useSelectionStore((state) => state);
    const { currentIndex } = useNavigateSelectedItems(inputRef);

    return (
      <>
        {selectedItems.map((item, index) => (
          <ItemChip
            key={item.id}
            item={item}
            isSelected={index === currentIndex}
          />
        ))}
      </>
    );
  }
);
