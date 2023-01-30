import React, { useEffect, useState } from 'react';
import { UserTemplate } from '../../Templates';
import { Input } from '../../Atoms';
import { apiGetListUser, apiDeleteListUser } from '../../Api/User';

export default function User (props) {
  const [search, setSearch] = useState('');
  const [checkAllElement, setCheckAllElement] = useState(false);
  const [sort, setSort] = useState({ field: 'entreprise.name', asc: true });
  const [listColumns, setListColumn] = useState([]);
  const [data, setData] = useState([]);
  const [listElementChecked, setListElementChecked] = useState([]);
  const [listData, setListData] = useState([]);
  const [page, setpage] = useState(1);
  const [numberOfPage, setNumberOfPage] = useState(1);
  const [activeBtn, setActiveBtn] = useState(false);
  const [dataExport, setDataExport] = useState([]);
  const [showModalValidateDelete, setShowModalValidateDelete] = useState(false);
  const [usersDeleted, setUsersDeleted] = useState(null);
  const [isListDelete, setIsListDelete] = useState(false);
  const [isdelete, setIsDelete] = useState(false);
  const [showModalInfo, setShowModalInfo] = useState(false);

  useEffect(() => {
    if (showModalValidateDelete === false) {
      setIsListDelete(false);
    }
  }, [showModalValidateDelete]);
  function openModalValidateDelete (index) {
    setShowModalValidateDelete(true);
    setUsersDeleted(index);
  }
  function openModalDelete () {
    setShowModalValidateDelete(true);
    setIsListDelete(true);
  }
  const headersExport = [
    {
      id: 'company',
      displayName: 'ENTREPRISE'
    },
    {
      id: 'firstName',
      displayName: 'PRENOM'
    },
    {
      id: 'lastName',
      displayName: 'NOM'
    },
    {
      id: 'role',
      displayName: 'ROLE'
    },
    {
      id: 'created',
      displayName: 'DATE DE CREATION'
    },
    {
      id: 'subcription',
      displayName: 'ABONNEMENT'
    },
    {
      id: 'professionalAddress',
      displayName: 'ADRESSE PRO'
    },
    {
      id: 'tel',
      displayName: 'TELEPHONE PRO'
    },
    {
      id: 'mail',
      displayName: 'EMAIL PRO'
    },
    {
      id: 'professionalMail',
      displayName: "MAIL DE L'ENTREPRISE"
    },
    {
      id: 'professionalTel',
      displayName: "TEL DE L'ENTREPRISE"
    },
    {
      id: 'headOffice',
      displayName: 'SIEGE SOCIAL'
    },
    {
      id: 'siret',
      displayName: 'SIREN/SIRET'
    }
  ];
  function defineListColumn () {
    setListColumn([
      {
        type: 'action',
        element: (
          <td className='table-col-checkbox'>
            <Input
              id='0'
              as='checkbox'
              onClick={() => selectAllElement()}
              checked={checkAllElement}
              type='checkbox'
            />
          </td>
        ),
        index: 'select'
      },
      {
        column: 'Entreprise',
        className: 'table-user-col-header',
        onClick: () => {
          onChangeSort('entreprise.name');
        },
        icon: 'SortTop',
        size: '12px',
        classNameIcon:
          sort.field === 'entreprise.name' && sort.asc === false
            ? 'icon-sort-bottom'
            : 'icon-sort-top',
        index: 'entreprise.name'
      },
      {
        column: 'prénom',
        className: 'table-user-col-header',
        icon: 'SortTop',
        size: '12px',
        classNameIcon:
          sort.field === 'firstName' && sort.asc === false
            ? 'icon-sort-bottom'
            : 'icon-sort-top',
        onClick: () => {
          onChangeSort('firstName');
        },
        index: 'firstName'
      },
      {
        column: 'nom',
        className: 'table-user-col-header',
        icon: 'SortTop',
        size: '12px',
        classNameIcon:
          sort.field === 'lastName' && sort.asc === false
            ? 'icon-sort-bottom'
            : 'icon-sort-top',
        onClick: () => {
          onChangeSort('lastName');
        },
        index: 'lastName'
      },
      {
        column: 'rôle',
        className: 'table-user-col-header',
        icon: 'SortTop',
        size: '12px',
        classNameIcon:
          sort.field === 'role' && sort.asc === false
            ? 'icon-sort-bottom'
            : 'icon-sort-top',
        onClick: () => {
          onChangeSort('role');
        },
        index: 'role'
      },
      {
        column: 'DATE DE CRéATION',
        className: 'table-user-col-header',
        index: 'createdAt',
        type: 'date'
      },
      {
        column: 'Abonnement',
        className: 'table-user-col-header',
        index: 'subcription'
      },
      {
        column: 'adresse pro',
        className: 'table-user-col-header',
        index: 'professionalAddress'
      },
      {
        column: 'téléphone pro',
        className: 'table-user-col-header',
        index: 'tel'
      },
      {
        column: 'email pro',
        className: 'table-user-col-header',
        index: 'mail'
      },
      {
        column: "email de l'entreprise",
        className: 'table-user-col-header',
        index: 'entreprise.mail'
      },
      {
        column: "tel de l'entreprise",
        className: 'table-user-col-header',
        index: 'entreprise.tel'
      },
      {
        column: 'siège social',
        className: 'table-user-col-header',
        index: 'entreprise.headOffice'
      },
      {
        column: 'siren/siret',
        className: 'table-user-col-header',
        index: 'entreprise.siret'
      }
    ]);
  }
  function defineData (data) {
    const lListElementChecked =
      listElementChecked.length == 0 ||
      listElementChecked.length !== data.length
        ? data.map(el => {
            return false;
          })
        : listElementChecked;
    setListElementChecked(lListElementChecked);
    const lListData = [];
    data.map((element, index) => {
      lListData.push({
        ...element,
        select: (
          <td className='table-col-checkbox'>
            <Input
              id={element._id}
              as='checkbox'
              checked={lListElementChecked[index]}
              onClick={() => selectElement(index)}
              type='checkbox'
            />
          </td>
        )
      });
    });
    setData(lListData);
  }
  async function deleteListUser () {
    const list = [];
    listElementChecked.map((el, i) => {
      if (el === true) {
        list.push(data[i]._id);
      }
    });
    const body = JSON.stringify({ userId: list });

    const response = await apiDeleteListUser(body);
    if (response !== null) {
      if (response.statusCode === 200) {
        setShowModalValidateDelete(false);
        setIsDelete(true);
        setShowModalInfo(true);
        getListUser();
      }
    }
  }
  useEffect(() => {
    defineListColumn();
    defineData(listData);
    changeData();
  }, [listElementChecked]);
  useEffect(() => {
    getListUser();
  }, []);
  useEffect(() => {
    getListUser();
  }, [page]);
  async function getListUser () {
    const response = await apiGetListUser(page, search, sort.field, sort.asc);
    if (response !== null) {
      if (response.statusCode === 200 && response.user) {
        defineListColumn();
        setListData(response.user);
        defineData(response.user);
        setNumberOfPage(Math.ceil(response.totalNbre / 12).toString());
      }
    }
  }
  async function onShearch (e) {
    if (e.key === 'Enter') {
      await setpage(1);
      await getListUser();
    }
  }
  function selectAllElement () {
    setCheckAllElement(!checkAllElement);
    const list = [...listElementChecked];
    listElementChecked.map((element, index) => {
      list[index] = checkAllElement == true ? false : true;
    });
    setListElementChecked([...list]);
  }
  function selectElement (position) {
    const list = [...listElementChecked];
    list[position] = !list[position];
    setListElementChecked(list);
    const verif = list.indexOf(false);
    if (verif != -1) setCheckAllElement(false);
    else setCheckAllElement(true);
  }
  function onChangePagination (value) {
    setListElementChecked([]);
    setpage(value);
  }
  function changeData () {
    const list = [];
    if (listElementChecked.indexOf(true) != -1) {
      setActiveBtn(true);
    } else {
      setActiveBtn(false);
    }
    listElementChecked.map((el, i) => {
      if (el === true && data[i]) {
        list.push({
          company: data[i].entreprise.name,
          firstName: data[i].firstName,
          lastName: data[i].lastName,
          role: data[i].role,
          created: data[i].dateToString,
          abonnement: data[i].abonnement,
          professionalAddress: data[i].professionalAddress,
          tel: data[i].tel,
          mail: data[i].mail,
          professionalMail: data[i].entreprise.mail,
          professionalTel: data[i].entreprise.tel,
          headOffice: data[i].entreprise.headOffice,
          siret: new Intl.NumberFormat().format(
            data[i].entreprise.siret.toString()
          )
        });
      }
    });
    setDataExport(list);
  }
  function onChangeSort (value) {
    let obSort = { ...sort };
    if (value === sort.field) {
      obSort = { ...obSort, asc: !obSort.asc };
    } else {
      obSort = { ...obSort, asc: true };
    }
    obSort = { ...obSort, field: value };
    setSort(obSort);
  }
  useEffect(() => {
    getListUser();
  }, [sort]);
  return (
    <div>
      <UserTemplate
        search={search}
        setSearch={setSearch}
        listColumns={listColumns}
        data={data}
        columnSort={sort.field}
        page={page}
        numberOfPage={numberOfPage}
        onChangePagination={onChangePagination}
        getListUser={getListUser}
        onShearch={onShearch}
        dataExport={dataExport}
        headersExport={headersExport}
        activeBtn={activeBtn}
        deleteListUser={deleteListUser}
        showModalValidateDelete={showModalValidateDelete}
        setShowModalValidateDelete={setShowModalValidateDelete}
        openModalValidateDelete={openModalValidateDelete}
        openModalDelete={openModalDelete}
        isdelete={isdelete}
        showModalInfo={showModalInfo}
        setShowModalInfo={setShowModalInfo}
      />
    </div>
  );
}
