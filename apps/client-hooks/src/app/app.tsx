import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';

// pages
import Home from './home/home.view';
import Login from './auth/login.view';
const Register = lazy(() => import('./auth/register.view'));

const FallbackLoader = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      justifyItems="center"
      width={'100%'}
      py={8}
    >
      <CircularProgress />
    </Box>
  );
};

export const App = () => {
  return (
    <Container component="main">
      <Suspense fallback={<FallbackLoader />}>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
};

export default App;
