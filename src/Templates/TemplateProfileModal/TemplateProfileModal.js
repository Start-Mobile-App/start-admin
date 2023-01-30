import React from 'react';
import { InfoOrganism, GestionDroitOrganism } from '../../Organisms';
import { Modal, Row, Col } from 'react-bootstrap';
import { Text, Icon } from '../../Atoms';
export default function TemplateProfileModal (props) {
  function closeModal () {
    props.onHide();
    props.validateName.error = null;
    props.validateDirection.error = null;
    props.validateNation.error = null;
    props.validateStreet.error = null;
    props.validateMail.error = null;
    props.validateZipCode.error = null;
  }
  return (
    <Modal
      show={props.show}
      onHide={closeModal}
      dialogClassName='Modal_Container_TemplateProfileModal'
    >
      <Row
        style={{ marginTop: '32px', marginLeft: '5px', paddingBottom: '16px' }}
      >
        <Col>
          <Text className={'Title_TemplateProfileModal'}>Mon compte</Text>
          <div
            className={
              props.Selected === 0
                ? 'Selected_TemplateProfileModal'
                : 'UnSelected_TemplateProfileModal'
            }
            onClick={() => props.SelectCategory(0)}
          >
            <Icon
              icon='ClientAvatar'
              size={15}
              style={{ marginTop: '4px', marginLeft: '4px' }}
            />
            <Text className={'btn_Title_TemplateProfileModal'}>
              Mes informations
            </Text>
          </div>
          <div
            className={
              props.Selected === 1
                ? 'Selected_TemplateProfileModal'
                : 'UnSelected_TemplateProfileModal'
            }
            onClick={() => props.SelectCategory(1)}
          >
            <Icon
              icon='Entreprise'
              color='rgba(0, 0, 0, 0.8)'
              size={15}
              style={{ marginTop: '4px', marginLeft: '4px' }}
            />
            <Text className={'btn_Title_TemplateProfileModal'}>
              Gestion des droits
            </Text>
          </div>
        </Col>
        <Col style={{ marginRight: '20px' }}>
          {props.Selected === 0 ? (
            <InfoOrganism
              SubmitContactInfo={props.SubmitContactInfo}
              ContactInfo={props.ContactInfo}
              Info={props.Info}
              onChangeInfo={props.onChangeInfo}
              ModeContactInfo={props.ModeContactInfo}
              ModeGestionDroit={props.ModeGestionDroit}
              onClickModierContactInfo={props.onClickModierContactInfo}
              onClickModeGestionDroit={props.onClickModeGestionDroit}
              onChangeNewPassword={props.onChangeNewPassword}
              onChangeConfirmPassword={props.onChangeConfirmPassword}
              submitInfo={props.submitInfo}
              showModalInfo={props.showModalInfo}
              closeModalInfo={props.closeModalInfo}
              validateName={props.validateName}
              isInvalidMail={props.isInvalidMail}
              updateCompany={props.updateCompany}
              isInvalidMailCompany={props.isInvalidMailCompany}
              onChangeInfoCompany={props.onChangeInfoCompany}
              validateDirection={props.validateDirection}
              validateNation={props.validateNation}
              validateStreet={props.validateStreet}
              validateMail={props.validateMail}
              validateZipCode={props.validateZipCode}
            />
          ) : (
            <GestionDroitOrganism
              user={props.user}
              listUserAdmin={props.listUserAdmin}
              onChangeEmailAdmin={props.onChangeEmailAdmin}
              isInvalidMailAdmin={props.isInvalidMailAdmin}
              addAdmin={props.addAdmin}
              validateNameDroit={props.validateNameDroit}
              showModalInfoDroit={props.showModalInfoDroit}
              closeModalInfoDroit={props.closeModalInfoDroit}
              onClickDeleteAccount={props.onClickDeleteAccount}
              onChangeText={props.onChangeText}
              diasbledButtonDelete={props.diasbledButtonDelete}
            />
          )}
        </Col>
      </Row>
    </Modal>
  );
}
