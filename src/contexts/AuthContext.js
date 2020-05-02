import React, { useState, useContext, createContext } from 'react';

const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
  const Auth = useState(false);
  return <AuthContext.Provider value={Auth}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
export default AuthContextProvider;
