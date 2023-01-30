import { apiGet, apiPost } from './standardApi';

export async function apiGetListCategory() {
  const data = await apiGet(`category/allCategory`);
  return data;
}
export async function apiGetCategoryById(_id) {
  const data = await apiGet('category/getCategoryById/' + _id)
  return data
}
export async function apiEditCategory(body) {
  const data = await apiPost(`category/modifyCategory`, body);
  return data;
}
