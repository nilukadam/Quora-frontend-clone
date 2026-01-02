import React from "react";
import { createContext, useContext, useState, useEffect } from "react";
import storageService from '../services/storageService';

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
  const [user, setUser] = useState(() =>
    storageService.get("user", null)
  );
  const [showAuthPopup, setShowAuthPopup] = useState(false);
  
  useEffect(() => {
    storageService.set("user", user);
  }, [user]);
  
  // Mock login function
  const login = (userData) =>  
     setUser(userData);
  

  // Logout user
  const logout = () => {
    setUser(null);
    storageService.remove("user");
  };
    /*
    Guard function for auth-required actions
  */
  const requireAuth = (action) => {
    if (!user) {
      setShowAuthPopup(true);
      return;
    }
    action();
  };


  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        logout,
        showAuthPopup,
        setShowAuthPopup,
        requireAuth
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
