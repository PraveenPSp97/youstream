import React, { useContext, useState } from "react";

const searchProvider = React.createContext();

export const SearchProvider = ({ children }) => {
  //   const [selecteCatogory, setselecteCatogory] = useState("New");
  const [selectedCatogory, setselectedCatogory] = useState("New");
  return (
    <searchProvider.Provider value={{ selectedCatogory, setselectedCatogory }}>
      {children}
    </searchProvider.Provider>
  );
};

export const useSearchProvider = () => {
  return useContext(searchProvider);
};
