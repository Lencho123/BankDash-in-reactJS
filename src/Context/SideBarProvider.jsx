import React, { createContext } from "react";

export const SideBarContex = createContext();

export const SideBarProvider = ({ curPage, setCurPage, children }) => {
  return (
    <SideBarContex.Provider value={{ curPage, setCurPage }}>
      {children}
    </SideBarContex.Provider>
  );
};
