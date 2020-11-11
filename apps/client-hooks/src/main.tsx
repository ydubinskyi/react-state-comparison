import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './app/app';
import { AuthContextProvider } from './app/auth/auth-context';

function AppProviders({ children }) {
  return (
    <BrowserRouter>
      <AuthContextProvider>{children}</AuthContextProvider>
    </BrowserRouter>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </React.StrictMode>,
  document.getElementById('root')
);
