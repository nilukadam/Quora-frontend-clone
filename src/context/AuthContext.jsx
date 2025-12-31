import React from 'react'
import { createContext, useContext, useState } from "react";

/*
  AuthContext handles user authentication state.
  This is mock auth for now (no backend).
*/
const AuthContext = createContext();

/*
  AuthProvider wraps the app and provides auth data.
*/
export const AuthProvider = ({ children }) => {
  // Logged-in user info (null means not logged in)
  const [user, setUser] = useState(null);

  // Mock login function
  const login = (userData) => {
    setUser(userData);
  };

  // Logout user
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

/*
  Custom hook to use AuthContext easily
*/
export const useAuth = () => useContext(AuthContext);
