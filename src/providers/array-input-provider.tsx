import React from "react";
import { createContext, use } from "react";

export interface ArrayInputContextProps<T> {
  add: (item: T) => void;
  remove: (index: number) => void;
  reset: (newItems: T[]) => void;
  items: T[];
}

const ArrayInputContext = createContext<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ArrayInputContextProps<any> | undefined
>(undefined);

export function useArrayInput<T>() {
  const context = use(ArrayInputContext) as
    | ArrayInputContextProps<T>
    | undefined;
  if (!context) {
    throw new Error("useArrayInput must be used within an ArrayInputProvider");
  }
  return context;
}

export const ArrayInputProvider = <T,>({
  children,
  values,
}: {
  children: React.ReactNode;
  values: T[];
}) => {
  const [items, setItems] = React.useState<T[]>(values || []);

  const add = (item: T) => {
    setItems([...items, item]);
  };

  const remove = (index: number) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const reset = (newItems: T[]) => {
    setItems(newItems);
  };

  return (
    <ArrayInputContext.Provider
      value={
        {
          add,
          remove,
          reset,
          items,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } as ArrayInputContextProps<any>
      }
    >
      {children}
    </ArrayInputContext.Provider>
  );
};
