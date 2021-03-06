import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../use-auth.hook';

function PublicOnlyRoute({ children, ...rest }) {
  const { isAuthenticated } = useAuth();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        !isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export { PublicOnlyRoute };
