import React, { createContext } from "react";

export const SideBarContex = createContext();

export const SideBarProvider = ({ curPage, setCurPage,showSide, setShowSide,login, setLogin, children }) => {
  return (
    <SideBarContex.Provider value={{ curPage, setCurPage, showSide, setShowSide, login, setLogin }}>
      {children}
    </SideBarContex.Provider>
  );
};
