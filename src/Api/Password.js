import { apiURL } from '../Config/Config';

export async function apiChangePassword (
  oldPassword,
  password,
  confirmPassword,
  params
) {
  const response = await fetch(apiURL + 'auth/changePasswordFirstConnexion', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json, text/plain, */*'
    },
    body: JSON.stringify({
      oldPassword: oldPassword,
      password: password,
      confirmPassword: confirmPassword,
      token: params
    })
  });
  return response;
}
export async function apiSendEmailResetPassword (email) {
  const response = await fetch(apiURL + 'password/sendEmailReset', {
    method: 'post',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email: email })
  });
  return response;
}
export async function apiResetPassword (params, newPassword) {
  const response = await fetch(apiURL + 'password/resetPassword', {
    method: 'post',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ link: params, password: newPassword })
  });
  return response;
}
