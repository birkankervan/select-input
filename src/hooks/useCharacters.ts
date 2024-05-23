import useSWR from "swr";
import { useInputStore, useLoadingStore } from "../store";
import { ApiResponse } from "../types";

export const useCharacter = () => {
  const { inputValue } = useInputStore((state) => state);
  const { loading } = useLoadingStore((state) => state);
  const { data, error, isLoading } = useSWR<ApiResponse>(
    `/character?name=${inputValue}`
  );

  return {
    characters: data?.results || [],
    info: data?.info || {},
    isLoading: loading || isLoading,
    isError: error,
  };
};
