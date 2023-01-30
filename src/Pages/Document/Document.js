import React, { useEffect, useState } from 'react';
import { DocumentTemplate } from '../../Templates';
import { Input } from '../../Atoms';
import { apiGetListDocument } from '../../Api/Document';

export default function User (props) {
  const [search, setSearch] = useState('');
  const [checkAllElement, setCheckAllElement] = useState(false);
  const [sort, setSort] = useState({ field: 'category', asc: true });
  const [listColumns, setListColumn] = useState([]);
  const [data, setData] = useState([]);
  const [listElementChecked, setListElementChecked] = useState([]);
  const [listData, setListData] = useState([]);
  const [page, setpage] = useState(1);
  const [numberOfPage, setNumberOfPage] = useState(1);
  const [activeBtn, setActiveBtn] = useState(false);
  const [dataExport, setDataExport] = useState([]);
  const [showLoading, setShowLoading] = useState(false);
  const [showModalInfo, setShowModalInfo] = useState(false);
  const [isExport, setIsExport] = useState(false);
  const [ligneSelected, setLigneSelected] = useState(null);
  const [dataDetails, setDataDetails] = useState([]);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [titleCategory, setTitleCategory] = useState('');
  const headersExport = [
    {
      id: 'category',
      displayName: 'CATÉGORIE'
    },
    {
      id: 'subCategory',
      displayName: 'SOUS-CATÉGORIE'
    },
    {
      id: 'nbContact',
      displayName: 'NB CONTACTS'
    },
    {
      id: 'nbLot',
      displayName: 'NB LOTS'
    },
    {
      id: 'nbDocument',
      displayName: 'NB DOCUMENTS'
    },
    {
      id: 'totalEstimate',
      displayName: 'TOTAL ESTIMATION'
    }
  ];
  function defineListColumn () {
    setListColumn([
      {
        type: 'action',
        element: (
          <td className='table-col-checkbox'>
            <Input
              id={'lot_0'}
              as='checkbox'
              onClick={() => selectAllElement()}
              checked={data.length === 0 ? false : checkAllElement}
              type='checkbox'
            />
          </td>
        ),
        index: 'select'
      },
      {
        column: 'catégories',
        className: 'table-col-header',
        onClick: () => {
          onChangeSort('category');
        },
        icon: 'SortTop',
        size: '12px',
        classNameIcon:
          sort.field === 'category' && sort.asc === false
            ? 'icon-sort-bottom'
            : 'icon-sort-top',
        index: 'category'
      },
      {
        column: 'sous-catégories',
        className: 'table-col-header',
        icon: 'SortTop',
        size: '12px',
        classNameIcon:
          sort.field === 'subCategory' && sort.asc === false
            ? 'icon-sort-bottom'
            : 'icon-sort-top',
        onClick: () => {
          onChangeSort('subCategory');
        },
        index: 'subCategory'
      },
      {
        column: 'nb contacts',
        className: 'table-document-col-header',
        index: 'nbContact'
      },
      {
        column: 'nb lots',
        className: 'table-document-col-header',
        index: 'nbLot'
      },
      {
        column: 'nb documents',
        className: 'table-document-col-header',
        index: 'nbDocument'
      },
      {
        column: 'total estimation',
        className: 'table-document-col-header',
        index: 'totalEstimate'
      }
    ]);
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
  async function getListDocument () {
    const response = await apiGetListDocument(
      page,
      search,
      sort.field,
      sort.asc
    );
    if (response != null) {
      if (response && response.statusCode === 200) {
        setListData(response.data);
        defineListColumn();
        defineData(response.data);
      }
    }
  }
  function showModalInfoExport () {
    setShowLoading(true);
    setIsExport(true);
    setShowModalInfo(true);
    const showModal = setTimeout(() => {
      setShowLoading(false);
    }, 1000);
  }
  function defineData (data) {
    if (data) {
      const lListElementChecked =
        listElementChecked &&
        (listElementChecked.length == 0 ||
          listElementChecked.length != data.length)
          ? data.map(el => {
              return false;
            })
          : listElementChecked;
      const lListData = [];
      data &&
        data.map((element, index) => {
          lListData.push({
            ...element,
            _id: element.categoryId,
            select: (
              <td className='table-col-checkbox'>
                <Input
                  id={element.category + element.subCategory}
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
      setListElementChecked(lListElementChecked);
    }
  }
  useEffect(() => {
    defineListColumn();
    defineData(listData);
  }, [listElementChecked]);
  useEffect(() => {
    getListDocument();
  }, []);
  useEffect(() => {
    getListDocument();
  }, [page]);

  function changeData () {
    const list = [];
    if (listElementChecked.indexOf(true) != -1) {
      setActiveBtn(true);
    } else {
      setActiveBtn(false);
    }
    listElementChecked.map((el, i) => {
      if (el === true) {
        list.push({
          category: data[i].category,
          subCategory: data[i].subCategory,
          nbContact: data[i].nbContact,
          nbLot: data[i].nbLot,
          nbDocument: data[i].nbDocument,
          totalEstimate: data[i].totalEstimate
        });
      }
    });
    setDataExport(list);
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
    else setCheckAllElement(true);
  }
  async function onShearch (e) {
    if (e.key === 'Enter') {
      await setpage(1);
      await getListDocument();
    }
  }

  function onChangePagination (value) {
    setListElementChecked([]);
    setpage(value);
  }
  useEffect(() => {
    getListDocument();
  }, [sort]);
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

  function closeModalExport () {
    setIsExport(false);
    setShowModalInfo(false);
  }
  function SelectLigne (value) {
    const element = data.filter(el => el.categoryId === value)[0];
    const detail = [
      { name: 'Nom de la catégorie : ', value: element.category },
      { name: 'Nom de la sous-catégorie : ', value: element.subCategory },
      { name: 'Nb contact :', value: element.nbContact },
      { name: 'Nb lots : ', value: element.nbLot },
      { name: 'Nb documents : ', value: element.nbDocument },
      { name: 'Total estimation : ', value: element.totalEstimate }
    ];
    setLigneSelected(value);
    setDataDetails(detail);
    setShowDetailModal(true);
    setTitleCategory(element.subCategory);
  }
  function closeModalInfo () {
    setShowDetailModal(false);
  }
  return (
    <div>
      <DocumentTemplate
        search={search}
        setSearch={setSearch}
        listColumns={listColumns}
        data={data}
        columnSort={sort.field}
        page={page}
        numberOfPage={numberOfPage}
        onChangePagination={onChangePagination}
        getListDocument={getListDocument}
        onShearch={onShearch}
        dataExport={dataExport}
        headersExport={headersExport}
        activeBtn={activeBtn}
        showModalInfoExport={showModalInfoExport}
        showLoading={showLoading}
        isExport={isExport}
        showModalInfo={showModalInfo}
        closeModalExport={closeModalExport}
        selectElement={SelectLigne}
        ligneSelected={ligneSelected}
        dataDetails={dataDetails}
        showDetailModal={showDetailModal}
        closeModalInfo={closeModalInfo}
        title={titleCategory}
      />
    </div>
  );
}
