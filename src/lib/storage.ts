import { config } from '@/config';
import { setAuthorization } from './axios';

export function isAuthenticated() {
  try {
    return Boolean(getToken());
  } catch (error) {
    return false;
  }
}

export function setLocalStorage(token_name: string, token: string | object) {
  token_name && localStorage.setItem(token_name, JSON.stringify(token));
}

export function getToken() {
  const tokenName = config.token_name;

  const token = tokenName ? localStorage.getItem(tokenName) : null;
  if (token) {
    setAuthorization(JSON.parse(token));
  }
  return token;
}

export function deleteToken() {
  const tokenName = config.token_name;
  if (tokenName && localStorage.getItem(tokenName)) {
    localStorage.removeItem(tokenName);
  }
}
