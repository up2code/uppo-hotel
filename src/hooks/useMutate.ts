import React from "react";

export const useMutate = <T, U>(mutator: (data: T) => Promise<U>) => {
  const [data, setData] = React.useState<U | null>(null);
  const [error, setError] = React.useState<Error | undefined>(undefined);
  const [loading, setLoading] = React.useState<boolean>(false);

  const mutate = async (data: T) => {
    setLoading(true);
    try {
      const result = await mutator(data);
      setData(result);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, mutate };
};
