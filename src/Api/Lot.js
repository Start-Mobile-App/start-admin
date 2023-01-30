import { apiGet } from './standardApi';

export async function apiGetListLot (page, search, sort = '', asc = true) {
  const apiSort = sort ? sort : '';
  const apiAsc = asc === true ? '1' : '-1';
  const data = await apiGet(
    `lot/getListlot?perPage=12&page=${page}&searchWord=${search}&sort=${apiSort}&asc=${apiAsc}`
  );
  return data;
}
