import React from "react";

export const useMutate = <T, U>(mutator: (data: T) => Promise<U>) => {
  const [loading, setLoading] = React.useState(false);

  const mutate = async (
    data: T,
    options?: {
      onSuccess?: (result: U) => void;
      onError?: (error: Error) => void;
    },
  ) => {
    setLoading(true);
    try {
      const result = await mutator(data);
      options?.onSuccess?.(result);
      return result;
    } catch (error: Error | unknown) {
      options?.onError?.(error as Error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { mutate, loading };
};
