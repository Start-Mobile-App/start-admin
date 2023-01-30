import { apiDelete, apiGet, apiPost } from './standardApi';

export async function apiGetListGroup (search, page, sort = '', asc = true) {
  const apiSort = sort ? sort : '';
  const apiAsc = asc === true ? '1' : '-1';
  const data = await apiGet(
    `contact/getContactList?page=${page}&perPage=12&searchWord=${search}&sort=${apiSort}&asc=${apiAsc}`
  );
  return data;
}

export async function apiGetListSousGroup (idGroup) {
  const data = await apiGet(`sub-group/getSubGroupByGroup/${idGroup}`);
  return data;
}

export async function apiGetListGroupForSubGroup () {
  const data = await apiGet(`group/allGroup`);
  return data;
}

export async function apiAddGroup (groupName, listSousGroup) {
  const body = {
    name: groupName,
    subGroups: listSousGroup[0] ? listSousGroup : []
  };
  const data = await apiPost('group/createGroup', JSON.stringify(body));
  return data;
}

export async function apiAddSubGroup (groupId, listSousGroup) {
  const body = {
    group: groupId,
    subGroups: listSousGroup
  };
  const data = await apiPost('sub-group/createSubGroup', JSON.stringify(body));
  return data;
}

export async function apiDeleteSubGroup (listSubGroup) {
  const body = {
    ids: listSubGroup
  };
  const data = await apiDelete(
    'sub-group/deleteSubGroup',
    JSON.stringify(body)
  );
  return data;
}

export async function apiEditGroup (groupId, groupName, listSousGroup) {
  const body = {
    groupId: groupId,
    groupName: groupName,
    subGroups: listSousGroup
  };
  const data = await apiPost('group/modifyGroup', JSON.stringify(body));
  return data;
}
