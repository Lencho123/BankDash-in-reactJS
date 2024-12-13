import React, { createContext } from "react";

export const SideBarContex = createContext();

export const SideBarProvider = ({ curPage, setCurPage,showSide, setShowSide, children }) => {
  return (
    <SideBarContex.Provider value={{ curPage, setCurPage, showSide, setShowSide }}>
      {children}
    </SideBarContex.Provider>
  );
};
