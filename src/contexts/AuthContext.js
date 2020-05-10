import React, { useState, useContext, createContext } from 'react';
import jwt from 'jsonwebtoken';

const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
  const token = localStorage.getItem('accessToken');
  let isAuthenticated = false;
  if (!token) {
    isAuthenticated = false;
  } else {
    try {
      const { exp } = jwt.decode(token);
      isAuthenticated = exp ? exp > Date.now() / 1000 : true;
    } catch (error) {
      isAuthenticated = false;
    }
  }
  console.log(isAuthenticated);
  const Auth = useState(isAuthenticated);
  return <AuthContext.Provider value={Auth}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
export default AuthContextProvider;
