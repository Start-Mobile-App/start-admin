import { Modal } from 'react-bootstrap';
import React from 'react';
import { IconTextMolecule } from './../../Molecules/index';
import { Button, Icon } from '../../Atoms';
OrganismModalValidateDelete.defaultProps = {
  description: ['Voulez vous supprimer'],
  setShowModalValidateDelete: null,
  deleteSubCategory: null,
  cancel: 'Retour',
  valid: 'Ok',
  contentClassName: 'small-modal-content',
  dialogClassName: 'modal-dialog',
  sizeIcon: '24px',
  classNamedescription: null,
  classNameCancelButton: 'btn-cancel-delete',
  classNameValidButton: 'btn-confirm-delete',
  deleteIcon: false,
  marginBottonIconReclamation: '16px'
};
export default function OrganismModalValidateDelete (props) {
  return (
    <Modal
      show={props.showModalValidateDelete}
      centered
      contentClassName={props.contentClassName}
      dialogClassName={props.dialogClassName}
    >
      {props.deleteIcon ? (
        <Icon
          icon='CloseIcon'
          size='10px'
          className='icon-close-modal margin_icon_close'
          onClick={() => props.setShowModalValidateDelete(false)}
        />
      ) : null}
      <IconTextMolecule
        icon={
          <Icon
            icon={'Reclamation'}
            size={props.sizeIcon}
            color='#FF8577'
            classNam
            style={{ marginBottom: props.marginBottonIconReclamation }}
          />
        }
        text={
          <div className={props.classNamedescription}>
            {props.description.map(el => {
              return <div className={'descriprtion-style-div'}>{el}</div>;
            })}
          </div>
        }
      />
      <div className='container-btn-modal-validate-delete'>
        <Button
          className={props.classNameCancelButton}
          onClick={() => props.setShowModalValidateDelete(false)}
        >
          {props.cancel}
        </Button>
        <Button
          className={props.classNameValidButton}
          onClick={() => props.delete()}
        >
          {props.valid}
        </Button>
      </div>
    </Modal>
  );
}
