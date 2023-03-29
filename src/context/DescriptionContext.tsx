import { createContext, useContext, useState } from "react";

interface DescriptionContextProps {
  isTruncated: boolean;
  setIsTruncated: (value: boolean) => void;
}

const DescriptionContext = createContext<DescriptionContextProps>({
  isTruncated: false,
  setIsTruncated: () => {},
});

export function useDescriptionContext() {
  return useContext(DescriptionContext);
}

export function DescriptionContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isTruncated, setIsTruncated] = useState(false);

  return (
    <DescriptionContext.Provider value={{ isTruncated, setIsTruncated }}>
      {children}
    </DescriptionContext.Provider>
  );
}
