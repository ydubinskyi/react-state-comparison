import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';

import { PublicOnlyRoute } from '@react-state-comparison/auth';

// pages
import Home from './home/home.view';
import Login from './auth/login.view';
import Header from './core/components/header';
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
    <>
      <CssBaseline />
      <Header />
      <Container component="main">
        <Suspense fallback={<FallbackLoader />}>
          <Switch>
            <PublicOnlyRoute path="/login">
              <Login />
            </PublicOnlyRoute>
            <PublicOnlyRoute path="/register">
              <Register />
            </PublicOnlyRoute>

            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Suspense>
      </Container>
    </>
  );
};

export default App;
