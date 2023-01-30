import React, { useEffect, useState, useRef } from 'react';
import { GroupTemplate } from '../../Templates';
import { Input } from '../../Atoms';
import {
  apiAddGroup,
  apiGetListGroup,
  apiGetListSousGroup,
  apiAddSubGroup,
  apiGetListGroupForSubGroup,
  apiDeleteSubGroup,
  apiEditGroup
} from '../../Api/Group';

export default function Group (props) {
  const [ligneSelected, setLigneSelected] = useState(null);
  const [checkAllElement, setCheckAllElement] = useState(false);
  const [sort, setSort] = useState({ field: 'group', asc: true });
  const [listColumns, setListColumn] = useState([]);
  const [data, setData] = useState([]);
  const [listElementChecked, setListElementChecked] = useState([]);
  const [listData, setListData] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [show, setShow] = useState(false);
  const [isGroup, setIsGroup] = useState(false);
  const [groupName, onChangeGroupName] = useState('');
  const [listSousGroup, setListSousGroup] = useState([
    { name: '', validate: false, error: null }
  ]);
  const [lListGroup, setListGroup] = useState([]);
  const [groupSelected, onChangeValueSelectGroup] = useState('');
  const [showModalDeleteValidate, setShowModalDeleteValidate] = useState(false);
  const [idDeleteSubGroup, setIdDeleteSubGroup] = useState('');
  const [activeBtn, setActiveBtn] = useState(false);
  const [dataExport, setDataExport] = useState([]);
  const [isExport, setIsExport] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const headersExport = [
    {
      id: 'groupe',
      displayName: 'GROUPE'
    },
    {
      id: 'sous_groupe',
      displayName: 'SOUS-GROUPE'
    },
    {
      id: 'nbContacts',
      displayName: 'NB CONTACTS'
    },
    {
      id: 'nbLots',
      displayName: 'NB LOTS'
    },
    {
      id: 'nbDocuments',
      displayName: 'NB DOCUMENTS'
    },
    {
      id: 'totalEstimation',
      displayName: 'TOTAL ESTIMATION'
    }
  ];

  const [indexDelete, setIndexDelete] = useState('');
  const [dataDetails, setDataDetails] = useState([]);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [titleGroup, setTitleGroup] = useState('');
  const [isModify, setIsModify] = useState(false);
  const [editGroupName, setEditGroupName] = useState(false);
  const [groupId, setGroupId] = useState('');
  const [dataDelete, setDataDelete] = useState([]);
  const [buttonDelete, setButtonDelete] = useState(false);
  const [showModalInfo, setShowModalInfo] = useState(false);
  const [responseInfo, setResponseInfo] = useState(false);
  const [validateName, setValidateName] = useState({
    validate: false,
    error: null
  });
  function SelectLigne (value) {
    const element = data.filter(el => el.subGroupId === value)[0];
    const detail = [
      { name: 'Nom du groupe : ', value: element.group },
      { name: 'Nom du sous-groupe : ', value: element.subGroup },
      { name: 'Nb contacts :', value: element.contact },
      { name: 'Nb lots : ', value: element.lot },
      { name: 'Nb documents : ', value: element.document },
      { name: 'Total estimation : ', value: element.totalEstimate }
    ];
    setLigneSelected(value);
    setDataDetails(detail);
    setShowDetailModal(true);
    setTitleGroup(element.group);
  }
  async function modify () {
    const element = data.filter(el => el.subGroupId === ligneSelected)[0];
    setIsModify(true);
    setShowDetailModal(false);
    onChangeGroupName(element.group);
    setGroupId(element.groupId);
    const lListSubGroup = await getListSubGroupApi(element.groupId);
    setListSousGroup(lListSubGroup);
    setShow(true);
    setEditGroupName(true);
  }
  function enterEditGroupName (e) {
    if (e.key === 'Enter') {
      setEditGroupName(false);
    }
  }
  function addGroupNamebtn () {
    setEditGroupName(false);
  }

  async function validerModifyGroup () {
    let verif = true;
    if (validateSpace(groupName) === false) {
      setValidateName({
        validate: false,
        error: '* Validez ce champ'
      });
      verif = false;
    } else if (editGroupName === false) {
      setValidateName({
        validate: false,
        error: '* Validez ce champ'
      });
      verif = false;
    } else if (groupName === '' || groupName === null) {
      setValidateName({
        validate: false,
        error: '* Groupe requis'
      });
      verif = false;
    }
    const list = [...listSousGroup];
    list.map((element, index) => {
      if (element.id && element.name === '') {
        element.validate = false;
        element.error = '* Sous-groupe requis';
      }
      if (
        element.validate === false &&
        element.name !== '' &&
        element.name !== null
      ) {
        verif = false;
        element.error = '* Validez ce champ';
      } else if (element.name !== '' && element.name !== null) {
        const result = validateNameSubGroup(element.name);
        if (result.validate === false) {
          verif = false;
          element.error = result.error;
          element.validate = false;
        }
      }
    });
    if (list.length === 0 || (list.length === 1 && list[0].name === '')) {
      if (!list[0].id) {
        setValidateName({ validate: false, error: '* Ajoutez sous-groupe' });
      } else {
        list[0].error = '* Sous-groupe requis';
      }
      verif = false;
    }
    if (verif === false) {
      setListSousGroup(list);
    } else {
      const listName = listSousGroup.map(el => {
        if (el.name != '') {
          if (el.id) {
            return { id: el.id, name: el.name };
          }
          return { name: el.name };
        } else {
          return null;
        }
      });
      if (listName[listName.length - 1] === null) {
        listName.splice(listName.length - 1, 1);
      }
      const response = await apiEditGroup(groupId, groupName, listName);
      if (response !== null) {
        if (response.statusCode === 200) {
          setShow(false);
          setShowModalInfo(true);
          setResponseInfo(true);
          setShow(false);
          getListGroup();
          onChangeGroupName('');
          setListSousGroup([{ name: '', validate: false, error: null }]);
          setGroupId('');
          setResponseInfo(true);
          setShowModalInfo(true);
        } else {
          if (response.statusCode === 400) {
            const listSubGroup = [...listSousGroup];
            if (response.error === 'group required') {
              setValidateName({ validate: false, error: '* Groupe requis' });
            }
            if (response.error === 'sub group exist') {
              listSubGroup[response.position].validate = false;
              listSubGroup[response.position].error = '* Sous-groupe existe';
            }
            if (response.error === 'group with the same name exists') {
              setValidateName({
                validate: false,
                error: '* Nom de groupe existe'
              });
            }
            setListSousGroup(listSubGroup);
          }
        }
      }
    }
  }
  function closeModalInfo () {
    setShowModalInfo(false);
    setIsModify(false);
    setIsExport(false);
    setValidateName({ validate: false, error: null });
  }
  function handleCloseModify () {
    setIsModify(false);
    onChangeGroupName('');
    setListSousGroup([{ name: '', validate: false, error: null }]);
    setGroupId('');
    setShow(false);
    setEditGroupName(false);
    setValidateName({ validate: false, error: null });
  }
  function defineListColumn () {
    setListColumn([
      {
        type: 'action',
        element: (
          <td className='table-col-checkbox'>
            <Input
              id='check'
              as='checkbox'
              type='checkbox'
              onClick={() => selectAllElement()}
              checked={checkAllElement}
            />
          </td>
        ),
        index: 'select'
      },
      {
        column: 'GROUPE',
        className: 'ColHeaderGroup',
        onClick: () => {
          onChangeSort('group');
        },
        icon: 'SortTop',
        size: '12px',
        classNameIcon:
          sort.field === 'group' && sort.asc === false
            ? 'icon-sort-bottom'
            : 'icon-sort-top',
        index: 'group'
      },
      {
        column: 'SOUS-GROUPE',
        className: 'ColHeaderGroup',
        icon: 'SortTop',
        size: '12px',
        classNameIcon:
          sort.field === 'subGroup' && sort.asc === false
            ? 'icon-sort-bottom'
            : 'icon-sort-top',
        onClick: () => {
          onChangeSort('subGroup');
        },
        index: 'subGroup'
      },
      {
        column: 'NB CONTACTS',
        className: 'ColHeaderGroup',
        index: 'contact'
      },
      {
        column: 'NB LOTS',
        className: 'ColHeaderGroup',
        index: 'lot'
      },
      {
        column: 'NB DOCUMENTS',
        className: 'ColHeaderGroup',
        index: 'nbDocuments'
      },
      {
        column: 'TOTAL ESTIMATION',
        className: 'ColHeaderGroup',
        index: 'totalEstimate'
      }
    ]);
  }
  function defineData (data) {
    if (data.length != 0) {
      const lListElementChecked =
        listElementChecked.length == 0 ||
        listElementChecked.length != data.length
          ? data.map(el => {
              return false;
            })
          : listElementChecked;
      setListElementChecked(lListElementChecked);
      const lListData = [];
      data.map((element, index) => {
        lListData.push({
          ...element,
          _id: element.subGroupId,
          select: (
            <td className='table-col-checkbox'>
              <Input
                id={'Group_' + element.subGroupId}
                as='checkbox'
                type='checkbox'
                checked={lListElementChecked[index]}
                onClick={() => selectElement(index)}
              />
            </td>
          )
        });
      });
      setData(lListData);
    }
  }
  async function getListGroup () {
    const response = await apiGetListGroup(search, page, sort.field, sort.asc);
    defineListColumn();
    if (response !== null) {
      if (response.statusCode === 200) {
        setListData(response.contact);
        setListElementChecked([]);
        defineData(response.contact);
        setNumberOfPages(Math.ceil(response.totalNbre / 12).toString());
      }
    }
  }
  async function onShearch (e) {
    if (e.key === 'Enter') {
      await setPage(1);
      await getListGroup();
    }
  }
  function selectAllElement () {
    setCheckAllElement(!checkAllElement);
    const list = [...listElementChecked];
    listElementChecked.map((element, index) => {
      list[index] = checkAllElement == true ? false : true;
    });
    setListElementChecked(list);
  }
  function selectElement (position) {
    const list = [...listElementChecked];
    list[position] = !list[position];
    setListElementChecked(list);
    const verif = list.indexOf(false);
    if (verif != -1) setCheckAllElement(false);
  }
  function onChangePagination (page) {
    setListElementChecked([]);
    setPage(page);
  }
  const handleCloseGroup = () => {
    setShow(false);
  };
  const handleShowGroup = () => {
    setIsGroup(true);
    setShow(true);
  };

  const handleCloseSousGroup = () => {
    setShow(false);
  };
  const handleShowSousGroup = async () => {
    if (isGroup === true) {
      setListSousGroup([{ name: '', validate: false, error: null }]);
    }
    setIsGroup(false);
    setShow(true);
    const response = await apiGetListGroupForSubGroup();
    response && setListGroup(response.data.sort(compare));
  };
  function compare (a, b) {
    const elementA = a.name.toUpperCase();
    const elementB = b.name.toUpperCase();

    let comparison = 0;
    if (elementA > elementB) {
      comparison = 1;
    } else if (elementA < elementB) {
      comparison = -1;
    }
    return comparison;
  }
  function closeIconButton () {
    onChangeGroupName('');
    setListSousGroup([{ name: '', validate: false, error: null }]);
    setShow(false);
    setIsGroup(false);
    setEditGroupName(false);
    setValidateName({ validate: false, error: null });
  }
  function CloseIconButtonSubGroup () {
    onChangeValueSelectGroup('');
    setListSousGroup([{ name: '', validate: false, error: null }]);
    setShow(false);
    setIsGroup(false);
    setEditGroupName(false);
  }
  useEffect(() => {
    if (editGroupName === true) {
      setValidateName({
        validate: true,
        error: null
      });
    }
  }, [editGroupName]);
  async function validerGroup () {
    let verif = true;
    if (groupName === '' || groupName === null) {
      setValidateName({
        validate: false,
        error: '* Groupe requis'
      });
      verif = false;
    } else if (validateSpace(groupName) === false || editGroupName === false) {
      setValidateName({
        validate: false,
        error: '* Validez ce champ'
      });
      verif = false;
    }
    const list = [...listSousGroup];
    list.map(element => {
      if (
        element.validate === false &&
        element.name !== '' &&
        element.name !== null
      ) {
        verif = false;
        element.error = '* Validez ce champ';
      } else if (element.name !== '' && element.name !== null) {
        const result = validateNameSubGroup(element.name);
        if (result.validate === false) {
          verif = false;
          element.error = result.error;
          element.validate = false;
        }
      }
    });
    if (verif === false) {
      setListSousGroup(list);
    } else {
      const listName = listSousGroup.map(el => {
        if (el.name != '') {
          return { name: el.name };
        }
      });
      if (listName[listName.length - 1] === null) {
        listName.splice(listName.length - 1, 1);
      }
      const response = await apiAddGroup(groupName, listName);
      if (response.statusCode === 200) {
        closeIconButton();
        setValidateName({
          validate: false,
          error: null
        });
        getListGroup();
      }
      if (response.statusCode === 400) {
        if (response.error === 'group with the same name exists') {
          setValidateName({ validate: false, error: '* Groupe existant' });
        }
        if (response.error === 'sub group exist') {
          const listError = [...listSousGroup];
          listError[response.position].error = '* Sous groupe existe';
          listError[response.position].validate = false;
          setListSousGroup(listError);
        }
      }
    }
  }

  function addSousGroup () {
    let verif = true;
    const list = [...listSousGroup];
    listSousGroup.map(element => {
      if (element.validate === false) {
        element.error = '* Valider ce champ';
        verif = false;
      }
    });
    if (verif === true) {
      list.push({ name: '', validate: false, error: null });
    }
    setListSousGroup(list);
  }

  function addSubGroup (index) {
    const list = [...listSousGroup];
    const element = listSousGroup[index];
    if (element.name != '' && element.name != null) {
      element.validate = true;
      element.error = null;
    } else {
      element.validate = false;
      element.error = '* Validez ce champ';
    }
    list[index] = element;
    setListSousGroup([...list]);
  }
  function enterAddSousGroup (e, index) {
    if (e.key === 'Enter') {
      addSubGroup(index);
    }
  }
  function addSousGroupbtn (index) {
    addSubGroup(index);
  }
  function deleteSousGroup (index) {
    const list = listSousGroup;
    list.splice(index, 1);
    setListSousGroup([...list]);
  }
  function editSousGroup (index, element) {
    const list = [...listSousGroup];
    list[index].validate = false;
    list[index].error = null;
    setListSousGroup(list);
  }
  async function getListSousGroup (groupSelected) {
    setValidateName({ validate: false, error: null });
    if (groupSelected != '') {
      const lListSousGroup = await getListSubGroupApi(groupSelected);
      lListSousGroup.push({
        name: '',
        validate: false,
        error: null
      });
      setListSousGroup(lListSousGroup);
    }
  }
  async function getListSubGroupApi (idGroup) {
    const response = await apiGetListSousGroup(idGroup);
    const lListSousGroup = [];
    response &&
      response.data &&
      response.data.map(el =>
        lListSousGroup.push({
          name: el.name,
          id: el._id,
          validate: true,
          error: null
        })
      );
    return lListSousGroup;
  }
  async function validerSubGroup () {
    let verif = true;
    if (groupSelected === '') {
      setValidateName({
        validate: false,
        error: '* Groupe requis'
      });
      verif = false;
    }
    const list = [...listSousGroup];
    list.map((element, index) => {
      if (
        element.validate === false &&
        element.name !== '' &&
        element.name !== null
      ) {
        verif = false;
        element.error = '* Validez ce champ';
      } else if (element.name !== '' && element.name !== null) {
        const result = validateNameSubGroup(element.name);
        if (result.validate === false) {
          verif = false;
          element.error = result.error;
          element.validate = false;
        }
      }
    });
    if (list.length === 0 || (list.length === 1 && list[0].name === '')) {
      setValidateName({ validate: false, error: '* Ajouter un sous-groupe' });
    }
    if (verif === false) {
      setListSousGroup(list);
    } else {
      const listName = listSousGroup.map(el => {
        if (el.name != '') {
          if (el.id) {
            return { id: el.id, name: el.name };
          }
          return { name: el.name };
        } else {
          return null;
        }
      });
      if (listName[listName.length - 1] === null) {
        listName.splice(listName.length - 1, 1);
      }
      const response = await apiAddSubGroup(groupSelected, listName);
      if (response !== null) {
        if (response.statusCode === 200) {
          closeIconButton();
          onChangeValueSelectGroup('');
          getListGroup();
        } else {
          if (response.statusCode === 400) {
            const listSubGroup = [...listSousGroup];
            if (response.error === 'group required') {
              setValidateName({ validate: false, error: '* Groupe requis' });
            }
            if (response.error === 'sub group exist') {
              listSubGroup[response.position].validate = false;
              listSubGroup[response.position].error = '* Sous-groupe existe';
            }
            if (response.error === 'sub group  exist with same name of group') {
              listSubGroup[response.position].validate = false;
              listSubGroup[response.position].error =
                '* Nom sous-groupe existe';
            }
            setListSousGroup(listSubGroup);
          }
        }
      }
    }
  }
  useEffect(() => {
    if (listElementChecked.length !== 0) {
      defineData(listData);
      changeData();
    } else {
      setData([]);
      setActiveBtn(false);
      setCheckAllElement(false);
    }
    defineListColumn();
  }, [listElementChecked]);
  useEffect(() => {
    getListGroup();
  }, [page]);
  useEffect(() => {
    getListGroup();
  }, []);
  useEffect(() => {
    getListSousGroup(groupSelected);
    setValidateName({ validate: true, error: null });
  }, [groupSelected]);
  useEffect(() => {
    setListSousGroup([{ name: '', validate: false, error: null }]);
    onChangeGroupName('');
    onChangeValueSelectGroup('');
  }, [isGroup]);
  function changeData () {
    const list = [];
    const lDataDelete = [];
    if (listElementChecked.indexOf(true) != -1) {
      setActiveBtn(true);
    } else {
      setActiveBtn(false);
    }
    listElementChecked.map((el, i) => {
      if (el === true && data[i] && data[i].subGroupId) {
        lDataDelete.push(data[i].subGroupId);
        list.push({
          groupe: data[i].group,
          sous_groupe: data[i].subGroup,
          nbContacts: data[i].contact,
          nbLots: data[i].lot,
          nbDocument: data[i].document,
          totalEstimation: data[i].totalEstimate
        });
      }
    });
    setDataExport(list);
    setDataDelete(lDataDelete);
  }
  function onChangeSousGoupWithIndex (value, index) {
    const list = [...listSousGroup];
    list[index].name = value;
    setListSousGroup(list);
  }
  function deleteSousGroupInNewSubGoup (element, index) {
    setShow(false);
    setShowModalDeleteValidate(true);
    setIdDeleteSubGroup(element.id);
    setIndexDelete(index);
    setButtonDelete(false);
  }
  function deleteListSubGroup () {
    changeData();
    setShowModalDeleteValidate(true);
    setButtonDelete(true);
  }
  function showModalInfoExport () {
    changeData();
    setShowLoading(true);
    setIsExport(true);
    setShowModalInfo(true);
    const showModal = setTimeout(() => {
      setShowLoading(false);
    }, 1000);
    setResponseInfo(true);
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
    getListGroup();
  }, [sort]);
  function submit () {
    if (isModify) {
      validerModifyGroup();
    } else {
      if (isGroup) {
        validerGroup();
      } else {
        validerSubGroup();
      }
    }
  }
  function validateSpace (value) {
    if (!value.replace(/\s/g, '').length) {
      return false;
    }
    return true;
  }
  function validateNameSubGroup (value) {
    if (value != '' && value != null && validateSpace(value) === true) {
      return { validate: true, error: null };
    } else {
      return { validate: false, error: '* Validez ce champ' };
    }
  }
  useEffect(() => {
    setValidateName({
      validate: false,
      error: null
    });
  }, [groupName]);
  function onCloseModal () {
    if (isModify) {
      handleCloseModify();
    } else if (props.isGroup) {
      closeIconButton();
    } else {
      CloseIconButtonSubGroup();
    }
  }
  function handleClose () {
    if (isModify) {
      handleCloseModify();
    } else if (isGroup) {
      handleCloseGroup();
    } else {
      handleCloseSousGroup();
    }
  }
  function onDelete (index) {
    const element = listSousGroup[index];
    if (!element.id) {
      const list = deleteFromList([...listSousGroup], index, 1);
      setListSousGroup(list);
    } else {
      deleteSousGroupInNewSubGoup(listSousGroup[index], index);
    }
  }
  function deleteFromList (list, index, nbr) {
    list.splice(index, nbr);
    return list;
  }
  async function deleteSousGroupApi (table) {
    const response = await apiDeleteSubGroup(
      table === true ? dataDelete : [idDeleteSubGroup]
    );
    if (response.statusCode === 200) {
      setShowModalDeleteValidate(false);
      if (table === true) {
        setActiveBtn(false);
        setListElementChecked([]);
        setShowModalInfo(true);
        setResponseInfo(true);
      } else {
        setShow(true);
        const list = deleteFromList([...listSousGroup], indexDelete, 1);
        setListSousGroup(list);
      }
      getListGroup();
    }
  }
  useEffect(() => {
    if (
      showModalDeleteValidate === false &&
      activeBtn == false &&
      (groupName !== '' || groupSelected !== '')
    ) {
      setShow(true);
    }
  }, [showModalDeleteValidate]);
  return (
    <div>
      <GroupTemplate
        listColumns={listColumns}
        data={data}
        ligneSelected={ligneSelected}
        selectElement={SelectLigne}
        columnSort={sort.field}
        numberOfPages={numberOfPages}
        page={page}
        getListGroup={getListGroup}
        onChangePagination={onChangePagination}
        onShearch={onShearch}
        setSearch={setSearch}
        show={show}
        handleShowGroup={handleShowGroup}
        handleShowSousGroup={handleShowSousGroup}
        isGroup={isGroup}
        onChangeGroupName={onChangeGroupName}
        listSousGroup={listSousGroup}
        addSousGroup={addSousGroup}
        enterAddSousGroup={enterAddSousGroup}
        groupName={groupName}
        editSousGroup={editSousGroup}
        addSousGroupbtn={addSousGroupbtn}
        listGroup={lListGroup}
        changeValueSelectGroup={onChangeValueSelectGroup}
        groupSelected={groupSelected}
        dataExport={dataExport}
        headersExport={headersExport}
        activeBtn={activeBtn}
        onChangeSousGoupWithIndex={onChangeSousGoupWithIndex}
        showModalDeleteValidate={showModalDeleteValidate}
        setShowModalDeleteValidate={setShowModalDeleteValidate}
        deleteSousGroupApi={deleteSousGroupApi}
        dataDetails={dataDetails}
        showDetailModal={showDetailModal}
        title={titleGroup}
        setShowDetailModal={setShowDetailModal}
        modify={modify}
        isModify={isModify}
        setEditGroupName={setEditGroupName}
        editGroupName={editGroupName}
        enterEditGroupName={enterEditGroupName}
        deleteListSubGroup={deleteListSubGroup}
        buttonDelete={buttonDelete}
        responseInfo={responseInfo}
        showModalInfo={showModalInfo}
        closeModalInfo={closeModalInfo}
        showModalInfoExport={showModalInfoExport}
        isExport={isExport}
        addGroupNamebtn={addGroupNamebtn}
        showLoading={showLoading}
        submit={submit}
        validateName={validateName}
        onCloseModal={onCloseModal}
        handleClose={handleClose}
        onDelete={onDelete}
      />
    </div>
  );
}
