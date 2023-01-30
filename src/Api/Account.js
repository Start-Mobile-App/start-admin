import { apiGet, apiPost, apiDelete } from './standardApi';

export async function apiGetAccount () {
  const data = await apiGet(`user/getProfilByUserId`);
  return data;
}

export async function apiModifyAccount (body) {
  const data = await apiPost('user/modifyAccount', body);
  return data;
}

export async function apiGetAllAdministrator () {
  const data = await apiGet(`user/getAllAdministrator`);
  return data;
}
export async function apiAddAdmin (body) {
  const data = await apiPost('auth/addAdmin', body);
  return data;
}
export async function apiModifyCompany (body) {
  const data = await apiPost('company', body);
  return data;
}
export async function apiDeleteAdmin (id) {
  const data = await apiDelete('user/deleteAdmin/' + id);
  return data;
}
export async function apiGetCompany () {
  const data = await apiGet(`company`);
  return data;
}
