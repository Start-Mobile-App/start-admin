import { apiURL } from '../Config/Config';

export async function apiLogin (email, password) {
  const response = await fetch(apiURL + 'auth/login', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json'
    },
    body: JSON.stringify({
      mail: email,
      password: password
    })
  });
  return response;
}
export async function apiRefreshToken (refreshToken) {
  const response = await fetch(apiURL + 'auth/refresh', {
    method: 'Get',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
      Authorization: 'Bearer ' + refreshToken
    }
  });
  return response.json();
}
