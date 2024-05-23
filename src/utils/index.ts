export function debounce<T extends (...args: never[]) => void>(
  func: T,
  delay: number
) {
  let timeoutId: ReturnType<typeof setTimeout>;

  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

export const highlightSearchTerm = (text: string, searchTerm: string) => {
  const regex = new RegExp(`(${searchTerm})`, "gi");
  return text.replace(regex, "<strong>$1</strong>");
};
