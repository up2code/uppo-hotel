import useSWR from "swr";

export const useQuery = <T>(key: string, fetcher: () => Promise<T>) => {
  return useSWR<T>(key, fetcher);
};
