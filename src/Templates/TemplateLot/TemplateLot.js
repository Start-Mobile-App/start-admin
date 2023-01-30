import React from 'react';
import {
  HeaderOrganism,
  ModalEditSubCategory,
  TableLotOrganism,
  ModalCropImage,
  ModalValidateDelete,
  ModalDetailOrganism,
  ModalModifySubCategory,
  ModalInfoOrganism
} from '../../Organisms';
import { Row, Col } from 'react-bootstrap';
import { InputMolecule, Pagination } from '../../Molecules';
import { Icon, Button } from '../../Atoms';
import CsvDownloader from 'react-csv-downloader';

TemplateLot.defaultProps = {
  listColumns: null,
  columnSort: null,
  data: null,
  ligneSelected: null,
  selectElement: null,
  numberOfPage: null,
  page: null,
  onChangePagination: null,
  subCategory: null,
  category: null,
  showModal: null,
  setShowModal: null,
  onchangeSelectCategory: null,
  onChangeSubCategoryValue: null,
  onSaveSubCategory: null,
  addSubCategory: null,
  onHideModal: null,
  listCategory: null,
  handleFileChange: null,
  result: null,
  viewEditImage: null,
  setSubCategory: null,
  openModalValidateDelete: null,
  src: null,
  crop: null,
  changeCrop: null,
  showModalCrop: null,
  onHideModalCropImg: null,
  getCroppedImg: null,
  setImage: null,
  showModalValidateDelete: null,
  setShowModalValidateDelete: null,
  deleteSubCategory: null,
  submit: null,
  validate: false,
  getFile: null,
  elementModify: null,
  openModalModifySubCategory: null,
  openModalChangeCategorylogo: null,
  listNewSubCategory: null,
  deleteNewSubCategory: null,
  deleteCreatedSubCategory: null,
  onValidSubCategoryName: null,
  validateUpdate: null,
  onChangeSubCategoryName: null,
  showModalModifyCategory: null,
  onHideModalModifyCategory: null,
  onModifySubCategory: null,
  isExport: null,
  closeModalExport: null,
  responseInfo: null,
  showModalInfo: null,
  showLoading: null,
  dataDetails: null,
  closeModalInfo: null,
  modify: null,
  title: null,
  onChangeCategoryName: null,
  deleteListSubCategory: null,
  isListDelete: false,
  openModalDelete: null
};
export default function TemplateLot (props) {
  return (
    <div>
      <HeaderOrganism title='Lots' />
      <Row className='container_row_Lots'>
        <Col>
          <InputMolecule
            icons={[<Icon icon='Search' className='IconSearch' size='12px' />]}
            placeholder='Recherche'
            onChange={e => props.setSearch(e.target.value)}
            containerClassname='container_input_search'
            className='input_search'
            value={props.search}
            onKeyPress={e => props.onShearch(e)}
          />
        </Col>
        <Col className='Col_Action_Data'>
          <Button
            className={
              props.activeBtn ? ' button_delete active_button' : 'button_delete'
            }
            onClick={() => (props.activeBtn ? props.openModalDelete() : null)}
          >
            {'Supprimer'}
          </Button>
          {props.activeBtn ? (
            <div onClick={() => props.showModalInfoExport()}>
              <CsvDownloader
                filename='Lot.csv'
                separator=';'
                wrapColumnChar=''
                columns={props.headersExport}
                datas={props.dataExport}
                text={
                  <div>
                    <Icon
                      icon={'Download'}
                      className={'icon_Export active_button'}
                      size={11}
                    />
                    Exporter
                  </div>
                }
                className={
                  'btn_classic_style button_delete button-export active_button second-button'
                }
              />
            </div>
          ) : (
            <Button
              className={
                'btn_classic_style button_delete button-export second-button'
              }
            >
              <Icon icon={'Download'} className={'icon_Export'} size={11} />
              Exporter
            </Button>
          )}
          <Button
            className='Active_Btn_Action_Table_Lot'
            onClick={() => props.onOpenModalSubCategory()}
          >
            <Icon
              icon='Plus'
              size='10px'
              style={{ marginRight: '8px' }}
              color='#FF8577'
            />
            {'Nouvelle sous-catégorie'}
          </Button>
        </Col>
      </Row>
      <TableLotOrganism
        listColumns={props.listColumns}
        data={props.data}
        columnSort={props.columnSort}
        ligneSelected={props.ligneSelected}
        selectElement={props.selectElement}
      />
      {parseInt(props.numberOfPage) > 1 ? (
        <Pagination
          page={props.page}
          numberOfPages={props.numberOfPage}
          onChangePagination={props.onChangePagination}
          className='Row_Pagination_Group'
        />
      ) : null}
      <ModalEditSubCategory
        subCategory={props.subCategory}
        category={props.category}
        show={props.showModal}
        setShowModal={props.setShowModal}
        onchangeSelectCategory={props.onchangeSelectCategory}
        listSubCategory={props.listSubCategory}
        onChangeSubCategoryValue={props.onChangeSubCategoryValue}
        onSaveSubCategory={props.onSaveSubCategory}
        addSubCategory={props.addSubCategory}
        onHideModal={props.onHideModal}
        listCategory={props.listCategory}
        handleFileChange={props.handleFileChange}
        result={props.result}
        viewEditImage={props.viewEditImage}
        setSubCategory={props.setSubCategory}
        openModalValidateDelete={props.openModalValidateDelete}
        submit={props.submit}
        validate={props.validate}
        getFile={props.getFile}
        isModify={props.isModify}
        elementModify={props.elementModify}
        openModalModifySubCategory={props.openModalModifySubCategory}
        openModalChangeCategorylogo={props.openModalChangeCategorylogo}
        listNewSubCategory={props.listNewSubCategory}
        deleteNewSubCategory={props.deleteNewSubCategory}
        deleteCreatedSubCategory={props.deleteCreatedSubCategory}
        onValidSubCategoryName={props.onValidSubCategoryName}
        onChangeCategoryName={props.onChangeCategoryName}
        invalidImage={props.invalidImage}
      />
      <ModalCropImage
        src={props.src}
        show={props.showModalCrop}
        onHide={props.onHideModalCropImg}
        getCroppedImg={props.getCroppedImg}
      />
      <ModalValidateDelete
        showModalValidateDelete={props.showModalValidateDelete}
        setShowModalValidateDelete={props.setShowModalValidateDelete}
        description={[
          'Êtes-vous certain de vouloir supprimer définitivement cette',
          'sous-catégorie de lots ? Tous les lots associés à cette-catégorie ',
          'seront égalment supprimés.'
        ]}
        delete={
          props.isListDelete === true
            ? props.deleteListSubCategory
            : props.deleteSubCategory
        }
        valid={'Valider'}
        cancel={'Annuler'}
        contentClassName={'modal_delete_group'}
        sizeIcon={'42px'}
        classNamedescription={'style_description_delete_group'}
        classNameCancelButton={'cancel_button_group'}
        classNameValidButton={'valid_button_group'}
        deleteIcon={true}
        marginBottonIconReclamation={'28px'}
      />
      <ModalDetailOrganism
        dataDetails={props.dataDetails}
        showDetailModal={props.showDetailModal}
        title={props.title}
        SubTitle={'Catégorie'}
        setShowDetailModal={props.closeModalInfo}
        modify={props.modify}
      />
      <ModalModifySubCategory
        onModifySubCategory={props.onModifySubCategory}
        onHideModalModifyCategory={props.onHideModalModifyCategory}
        showModalModifyCategory={props.showModalModifyCategory}
        subCategory={props.subCategoryDetailModify}
        onChangeSubCategoryName={props.onChangeSubCategoryName}
        getFile={props.getFile}
        handleFileChange={props.handleFileChange}
        validateUpdate={props.validateUpdate}
        invalidImage={props.invalidImage}
      />
      <ModalInfoOrganism
        description={
          props.isdelete === true
            ? 'Les sous-catégories ont été supprimées'
            : props.isExport === true
            ? 'La liste a bien été exportée'
            : props.isModify === true
            ? 'les modifications ont bien été enregistrées'
            : null
        }
        closeModalInfo={props.closeModalExport}
        sizeIcon='40px'
        classNamedescription={'info-description'}
        deleteIcon={true}
        colorIcon={props.responseInfo ? '#00D98B' : '#FF8577'}
        iconName={props.responseInfo ? 'Success' : 'Reclamation'}
        showModalInfo={props.showModalInfo}
        marginBottonIcon={'28px'}
        loading={props.showLoading ? true : false}
      />
    </div>
  );
}
