import { useCharacter } from "../../hooks/useCharacters";
import { useSelectableList } from "../../hooks/useSelectableList";
import { useInputStore } from "../../store";
import { CharacterElement } from "./CharacterElement";

export const ResultList = () => {
  const { characters, isLoading, isError } = useCharacter();
  const { inputValue } = useInputStore((state) => state);
  const { selectedIndex, listRef } = useSelectableList(characters);

  if (inputValue === "") return null;

  return (
    <div
      className="absolute z-10 w-full bg-white border border-gray-300  rounded-2xl mt-2 max-h-60 min-h-[61px] drop-shadow-md overflow-auto"
      ref={listRef}
    >
      {!isLoading ? (
        characters.map((item, index) => (
          <CharacterElement
            key={item.id}
            item={item}
            isOnside={selectedIndex === index}
          />
        ))
      ) : (
        <div className="p-8  mx-auto  w-full flex justify-center">
          <div className="h-6 w-6 animate-spin rounded-full border-b-2 border-gray-500" />
        </div>
      )}
      {isError && !isLoading && (
        <div className="p-8  mx-auto  w-full flex justify-center">
          <span className="text-gray-500 text-sm">
            There is nothing here...
          </span>
        </div>
      )}
    </div>
  );
};
