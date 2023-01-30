import { Modal } from 'react-bootstrap';
import React from 'react';
OrganismModalDetail.defaultProps = {
  title: '',
  SubTitle: '',
  dataDetails: [],
  buttonIsExist: true,
  modify: null,
  showDetailModal: false,
  setShowDetailModal: null
};
export default function OrganismModalDetail (props) {
  return (
    <Modal
      show={props.showDetailModal}
      centered
      onHide={() => props.setShowDetailModal(false)}
      contentClassName={'detail-modal-content'}
      dialogClassName={'modal-dialog'}
    >
      <div className={'detail-title'}>{props.title}</div>
      <div className={'detail-sub-title'}>{props.SubTitle}</div>
      {props.dataDetails &&
        props.dataDetails.map(element => {
          return (
            <div className={'detail-data-content'}>
              <div className={'detail-data-name'}>{element.name}</div>
              <div className={'detail-data-value'}>{element.value}</div>
            </div>
          );
        })}

      {props.modify != null ? (
        <div
          className={'Col_Action_Data detail_btn_modify'}
          onClick={() => props.modify()}
        >
          {'Modifier'}
        </div>
      ) : null}
    </Modal>
  );
}
