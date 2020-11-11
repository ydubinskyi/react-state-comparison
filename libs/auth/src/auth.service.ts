import { client } from './api-client.service';

import { AuthResponse } from './types';
import { LoginDetails } from './types/login-details.interface';
import { RegisterDetails } from './types/register-details.interface';

const localStorageKey = '__auth__';

function getAuthDetails(): AuthResponse {
  const details = window.localStorage.getItem(localStorageKey);

  return details ? JSON.parse(details) : null;
}

function handleAuthResponse(userDetails: AuthResponse) {
  window.localStorage.setItem(localStorageKey, JSON.stringify(userDetails));
  return userDetails;
}

async function login(data: LoginDetails): Promise<AuthResponse> {
  return client('auth/local', { data }).then(handleAuthResponse);
}

async function register(data: RegisterDetails): Promise<AuthResponse> {
  return client('auth/local/register', { data }).then(handleAuthResponse);
}

async function logout(): Promise<void> {
  window.localStorage.removeItem(localStorageKey);
}

export { login, register, logout, getAuthDetails };
