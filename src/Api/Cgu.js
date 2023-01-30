import { apiGet, apiPost, apiPostUpload } from './standardApi';
export async function apiUpdateCgv (body) {
  const data = await apiPost('cgv', body);
  return data;
}
export async function apiGetCgv () {
  const data = await apiGet('cgv');
  return data;
}
export async function apiUpload (body) {
  const data = await apiPostUpload('upload', body);
  return data;
}
