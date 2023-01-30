import { apiGet, apiDelete } from './standardApi';

export async function apiGetListUser (page, search, sort = '', asc = true) {
  const apiSort = sort ? sort : '';
  const apiAsc = asc === true ? '1' : '-1';
  const data = await apiGet(
    `user/getUserList?perPage=12&page=${page}&searchWord=${search}&sort=${apiSort}&asc=${apiAsc}`
  );
  return data;
}

export async function apiDeleteListUser (body) {
  const data = await apiDelete('user/deleteUsers', body);
  return data;
}
