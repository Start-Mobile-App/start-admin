import { apiURL } from '../Config/Config';
import { setToken, setUser } from '../Redux/actions/authActions';
import Store from '../Redux/Store';
import { apiRefreshToken } from './Login';

const createHeader = (token, contentType = 'application/json') => {
  if (contentType === 'form-data') {
    return {
      Authorization: 'Bearer ' + token
    };
  } else {
    return {
      'Content-Type': contentType,
      accept: 'application/json',
      Authorization: 'Bearer ' + token
    };
  }
};
async function processResponse (response, callback) {
  const refreshToken = Store.getState().auth.refreshToken;
  let responseJson;
  try {
    responseJson = await response.json();
  } catch (e) {
    return { statusCode: 500 };
  }
  if (responseJson.statusCode === 401) {
    const res = await apiRefreshToken(refreshToken);
    if (res.statusCode === 200) {
      Store.dispatch(setToken(res));
      return callback();
    } else {
      Store.dispatch(
        setUser({ accessToken: '', refreshToken: '', user: null })
      );
      return null;
    }
  } else if (responseJson.statusCode === 200) {
    return responseJson;
  } else {
    return responseJson;
  }
}

export async function apiGet (api) {
  const token = Store.getState().auth.token;
  const response = await fetch(apiURL + api, {
    method: 'Get',
    headers: createHeader(token)
  });
  const resp = await processResponse(response, () => apiGet(api));
  return resp;
}

export async function apiPost (api, body, contentType = 'application/json') {
  const token = Store.getState().auth.token;
  const response = await fetch(apiURL + api, {
    method: 'POST',
    headers: createHeader(token, contentType),
    body: body
  });
  return processResponse(response, () => apiPost(api, body, contentType));
}

export async function apiDelete (api, body) {
  const token = Store.getState().auth.token;
  const response = await fetch(apiURL + api, {
    method: 'Delete',
    headers: createHeader(token, 'application/json'),
    body: body
  });
  return processResponse(response, () => apiDelete(api, body));
}

export async function apiPut (api, body, contentType = 'application/json') {
  const token = Store.getState().auth.token;
  const response = await fetch(apiURL + api, {
    method: 'Put',
    headers: createHeader(token, contentType),
    body: body
  });
  return processResponse(response, () => apiPost(api, body, contentType));
}

export async function apiPostUpload (api, body, contentType = 'form-data') {
  const token = Store.getState().auth.token;
  const response = await fetch(apiURL + api, {
    method: 'POST',
    headers: createHeader(token, contentType),
    body: body
  });
  return processResponse(response, () => apiPost(api, body, contentType));
}
