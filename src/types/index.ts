export interface SelectionState {
  selectedItems: Character[];
  itemRemove: (id: number) => void;
  itemSelect: (newItem: Character) => void;
  removeLastItem: () => void;
}

export interface CustomInputProps {
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface FilterState {
  inputValue: string;
  setInputValue: (value: string) => void;
}

export interface LoadingState {
  loading: boolean;
  setLoading: (value: boolean) => void;
}

export interface ListState {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export type Info = {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
};

export type Origin = {
  name: string;
  url: string;
};

export type Location = {
  name: string;
  url: string;
};

export type Character = {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  type: string;
  gender: "Female" | "Male" | "Genderless" | "unknown";
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export type ApiResponse = {
  info: Info;
  results: Character[];
};
