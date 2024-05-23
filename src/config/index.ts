export const BE_URL = "https://rickandmortyapi.com/api";

export const fetcher = async (path: string) => {
  const res = await fetch(`${BE_URL}${path}`);

  if (!res.ok) {
    const error = new Error("Someting went wrong!");
    throw error;
  }

  return res.json();
};

export const SWR_CONFIG = {
  fetcher,
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
  revalidateOnMount: false,
  refreshWhenHidden: false,
  refreshWhenOffline: false,
  refreshInterval: 0,
};
