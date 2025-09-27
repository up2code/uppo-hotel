import React from "react";
import { Toaster } from "sonner";

interface AppProviderProps {
  appName?: string;
}

const AppProviderContext = React.createContext<AppProviderProps | undefined>(
  undefined
);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppProviderContext
      value={{
        appName: "Uppo Hotel",
      }}
    >
      <>
        {children}
        <Toaster position="top-right" />
      </>
    </AppProviderContext>
  );
};
