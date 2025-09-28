import React from 'react';

export const useQuery = <T>(key: string, fetcher: () => Promise<T>) => {
  const [data, setData] = React.useState<T | null>(null);
  const [error, setError] = React.useState<Error | undefined>(undefined);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetcher();
        setData(result);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [key, fetcher]);

  return { data, error, loading };
};
