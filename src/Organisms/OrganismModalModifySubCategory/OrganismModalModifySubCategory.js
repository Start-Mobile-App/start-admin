import React from 'react';
import { Modal } from 'react-bootstrap';
import { Button, Icon, Text, Img } from '../../Atoms';
import { InputMolecule } from '../../Molecules';
OrganismModalModifySubCategory.defaultProps = {
  validateUpdate: null,
  handleFileChange: null,
  getFile: null,
  onChangeSubCategoryName: null,
  subCategory: null,
  showModalModifyCategory: null,
  onHideModalModifyCategory: null,
  onModifySubCategory: null
};
export default function OrganismModalModifySubCategory (props) {
  return (
    <div>
      <Modal
        show={props.showModalModifyCategory}
        onHide={() => props.onHideModalModifyCategory()}
        centered={true}
        contentClassName={'modal-content-sub-category'}
        dialogClassName={'modal-dialog'}
      >
        <div className='container-icon-close-modal-category'>
          <Icon
            icon='CloseIcon'
            size='14px'
            className='icon-close-modal'
            onClick={() => props.onHideModalModifyCategory()}
          />
        </div>
        <InputMolecule
          className={'input-modal-lot-sub-category'}
          placeholder='Sous-catégorie'
          value={props.subCategory ? props.subCategory.name : null}
          onChange={e => props.onChangeSubCategoryName(e.target.value)}
        />
        <div className='container-img-sub-category'>
          <div>
            <Img
              src={props.subCategory ? props.subCategory.logo : null}
              className='img-sub-category'
            />
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
        </div>
        {props.validateUpdate === true ? (
          <Text className='error_label label-edit-sub-category-error'>
            {'* Vérifier vos données'}
          </Text>
        ) : null}
        <div className='container-btn-validation container-margin-btn'>
          <Button
            className='btn-validation-modal'
            onClick={() => props.onModifySubCategory()}
          >
            {' '}
            {'Valider'}{' '}
          </Button>
        </div>
      </Modal>
    </div>
  );
}
