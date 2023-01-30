import React, { useEffect, useState } from 'react';
import { LotTemplate } from '../../Templates';
import { Input } from '../../Atoms';
import { apiGetListLot } from '../../Api/Lot';
import { useSelector } from 'react-redux';
import {
  apiGetListCategory,
  apiGetCategoryById,
  apiEditCategory
} from '../../Api/Category';
import {
  apiGetListSubCategory,
  apiAddSubCategory,
  apiDeleteSubCategory,
  apiGetSubCategoryById,
  apiModifySubCategory,
  apiDeleteListSubcategory
} from '../../Api/SubCategory';
import { apiURL } from '../../Config/Config';

export default function Lot (props) {
  const auth = useSelector(state => state.auth);
  const [search, setSearch] = useState('');
  const [checkAllElement, setCheckAllElement] = useState(false);
  const [sort, setSort] = useState({ field: 'category', asc: true });
  const [listColumns, setListColumn] = useState([]);
  const [data, setData] = useState([]);
  const [listElementChecked, setListElementChecked] = useState([]);
  const [listData, setListData] = useState([]);
  const [page, setpage] = useState(1);
  const [numberOfPage, setNumberOfPage] = useState(1);

  const [showModal, setShowModal] = useState(false);
  const [category, setCategory] = useState(null);
  const [listCategory, setListCategory] = useState([]);
  const [listSubCategory, setlistSubCategory] = useState([]);
  const [subCategory, setSubCategory] = useState(null);
  const [showModalCrop, setShowModalCrop] = useState(false);
  const [src, setSrc] = useState(null);
  const [result, setResult] = useState(null);
  const [resultCategory, setResultCategory] = useState(null);
  const [viewEditImage, setViewEditImage] = useState({
    view: false,
    index: null
  });
  const [subCategoryDeleted, setSubCategoryDeleted] = useState(null);
  const [showModalValidateDelete, setShowModalValidateDelete] = useState(false);
  const [validate, setValidation] = useState(false);
  const [listNewSubCategory, setListNewSubCategory] = useState([]);
  const [imageSource, setImageSource] = useState(false);
  const [detailSubCategory, setDetailSubCategory] = useState(null);
  const [validateUpdate, setValidateupdate] = useState(false);
  const [ligneSelected, setLigneSelected] = useState(null);
  const [dataDetails, setDataDetails] = useState([]);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [titleCategory, setTitleCategory] = useState('');
  const [isModify, setIsModify] = useState(false);
  const [elementModify, setElementModify] = useState(null);
  const [showModalModifyCategory, setShowModalModifyCategory] = useState(false);
  const [subCategoryDetailModify, setSubCategoryDetailModify] = useState(null);
  const [activeBtn, setActiveBtn] = useState(false);
  const [dataExport, setDataExport] = useState([]);
  const [isExport, setIsExport] = useState(false);
  const [isListDelete, setIsListDelete] = useState(false);
  const [isdelete, setIsDelete] = useState(false);
  const [invalidImage, setInvalidImage] = useState({
    subCategory: false,
    category: false
  });
  const [afterUpdateSubCategory, setAfterUpdateSubCategory] = useState(false);
  const headersExport = [
    {
      id: 'category',
      displayName: 'CATÉGORIES'
    },
    {
      id: 'subCategory',
      displayName: 'SOUS-CATÉGORIE'
    },
    {
      id: 'nbContacts',
      displayName: 'NB CONTACTS'
    },
    {
      id: 'nbLot',
      displayName: 'NB LOTS'
    },
    {
      id: 'lotUnderStudy',
      displayName: "À L'ÉTUDE"
    },
    {
      id: 'lotAtCustomer',
      displayName: 'CHEZ CLIENT'
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
  const [showLoading, setShowLoading] = useState(false);
  const [showModalInfo, setShowModalInfo] = useState(false);
  const [responseInfo, setResponseInfo] = useState(false);
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
        column: 'sous-catégorie',
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
        className: 'table-col-header',
        index: 'nbContact'
      },
      {
        column: 'nb lots',
        className: 'table-col-header',
        index: 'nbLot'
      },
      {
        column: "à l'étude",
        className: 'table-col-header',
        index: 'lotUnderStudy'
      },
      {
        column: 'chez client',
        className: 'table-col-header',
        index: 'lotAtCustomer'
      },
      {
        column: 'nb documents',
        className: 'table-col-header',
        index: 'number_document'
      },
      {
        column: 'total estimation',
        className: 'table-col-header',
        index: 'totalEstimate'
      }
    ]);
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
            _id: element.subCategoryId,
            select: (
              <td className='table-col-checkbox'>
                <Input
                  id={element.subCategoryId}
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
  async function getListLot () {
    const response = await apiGetListLot(page, search, sort.field, sort.asc);
    if (response != null) {
      if (response && response.statusCode === 200) {
        setListData(response.lot);
        defineListColumn();
        defineData(response.lot);
        setNumberOfPage(Math.ceil(response.totalNbre / 12).toString());
      }
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
    else setCheckAllElement(true);
  }
  async function onShearch (e) {
    if (e.key === 'Enter') {
      await setpage(1);
      await getListLot();
    }
  }

  function onChangePagination (value) {
    setListElementChecked([]);
    setpage(value);
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
    getListLot();
  }, []);

  useEffect(() => {
    getListLot();
  }, [page]);
  async function getListCategory () {
    const response = await apiGetListCategory(auth.token);
    if (response.statusCode === 200) {
      setListCategory(response.data);
    }
  }
  useEffect(() => {
    if (showModal === true) {
      getListCategory();
    }
  }, [showModal]);
  function onchangeSelectCategory (value) {
    setCategory({ _id: value });
    setInvalidImage({ subCategory: false, category: false });
    setValidation(false);
  }
  async function getListSubCategory (_id) {
    resetImg();
    setSubCategory(null);
    const response = await apiGetListSubCategory(_id, auth.token);
    if (response.statusCode === 200) {
      const lListSubCategory = response.data.map(element => {
        return { ...element, logo: apiURL + 'file/' + element.logo };
      });
      setlistSubCategory(lListSubCategory);
    }
  }
  useEffect(() => {
    if (category) {
      getListSubCategory(category._id);
    }
  }, [category]);

  const handleFileChange = (e, category) => {
    const valid = { ...invalidImage };

    const url = e.target && e.target.files[0].name;
    if (/\.(jpe?g|png|PNG|JPE?G)$/i.test(url) === true) {
      setSrc(URL.createObjectURL(e.target.files[0]));
      setShowModalCrop(true);
      setImageSource(category);
      if (category === true) {
        valid.category = false;
      } else {
        valid.subCategory = false;
        setValidation(false);
      }
    } else {
      if (category === true) {
        valid.category = true;
      } else {
        valid.subCategory = true;
      }
    }
    setInvalidImage(valid);
  };

  function getCroppedImg (base64Image) {
    if (imageSource == true) {
      setResultCategory(base64Image);
      setElementModify({ ...elementModify, categoryLogo: base64Image });
    } else {
      if (subCategoryDetailModify != null) {
        setSubCategoryDetailModify({
          ...subCategoryDetailModify,
          logo: base64Image
        });
      } else {
        setResult(base64Image);
        setSubCategory({ ...subCategory, logo: base64Image });
      }
    }
    setShowModalCrop(false);
  }

  function resetImg () {
    setShowModalCrop(false);
    setSrc(null);
    setResult(null);
    setViewEditImage({ view: false, index: null });
    setResultCategory(null);
  }
  function onHideModalCropImg () {
    setShowModalCrop(false);
    resetImg();
  }
  function getFile () {
    document.getElementById('input-file-add-img').click();
  }
  function onChangeSubCategoryValue (value) {
    setSubCategory({ ...subCategory, name: value });
  }
  function onSaveSubCategory (e, index) {
    if (e.key === 'Enter' && subCategory.name != '') {
      setSubCategory({ ...subCategory, validation: true });
    }
  }
  function validateSpace (value) {
    if (!value.replace(/\s/g, '').length) {
      return false;
    }
    return true;
  }
  function onValidSubCategoryName (value) {
    if (
      subCategory.name != '' &&
      subCategory.name != null &&
      validateSpace(subCategory.name) === true
    ) {
      setSubCategory({ ...subCategory, validation: value, error: null });
    } else {
      setSubCategory({
        ...subCategory,
        validation: false,
        error: '* Champ invalide'
      });
    }
  }
  async function deleteSubCategory () {
    const ids = [];
    if (listSubCategory[subCategoryDeleted]._id) {
      ids.push(listSubCategory[subCategoryDeleted]._id);
      const response = await apiDeleteListSubcategory(
        JSON.stringify({ ids: ids })
      );
      if (response.statusCode === 200) {
        getListLot();
        getListCategory();
        const lListSubCategory = listSubCategory;
        lListSubCategory.splice(subCategoryDeleted, 1);
        setlistSubCategory([...lListSubCategory]);
        setShowModalValidateDelete(false);
      }
    } else {
      const lListSubCategory = listSubCategory;
      lListSubCategory.splice(subCategoryDeleted, 1);
      setlistSubCategory([...lListSubCategory]);
      setShowModalValidateDelete(false);
    }
  }

  function addSubCategory () {
    if (!subCategory) {
      setSubCategory({ logo: null, name: null, validation: false });
      resetImg();
      setValidation(false);
    } else if (
      subCategory.logo != null &&
      subCategory.name != null &&
      subCategory.validation === true
    ) {
      const lListSubCategory = listNewSubCategory;
      lListSubCategory.push(subCategory);
      setListNewSubCategory([...lListSubCategory]);
      setSubCategory({ logo: null, name: null, validation: false });
      resetImg();
      setValidation(false);
    } else {
      if (subCategory.logo == null) {
        setValidation(true);
      }
    }
  }
  async function saveSubCatgerory () {
    let bVerif = true;
    const listSubCategoryBody = [];
    listNewSubCategory.map((element, index) => {
      listSubCategoryBody.push({
        name: element.name,
        logo: getLogoName(element.logo)
      });
    });
    if (subCategory != null) {
      if (
        subCategory.name != '' &&
        subCategory.name != null &&
        subCategory.logo != null &&
        subCategory.validation == true
      ) {
        listSubCategoryBody.push({
          name: subCategory.name,
          logo: getLogoName(subCategory.logo)
        });
      } else {
        bVerif = false;
        if (subCategory.validation == false) {
          setSubCategory({ ...subCategory, error: '* Valider ce champ' });
        } else {
          if (subCategory.name == '' && subCategory.name == null) {
            setSubCategory({ ...subCategory, error: '* Champ requis' });
          }
        }
      }
    }
    if (bVerif === true) {
      const body = {
        subCategory: listSubCategoryBody,
        categoryId: category
      };
      const response = await apiAddSubCategory(JSON.stringify(body));
      if (response.statusCode === 200) {
        setSubCategory(null);
        onHideModal();
        getListLot();
      } else if (response.statusCode === 400) {
        if (response.message === 'name exist') {
          if (listNewSubCategory[response.position]) {
            const listError = [...listNewSubCategory];
            listError[response.position].error = '* Nom sous-catégorie existe';
            setListNewSubCategory(listError);
          } else {
            setSubCategory({
              ...subCategory,
              error: '* Nom sous-catégorie existe'
            });
          }
        }
      }
      setValidation(false);
    } else {
      if (subCategory.logo == null) {
        setValidation(true);
      }
    }
  }
  async function submit () {
    console.log('heeee');
    if (isModify === true) {
      await saveCatgerory();
    } else {
      await saveSubCatgerory();
    }
  }

  function deleteNewSubCategory (index) {
    const list = [...listNewSubCategory];
    list.splice(index, 1);
    setListNewSubCategory(list);
  }

  function deleteCreatedSubCategory () {
    resetImg();
    setSubCategory(null);
    setValidation(false);
  }
  function onHideModal () {
    setShowModal(false);
    setCategory(null);
    setlistSubCategory([]);
    setViewEditImage({ view: false, index: null });
    setSubCategory(null);
    resetImg();
    setListNewSubCategory([]);
    setElementModify({ categoryLogo: null });
    setInvalidImage({ subCategory: false, category: false });
    setValidation(false);
  }

  function openModalValidateDelete (index) {
    setShowModalValidateDelete(true);
    setSubCategoryDeleted(index);
  }
  function closeModalInfo () {
    setShowDetailModal(false);
  }
  function onHideModalModifyCategory () {
    setShowModalModifyCategory(false);
    setAfterUpdateSubCategory(true);
    setSubCategoryDetailModify(null);
    setValidateupdate(false);
  }
  function showModalInfoExport () {
    setShowLoading(true);
    setIsExport(true);
    setShowModalInfo(true);
    const showModal = setTimeout(() => {
      setShowLoading(false);
    }, 1000);
    setResponseInfo(true);
  }
  function closeModalExport () {
    setIsExport(false);
    setIsDelete(false);
    setShowModalInfo(false);
  }
  async function openModalChangeCategorylogo () {
    const element = await changeElement();
    if (element) {
      getFile();
    }
  }
  function onOpenModalSubCategory () {
    if (isModify === true) {
      setCategory(null);
      setSubCategory(null);
      setlistSubCategory([]);
      setListNewSubCategory([]);
      resetImg();
      setIsModify(false);
      setElementModify(null);
    }
    setShowModal(true);
  }
  async function SelectLigne (value) {
    const response = await apiGetSubCategoryById(value);
    if (response != null) {
      if (response.statusCode === 200) {
        const element = response.data[0];
        setDetailSubCategory(element);
        setLigneSelected(value);
        const detail = [
          { name: 'Nom de la catégorie : ', value: element.category },
          { name: 'Nom de la sous-catégorie : ', value: element.subCategory },
          { name: 'Nb contact :', value: element.nbContact },
          { name: 'Nb lots : ', value: element.nbLot },
          { name: 'À l’étude : ', value: element.lotUnderStudy },
          { name: 'Chez le client : ', value: element.lotAtCustomer },
          { name: 'Nb documents : ', value: element.nbDocument },
          { name: 'Total estimation : ', value: element.totalEstimate }
        ];
        setDataDetails(detail);
        setShowDetailModal(true);
        setTitleCategory(element.category);
      }
    }
  }
  async function modify () {
    const element = detailSubCategory;
    const response = await apiGetCategoryById(element.categoryId);
    if (response !== null) {
      if (response.statusCode === 200) {
        setShowDetailModal(false);
        onchangeSelectCategory(element.categoryId);
        setElementModify({
          ...element,
          categoryLogo: apiURL + 'file/' + response.data.logo
        });
        setInvalidImage({ subCategory: false, category: false });
        setShowModal(true);
        setIsModify(true);
        setSubCategory(null);
        setListNewSubCategory([]);
      }
    }
  }

  function openModalModifySubCategory (element, index) {
    setShowModal(false);
    setShowModalModifyCategory(true);
    setSubCategoryDetailModify({ ...element, index: index, error: null });
  }

  async function changeElement () {
    await setElementModify({ ...elementModify, categoryLogo: null });
    return elementModify;
  }

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
          nbContacts: data[i].nbContact,
          nbLot: data[i].nbLot,
          lotUnderStudy: data[i].lotUnderStudy,
          lotAtCustomer: data[i].lotAtCustomer,
          nbDocument: data[i].nbDocument,
          totalEstimate: data[i].totalEstimate
        });
      }
    });
    setDataExport(list);
  }
  function onChangeSubCategoryName (value) {
    setSubCategoryDetailModify({ ...subCategoryDetailModify, name: value });
  }
  async function onModifySubCategory () {
    if (subCategoryDetailModify._id) {
      if (
        subCategoryDetailModify.logo != '' &&
        subCategoryDetailModify.name != '' &&
        subCategoryDetailModify._id != '' &&
        validateSpace(subCategoryDetailModify.name) === true
      ) {
        const body = JSON.stringify({
          name: subCategoryDetailModify.name,
          subcategoryId: subCategoryDetailModify._id,
          logo: getLogoName(subCategoryDetailModify.logo)
        });
        const response = await apiModifySubCategory(body);
        if (response !== null) {
          if (response.statusCode === 200) {
            setValidateupdate(false);
            onHideModalModifyCategory();
            getListSubCategory(category._id);
            setShowModalInfo(true);
            setResponseInfo(true);
            getListLot();
          } else {
            if (response.statusCode === 400) {
              if (response.message === 'name exist') {
                setSubCategoryDetailModify({
                  ...subCategoryDetailModify,
                  error: '* Nom sous-catégorie existe'
                });
              }
            }
            // setValidateupdate(true);
          }
        }
      } else {
        if (validateSpace(subCategoryDetailModify.name) === false) {
          setSubCategoryDetailModify({
            ...subCategoryDetailModify,
            error: '* Champ invalide'
          });
        }
        if (subCategoryDetailModify.logo == '') {
          setValidateupdate(true);
        }
      }
    } else {
      if (
        subCategoryDetailModify.logo != '' &&
        subCategoryDetailModify.name != ''
      ) {
        const list = [...listNewSubCategory];
        list[subCategoryDetailModify.index] = subCategoryDetailModify;
        setListNewSubCategory(list);
        onHideModalModifyCategory();
        setValidateupdate(false);
      } else {
        setValidateupdate(true);
      }
    }
  }
  function getLogoName (image, path) {
    const myUrl = image.split(apiURL + 'file/');
    let logo;
    if (myUrl.length === 2) {
      logo = myUrl[1];
    } else {
      logo = image;
    }
    return logo;
  }
  async function saveCatgerory () {
    let bVerif = true;
    const listSubCategoryBody = [];
    listNewSubCategory.map((element, index) => {
      listSubCategoryBody.push({
        name: element.name,
        logo: getLogoName(element.logo)
      });
    });
    if (subCategory != null) {
      if (
        subCategory.name != '' &&
        subCategory.name != null &&
        subCategory.logo != null &&
        subCategory.validation == true
      ) {
        listSubCategoryBody.push({
          name: subCategory.name,
          logo: getLogoName(subCategory.logo)
        });
      } else {
        bVerif = false;
      }
    }
    if (bVerif === true) {
      const body = {
        subCategory: listSubCategoryBody,
        categoryId: category,
        name: elementModify.category,
        logo: getLogoName(elementModify.categoryLogo)
      };
      const response = await apiEditCategory(JSON.stringify(body));
      if (response.statusCode === 200) {
        setSubCategory(null);
        getListSubCategory(category._id);
        onHideModal();
        setResponseInfo(true);
        getListLot();
        setShowModalInfo(true);
      } else if (response.statusCode === 400) {
        if (response.message === 'name exist') {
          if (listNewSubCategory[response.position]) {
            const listError = [...listNewSubCategory];
            listError[response.position].error = '* Nom sous-catégorie existe';
            setListNewSubCategory(listError);
          } else {
            setSubCategory({
              ...subCategory,
              error: '* Nom sous-catégorie existe'
            });
          }
        }
      }
      setValidation(false);
    } else {
      setValidation(true);
    }
  }
  useEffect(() => {
    if (showModalInfo === false && afterUpdateSubCategory === true) {
      setShowModal(true);
      setAfterUpdateSubCategory(false);
    } else {
      if (showModalInfo === false) {
        setIsModify(false);
      }
    }
  }, [showModalInfo]);
  function onChangeCategoryName (value) {
    setElementModify({ ...elementModify, category: value });
  }
  async function deleteListSubCategory () {
    const list = [];
    listElementChecked.map((el, i) => {
      if (el === true) {
        list.push(data[i]._id);
      }
    });
    const body = JSON.stringify({ ids: list });
    const response = await apiDeleteListSubcategory(body);
    if (response !== null) {
      if (response.statusCode === 200) {
        getListLot();
        setShowModalValidateDelete(false);
        setIsDelete(true);
        setResponseInfo(true);
        setShowModalInfo(true);
      }
    }
    getListCategory();
  }
  function openModalDelete () {
    setShowModalValidateDelete(true);
    setIsListDelete(true);
  }
  useEffect(() => {
    if (showModalValidateDelete === false) {
      setIsListDelete(false);
    }
  }, [showModalValidateDelete]);
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
    getListLot();
  }, [sort]);
  return (
    <div>
      <LotTemplate
        search={search}
        setSearch={setSearch}
        listColumns={listColumns}
        data={data}
        columnSort={sort.field}
        onChangePagination={onChangePagination}
        page={page}
        numberOfPage={numberOfPage}
        onShearch={onShearch}
        showModal={showModal}
        setShowModal={setShowModal}
        onchangeSelectCategory={onchangeSelectCategory}
        listSubCategory={listSubCategory}
        onChangeSubCategoryValue={onChangeSubCategoryValue}
        onSaveSubCategory={onSaveSubCategory}
        deleteSubCategory={deleteSubCategory}
        addSubCategory={addSubCategory}
        onHideModal={onHideModal}
        listCategory={listCategory}
        src={src}
        setSrc={setSrc}
        handleFileChange={handleFileChange}
        showModalCrop={showModalCrop}
        setShowModalCrop={setShowModalCrop}
        getCroppedImg={getCroppedImg}
        result={result}
        viewEditImage={viewEditImage}
        subCategory={subCategory}
        category={category}
        onHideModalCropImg={onHideModalCropImg}
        setSubCategory={setSubCategory}
        openModalValidateDelete={openModalValidateDelete}
        showModalValidateDelete={showModalValidateDelete}
        setShowModalValidateDelete={setShowModalValidateDelete}
        submit={submit}
        validate={validate}
        getFile={getFile}
        ligneSelected={ligneSelected}
        selectElement={SelectLigne}
        dataDetails={dataDetails}
        showDetailModal={showDetailModal}
        closeModalInfo={closeModalInfo}
        title={titleCategory}
        modify={modify}
        isModify={isModify}
        elementModify={elementModify}
        openModalModifySubCategory={openModalModifySubCategory}
        setShowModalModifyCategory={setShowModalModifyCategory}
        showModalModifyCategory={showModalModifyCategory}
        subCategoryDetailModify={subCategoryDetailModify}
        onHideModalModifyCategory={onHideModalModifyCategory}
        openModalChangeCategorylogo={openModalChangeCategorylogo}
        dataExport={dataExport}
        headersExport={headersExport}
        activeBtn={activeBtn}
        showModalInfoExport={showModalInfoExport}
        responseInfo={responseInfo}
        showModalInfo={showModalInfo}
        isExport={isExport}
        showLoading={showLoading}
        closeModalExport={closeModalExport}
        listNewSubCategory={listNewSubCategory}
        deleteNewSubCategory={deleteNewSubCategory}
        deleteCreatedSubCategory={deleteCreatedSubCategory}
        onValidSubCategoryName={onValidSubCategoryName}
        onOpenModalSubCategory={onOpenModalSubCategory}
        onChangeSubCategoryName={onChangeSubCategoryName}
        onModifySubCategory={onModifySubCategory}
        validateUpdate={validateUpdate}
        onChangeCategoryName={onChangeCategoryName}
        deleteListSubCategory={deleteListSubCategory}
        isListDelete={isListDelete}
        openModalDelete={openModalDelete}
        isdelete={isdelete}
        invalidImage={invalidImage}
      />
    </div>
  );
}
