import clsx from "clsx";
import { memo, useCallback } from "react";
import useRemoveOnKeyPress from "../../hooks/useRemoveOnKeyPress";
import { useSelectionStore } from "../../store";
import { Character } from "../../types";
import { RemoveButton } from "./RemoveButton";

export const ItemChip = memo(
  ({ item, isSelected }: { item: Character; isSelected: boolean }) => {
    const { itemRemove } = useSelectionStore((state) => state);

    const { id, name } = item;

    const removeItem = useCallback(() => {
      itemRemove(id);
    }, [id, itemRemove]);

    useRemoveOnKeyPress(isSelected, removeItem);

    return (
      <div
        className={clsx(
          "flex items-center bg-slate-200 px-2 py-1 rounded-[8px]",
          isSelected ? "bg-slate-300" : ""
        )}
        onClick={() => console.log("enter")}
      >
        <span className="text-gray-600">{name}</span>
        <RemoveButton removeItem={removeItem} />
      </div>
    );
  }
);
