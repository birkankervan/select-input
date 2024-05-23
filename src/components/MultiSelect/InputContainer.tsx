import { ChangeEvent, useCallback, useRef } from "react";
import { useInputStore, useLoadingStore } from "../../store";
import { debounce } from "../../utils";
import { Input } from "./Input";
import { SelectedItems } from "./SelectedItems";

export default function InputContainer() {
  const { setInputValue, inputValue } = useInputStore((state) => state);
  const { setLoading } = useLoadingStore((state) => state);
  const inputRef = useRef<HTMLInputElement>(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleChange = useCallback(
    debounce((value: string) => {
      setInputValue(value);
      setLoading(false);
    }, 300),
    [setInputValue, setLoading]
  );

  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setLoading(true);
      const value = e.target.value;
      handleChange(value);
    },
    [handleChange, setLoading]
  );

  const onInputClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="relative " onClick={onInputClick}>
      <div className="flex gap-2 flex-wrap border rounded-2xl focus-within:border-gray-400 pr-1 bg-white">
        <div className="flex gap-2 flex-wrap min-h-12 items-center p-2 w-full ">
          <SelectedItems inputRef={inputRef} />
          <Input onChange={handleInputChange} ref={inputRef} />
        </div>
      </div>
      <div className="absolute top-4 right-2 ">
        {inputValue.length > 0 ? (
          <svg
            width="18"
            height="18"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 9H11L7.5 4.5L4 9Z" fill="currentColor"></path>
          </svg>
        ) : (
          <svg
            width="18"
            height="18"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 6H11L7.5 10.5L4 6Z" fill="currentColor"></path>
          </svg>
        )}
      </div>
    </div>
  );
}
