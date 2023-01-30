import { Modal } from 'react-bootstrap';
import React from 'react';
import { IconTextMolecule } from './../../Molecules/index';
import { Icon, Loader } from '../../Atoms';
OrganismModalInfo.defaultProps = {
  description: 'Les modifications ont bien été enregistrées.',
  closeModalInfo: null,
  contentClassName: 'info-modal-content',
  dialogClassName: 'modal-dialog',
  sizeIcon: '24px',
  classNamedescription: null,
  deleteIcon: false,
  marginBottonIcon: '16px',
  iconName: 'Reclamation',
  showModalInfo: false,
  colorIcon: null,
  loading: false
};
export default function OrganismModalInfo (props) {
  return (
    <Modal
      show={props.showModalInfo}
      centered
      contentClassName={props.contentClassName}
      dialogClassName={props.dialogClassName}
      onHide={() => props.closeModalInfo()}
    >
      {props.deleteIcon ? (
        <Icon
          icon='CloseIcon'
          size='10px'
          className='icon-close-modal margin_icon_close'
          onClick={() => props.closeModalInfo()}
        />
      ) : null}
      <IconTextMolecule
        icon={
          <Icon
            icon={props.iconName}
            size={props.sizeIcon}
            color={props.colorIcon}
            style={{ marginBottom: props.marginBottonIcon }}
          />
        }
        text={
          <div className={props.classNamedescription}>{props.description}</div>
        }
      />
      <div className='container-loader'>
        {props.loading ? <Loader /> : null}
      </div>
    </Modal>
  );
}
