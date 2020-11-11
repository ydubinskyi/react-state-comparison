import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { useAuth } from './hooks/use-auth';
import AuthFormCard from './components/auth-form-card';

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = () => {
  const classes = useStyles();

  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    login({ identifier: username, password });
  };

  return (
    <AuthFormCard>
      <Typography component="h1" variant="h5">
        Login
      </Typography>
      <form noValidate onSubmit={handleSubmit}>
        <div>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            autoFocus
            id="username"
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Login
          </Button>
        </div>
      </form>
    </AuthFormCard>
  );
};

export default Login;
