import { useInputStore, useSelectionStore } from "../../store";
import type { Character } from "../../types";
import { highlightSearchTerm } from "../../utils";

export const CharacterElement = ({
  item,
  isOnside,
}: {
  item: Character;
  isOnside: boolean;
}) => {
  const { itemSelect, selectedItems, itemRemove } = useSelectionStore(
    (state) => state
  );
  const { inputValue } = useInputStore((state) => state);
  const isSelected = selectedItems.some((selected) => selected.id === item.id);

  return (
    <div
      key={item.name}
      className="flex items-center p-2 gap-2 cursor-pointer hover:bg-gray-100 border-b border-gray-300 content-visibility-element"
      style={{ backgroundColor: isOnside ? "#f5f5f5" : "transparent" }}
      onClick={() => (isSelected ? itemRemove(item.id) : itemSelect(item))}
    >
      <input type="checkbox" name="select" checked={isSelected} readOnly />
      <img src={item.image} alt={item.name} className="w-8 h-8  rounded-full" />
      <div className="flex flex-col">
        <span
          className="text-gray-600"
          dangerouslySetInnerHTML={{
            __html: highlightSearchTerm(item.name, inputValue),
          }}
        />

        <span className="text-sm text-gray-400">
          {item.episode.length} Episodes
        </span>
      </div>
    </div>
  );
};
