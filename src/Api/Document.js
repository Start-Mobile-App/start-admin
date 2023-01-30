import { apiGet } from './standardApi';

export async function apiGetListDocument (page, search, sort = '', asc = true) {
  const apiSort = sort ? sort : '';
  const apiAsc = asc === true ? '1' : '-1';
  const data = await apiGet(
    `document/getDocumentList?perPage=5&page=${page}&searchWord=${search}&sort=${apiSort}&asc=${apiAsc}`
  );
  return data;
}
