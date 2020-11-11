import React from 'react';
import { Link } from 'react-router-dom';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { useAuth } from '@react-state-comparison/auth';

const useStyles = makeStyles(() =>
  createStyles({
    title: {
      flexGrow: 1,
    },
  })
);

const Header = () => {
  const classes = useStyles();
  const { isAuthenticated, logout } = useAuth();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Movies app
        </Typography>

        <Button color="inherit" component={Link} to="/">
          Home
        </Button>

        {isAuthenticated ? (
          <>
            <Button color="inherit" component={Link} to="/account">
              My account
            </Button>
            <Button color="inherit" onClick={logout}>
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
            <Button color="inherit" component={Link} to="/register">
              Register
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
