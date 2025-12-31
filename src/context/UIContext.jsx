import React from 'react'
import { createContext, useContext, useState } from "react";

/*
  UIContext manages only UI-related state.
  No business logic here.
*/
const UIContext = createContext();

export const UIProvider = ({ children }) => {
  // Modal open/close state
  const [isQuestionModalOpen, setQuestionModalOpen] = useState(false);

  // Active filter or tab
  const [activeFilter, setActiveFilter] = useState("all");

  const openQuestionModal = () => setQuestionModalOpen(true);
  const closeQuestionModal = () => setQuestionModalOpen(false);

  return (
    <UIContext.Provider
      value={{
        isQuestionModalOpen,
        activeFilter,
        openQuestionModal,
        closeQuestionModal,
        setActiveFilter,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

/*
  Custom hook for UIContext
*/
export const useUI = () => useContext(UIContext);
