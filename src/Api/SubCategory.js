import { apiGet, apiPost, apiDelete } from './standardApi';

export async function apiGetListSubCategory (_id) {
  const data = await apiGet(`sub-category/getsubcategorybycategory/${_id}`);
  return data;
}
export async function apiAddSubCategory (body) {
  const data = await apiPost(`sub-category/createSubCategory`, body);
  return data;
}
export async function apiDeleteSubCategory (_id) {
  const data = await apiDelete(`sub-category/deletesubcategory/${_id}`);
  return data;
}
export async function apiGetSubCategoryById (_id) {
  const data = await apiGet('lot/getSubCategoryAndCategoryById/' + _id);
  return data;
}
export async function apiModifySubCategory (body) {
  const data = await apiPost('sub-category/modifysubCategory', body);
  return data;
}
export async function apiDeleteListSubcategory (body) {
  const data = await apiDelete('sub-category/removeSubCategory', body);
  return data;
}
