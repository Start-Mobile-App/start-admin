import { Modal } from 'react-bootstrap';
import React from 'react';
import { Text, Icon } from '../../Atoms';
import PropTypes from 'prop-types';
function OrganismModalDescriptionWithInput (props) {
  return (
    <Modal
      show={props.show}
      centered
      contentClassName={props.contentClassName}
      dialogClassName={props.dialogClassName}
      onHide={() => props.onHide()}
    >
      <Icon
        icon='CloseIcon'
        size='10px'
        className='icon-close-modal margin_icon_close'
        onClick={props.onHide}
      />
      <Text className={props.classNameTitle}>{props.title}</Text>
      <div className={'container-add-admin'}>
        {props.description.map(el => {
          return <div className={'descriprtion-style-div'}>{el}</div>;
        })}
      </div>

      <div>{props.inputs}</div>
    </Modal>
  );
}
OrganismModalDescriptionWithInput.defaultProps = {
  description: ['Voulez vous supprimer'],
  onHide: null,
  show: false,
  contentClassName: 'modal-content-with-input',
  dialogClassName: 'modal-dialog',
  classNamedescription: 'descriprtion-style-div',
  classNameTitle: 'title_add_admin',
  inputs: null,
  classNameContainerDescription: 'container-add-admin',
  title: 'Ajouter un administrateur'
};
OrganismModalDescriptionWithInput.PropTypes = {
  inputs: PropTypes.elementType
};
export default OrganismModalDescriptionWithInput;
