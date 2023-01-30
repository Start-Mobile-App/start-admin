import { apiGet, apiPost, apiPostUpload } from './standardApi';
export async function apiUpdateConfidentiality (body) {
  const data = await apiPost('confidentiality', body);
  return data;
}
export async function apiGetConfidentiality () {
  const data = await apiGet('confidentiality');
  return data;
}
export async function apiUpload (body) {
  const data = await apiPostUpload('upload', body);
  return data;
}
