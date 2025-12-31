import React from 'react'
import { AuthProvider } from "./AuthContext";
import { FeedProvider } from "./FeedContext";
import { UIProvider } from "./UIContext";

/*
  AppProvider combines all providers.
  This keeps App.jsx clean and readable.
*/
const AppProvider = ({ children }) => {
  return (
    <AuthProvider>
      <FeedProvider>
        <UIProvider>{children}</UIProvider>
      </FeedProvider>
    </AuthProvider>
  );
};

export default AppProvider;
