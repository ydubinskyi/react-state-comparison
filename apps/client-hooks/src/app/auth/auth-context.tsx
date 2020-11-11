import React, { useState } from 'react';

import * as authService from './auth.service';
import {
  AuthContextValue,
  AuthResponse,
  LoginDetails,
  RegisterDetails,
} from './types';

const AuthContext = React.createContext<AuthContextValue>({
  user: null,
  token: null,
  isAuthenticated: false,
});
AuthContext.displayName = 'AuthContext';

const AuthContextProvider = (props) => {
  const [authDetails, setAuthDetails] = useState<AuthResponse>(() =>
    authService.getAuthDetails()
  );

  const login = React.useCallback(
    (form: LoginDetails) =>
      authService.login(form).then((details) => setAuthDetails(details)),
    [setAuthDetails]
  );
  const register = React.useCallback(
    (form: RegisterDetails) =>
      authService.register(form).then((details) => setAuthDetails(details)),
    [setAuthDetails]
  );
  const logout = React.useCallback(() => {
    authService.logout();
    setAuthDetails(null);
  }, [setAuthDetails]);

  const value = React.useMemo<AuthContextValue>(
    () => ({
      user: authDetails?.user,
      token: authDetails?.jwt,
      login,
      logout,
      register,
      isAuthenticated: !!authDetails?.jwt,
    }),
    [login, logout, register, authDetails]
  );

  return <AuthContext.Provider value={value} {...props} />;
};

export { AuthContext, AuthContextProvider };
