import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { IconTextMolecule } from './../../Molecules/index';
import { Icon } from '../../Atoms';

OrganismAlertModal.defaultProps = {
  show: 'true',
  icon: 'Valid',
  iconClassName: 'Modal-Icon'
};

export default function OrganismAlertModal (props) {
  return (
    <Modal {...props}>
      <Modal.Header closeButton bsPrefix='Modal-Header'></Modal.Header>
      <Modal.Body bsPrefix='Modal-Body'>
        <IconTextMolecule
          icon={<Icon icon={props.icon} className={props.iconClassName} />}
          text={<div>hello world</div>}
        />
      </Modal.Body>
    </Modal>
  );
}
