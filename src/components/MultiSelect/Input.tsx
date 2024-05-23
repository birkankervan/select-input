import {
  forwardRef,
  InputHTMLAttributes,
  useImperativeHandle,
  useRef,
} from "react";
import { useBackspaceDelete } from "../../hooks/useBackspaceDelete";
import { useSelectionStore } from "../../store";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, CustomInputProps>(
  ({ onChange, ...props }, ref) => {
    const { selectedItems } = useSelectionStore((state) => state);
    const localRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => localRef.current!);

    useBackspaceDelete(localRef);

    const valueLength = localRef.current?.value?.length ?? 0;
    const isValueEmpty = valueLength === 0;
    const isValueShort = valueLength < 5;
    const plusChar = isValueShort ? 2 : 0;
    const dynamicWidth =
      isValueEmpty && selectedItems.length === 0
        ? "100%"
        : `${valueLength + plusChar}ch`;

    return (
      <input
        {...props}
        type="text"
        style={{ width: dynamicWidth }}
        className=" py-1 focus:outline-none border-none  drop-shadow-none"
        onChange={onChange}
        ref={localRef}
      />
    );
  }
);
