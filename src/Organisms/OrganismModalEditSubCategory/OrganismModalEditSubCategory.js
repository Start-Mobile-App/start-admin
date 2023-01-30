import React from 'react';
import { Modal } from 'react-bootstrap';
import { Button, Icon, Text, Img, Input } from '../../Atoms';
import { InputMolecule } from '../../Molecules';
OrganismModalEditSubCategory.defaultProps = {
  show: null,
  onHideModal: null,
  setShowModal: null,
  listCategory: null,
  onchangeSelectCategory: null,
  openModalValidateDelete: null,
  category: null,
  subCategory: null,
  listSubCategory: null,
  onChangeSubCategoryValue: null,
  onSaveSubCategory: null,
  setSubCategory: null,
  handleFileChange: null,
  addSubCategory: null,
  saveSubCategories: null,
  validate: false,
  getFile: null,
  selectedCategory: null,
  isModify: false,
  result: null,
  viewEditImage: null,
  submit: null,
  elementModify: { category: null, categoryLogo: null },
  openModalModifySubCategory: null,
  openModalChangeCategorylogo: null,
  listNewSubCategory: null,
  deleteNewSubCategory: null,
  deleteCreatedSubCategory: null,
  onValidSubCategoryName: null,
  onChangeCategoryName: null
};
export default function OrganismModalEditSubCategory (props) {
  return (
    <div>
      <Modal
        show={props.show}
        onHide={() => props.setShowModal(false)}
        centered={true}
        contentClassName={'modal-content-Lot'}
        dialogClassName={'modal-dialog'}
      >
        <div className='container-icon-close-modal'>
          <Icon
            icon='CloseIcon'
            size='14px'
            className='icon-close-modal'
            onClick={() => props.onHideModal()}
          />
        </div>
        {props.isModify ? (
          <Input
            className={'input-modal-lot-modify-category'}
            value={props.elementModify ? props.elementModify.category : null}
            onChange={e => props.onChangeCategoryName(e.target.value)}
          />
        ) : (
          <InputMolecule
            className={'input-modal-lot'}
            as='select'
            placeholder='Catégorie'
            value={props.category ? props.category._id : null}
            options={props.listCategory.map(element => {
              return <option value={element._id}>{element.name}</option>;
            })}
            onChange={e => props.onchangeSelectCategory(e.target.value)}
          />
        )}
        {props.listSubCategory.map((el, index) => (
          <InputMolecule
            id={index}
            className={'input-modal-lot'}
            placeholder={'Sous-catégorie ' + (index + 1).toString()}
            value={el.name}
            readOnly={el._id !== null ? true : null}
            icons={
              props.isModify
                ? [
                    <Icon
                      icon='CloseIcon'
                      size='14px'
                      onClick={() => props.openModalValidateDelete(index)}
                      className='icon-delete-sub-category'
                    />,
                    <Icon
                      icon='Edit'
                      size='17px'
                      className='icon-edit-sub-category'
                      onClick={() =>
                        props.openModalModifySubCategory(el, index)
                      }
                    />
                  ]
                : null
            }
          />
        ))}
        {props.isModify === true ? (
          <div
            className='container-img-sub-category'
            onClick={() =>
              props && props.elementModify && props.elementModify.categoryLogo
                ? null
                : props.getFile()
            }
          >
            {props.elementModify.categoryLogo ? (
              <div>
                <Img
                  src={props.elementModify.categoryLogo}
                  className='img-sub-category'
                />
                <Icon
                  icon='Edit'
                  size='17px'
                  className='icon-modify-sub-category'
                  onClick={() => props.openModalChangeCategorylogo()}
                />
              </div>
            ) : (
              <input
                id='input-file-add-img'
                type='file'
                className='input-file-add-img'
                accept='image/*'
                onChange={e => props.handleFileChange(e, true)}
              />
            )}
          </div>
        ) : null}
        {props.invalidImage.category === true ? (
          <Text className='error_label error_label_group'>
            {'* Format invalide'}
          </Text>
        ) : null}
        {props.listNewSubCategory.map((el, index) => (
          <InputMolecule
            id={index}
            className={'input-modal-lot'}
            placeholder={'Sous-catégorie ' + (index + 1).toString()}
            value={el.name}
            readOnly={el._id !== null ? true : null}
            ErrorMsg={el && el.error ? el.error : null}
            ErrorMsgClassName={'error_label error_label_group'}
            icons={
              el.validation === true
                ? [
                    <Icon
                      icon='CloseIcon'
                      size='14px'
                      onClick={() => props.deleteNewSubCategory(index)}
                      className='icon-delete-sub-category'
                    />,
                    <Icon
                      icon='Edit'
                      size='17px'
                      className='icon-edit-sub-category'
                      onClick={() =>
                        props.openModalModifySubCategory(el, index)
                      }
                    />
                  ]
                : null
            }
          />
        ))}

        {props.category && props.subCategory ? (
          <InputMolecule
            id={
              props.listSubCategory.length + props.listNewSubCategory.length + 1
            }
            className={'input-modal-lot'}
            placeholder={
              'Sous-catégorie ' +
              (
                props.listSubCategory.length +
                props.listNewSubCategory.length +
                1
              ).toString()
            }
            value={
              props.subCategory != null && props.subCategory.name != null
                ? props.subCategory.name
                : ''
            }
            onChange={e => props.onChangeSubCategoryValue(e.target.value)}
            onKeyPress={e => props.onSaveSubCategory(e)}
            readOnly={props.subCategory.validation === true ? true : false}
            ErrorMsg={props.subCategory.error ? props.subCategory.error : null}
            ErrorMsgClassName={'error_label error_label_group'}
            icons={
              props.subCategory.validation === true
                ? [
                    <Icon
                      icon='CloseIcon'
                      size='14px'
                      onClick={() => props.deleteCreatedSubCategory()}
                      className='icon-delete-sub-category'
                    />,
                    <Icon
                      icon='Edit'
                      size='17px'
                      className='icon-edit-sub-category'
                      onClick={() => props.onValidSubCategoryName(false)}
                    />
                  ]
                : [
                    <Icon
                      icon='CloseIcon'
                      size='14px'
                      onClick={() => props.deleteCreatedSubCategory()}
                      className='icon-delete-sub-category'
                    />,
                    <Icon
                      icon='Valid'
                      size='14px'
                      className='icon-edit-sub-category'
                      onClick={() => props.onValidSubCategoryName(true)}
                    />
                  ]
            }
          />
        ) : null}
        {props.category && props.subCategory ? (
          <div
            className='container-img-sub-category'
            onClick={() => (props.result ? null : props.getFile())}
          >
            {props.result ? (
              <div>
                <Img src={props.result} className='img-sub-category' />
                <Icon
                  icon='Edit'
                  size='17px'
                  className='icon-modify-sub-category'
                  onClick={() => props.getFile()}
                />
                <div>
                  <input
                    id='input-file-add-img'
                    type='file'
                    className='input-file-add-img'
                    accept='image/*'
                    onChange={e => props.handleFileChange(e, false)}
                  />
                </div>
              </div>
            ) : (
              <div>
                <div>
                  <input
                    id='input-file-add-img'
                    type='file'
                    className='input-file-add-img'
                    accept='image/*'
                    onChange={e => props.handleFileChange(e, false)}
                  />
                </div>
                <Icon icon='Camera' size='26px' className='icon-add-img' />
                <Text className='text-add-img'>{'Ajouter une photo'}</Text>
              </div>
            )}
          </div>
        ) : null}
        {props.invalidImage.subCategory === true ? (
          <Text className='error_label error_label_group'>
            {'* Format invalide'}
          </Text>
        ) : null}
        {props.validate === true ? (
          <Text className='error_label label-edit-sub-category-error'>
            {'* Champ requis'}
          </Text>
        ) : null}
        <div
          className='container-text-add-sub-category'
          onClick={() => props.addSubCategory()}
        >
          <Icon
            icon='Plus'
            size='7px'
            color='#000000'
            style={{ marginTop: '3px' }}
          />
          <Text className='text-add-category'>
            {' Ajouter une sous-catégorie'}
          </Text>
        </div>
        <div className='container-btn-validation container-margin'>
          <Button
            className='btn-validation-modal'
            onClick={() => props.submit()}
          >
            {'Valider'}
          </Button>
        </div>
      </Modal>
    </div>
  );
}
