import React, { createContext, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isLogged, setIsLogged] = useLocalStorage('isAdminLogged', false);
  const login = (admin) => {
    if (admin.userName === 'kodluyoruz' && admin.password === 'bootcamp109') {
      setIsLogged(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsLogged(false);
  };

  const value = { isLogged, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
