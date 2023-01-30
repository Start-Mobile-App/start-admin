import React from 'react';
import { Text, Input, Button } from '../../Atoms';
import { ModalInfoOrganism } from '../../Organisms';
export default function OrganismInfo (props) {
  return (
    <div>
      <div className='OrganismInfo_Container' style={props.style}>
        {props.ModeContactInfo == 'Edit' ? (
          <div>
            <Input
              className='Input_OrganismInfo'
              value={props.Info.lastName}
              onChange={e => props.onChangeInfo('lastName', e.target.value)}
            />
            <Input
              className='Input_OrganismInfo'
              value={props.Info.firstName}
              onChange={e => props.onChangeInfo('firstName', e.target.value)}
            />
            <Input
              className='Input_OrganismInfo'
              value={props.Info.mail}
              onChange={e => props.onChangeInfo('mail', e.target.value)}
            />
            {props.validateName &&
              props.isInvalidMail === true &&
              props.validateName.error == '*Champ invalide' && (
                <Text className='error_label label_account_error margin-top'>
                  {props.validateName.error}
                </Text>
              )}
            {props.validateName &&
              props.validateName.error === 'mail already exist!' && (
                <Text className='error_label label_account_error margin-top'>
                  {'*Email existant'}
                </Text>
              )}
            <Input
              className='Input_OrganismInfo'
              value={props.Info.tel}
              onChange={e => props.onChangeInfo('tel', e.target.value)}
            />
            {props.validateName &&
              props.validateName.error === 'bad phone number input!' && (
                <Text className='error_label label_account_error margin-top'>
                  {'*Champ invalide'}
                </Text>
              )}
            <Input
              className='Input_OrganismInfo'
              value={props.Info.password}
              onChange={e => props.onChangeInfo('password', e.target.value)}
              placeholder={'Mot de passe'}
              type='password'
            />
            {props.validateName &&
              props.validateName.error === 'old mdp not valid !' && (
                <Text className='error_label label_account_error margin-top'>
                  {'*Ancien mot de passe incorrecte'}
                </Text>
              )}
            <Input
              className={'Input_OrganismInfo'}
              type={'password'}
              placeholder={'Nouveau mot de passe'}
              value={props.newPassword}
              onChange={e => props.onChangeNewPassword(e.target.value)}
            />
            {props.validateName &&
              props.validateName.error === 'password invalide' && (
                <Text className='error_label label_account_error margin-top'>
                  {'*Mot de passe invalide'}
                </Text>
              )}
            <Input
              isInvalid={props.isInvalidConfirmPassword}
              value={props.confirmPassword}
              className='Input_OrganismInfo'
              type={'password'}
              placeholder={'Confirmer mot de passe'}
              onChange={e => props.onChangeConfirmPassword(e.target.value)}
            />
            {props.validateName &&
              props.validateName.error === 'check confirm password' && (
                <Text className='error_label label_account_error margin-top'>
                  {'*Les deux mots de passe doivent être identique'}
                </Text>
              )}
            <div className='container-btn-validation'>
              <Button
                className='btn-submit-account'
                onClick={() => props.submitInfo()}
              >
                Valider
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <div className='container-description-info'>
              <Text className='Title_OrganismInfo'>Prénom</Text>
              <Text className='Info_OrganismInfo'>
                {props.Info && props.Info.firstName}
              </Text>
            </div>
            <div className='container-description-info'>
              <Text className='Title_OrganismInfo'>nom</Text>
              <Text className='Info_OrganismInfo'>
                {props.Info && props.Info.lastName}
              </Text>
            </div>
            <div className='container-description-info'>
              <Text className='Title_OrganismInfo'>EMAIL</Text>
              <Text className='Info_OrganismInfo'>
                {props.Info && props.Info.mail}
              </Text>
            </div>
            <div className='container-description-info'>
              <Text className='Title_OrganismInfo'>Téléphone</Text>
              <Text className='Info_OrganismInfo'>
                {props.Info && props.Info.tel ? props.Info.tel : ''}
              </Text>
            </div>
            <div className='container-description-info'>
              <Text className='Title_OrganismInfo'>Mot de passe</Text>
              <Text className='Info_OrganismInfo'>
                {props.Info && props.Info.password ? '*****' : ''}
              </Text>
            </div>
            <div className='container-btn-validation'>
              <Button
                className='btn-update-account'
                onClick={() => props.onClickModierContactInfo()}
              >
                Modifier
              </Button>
            </div>
          </div>
        )}
      </div>
      <div
        className='OrganismInfo_Container container-space'
        style={props.style}
      >
        {props.ModeGestionDroit === 'Edit' ? (
          <div>
            <Input
              className='Input_OrganismInfo'
              value={props.ContactInfo.mail}
              onChange={e => props.onChangeInfoCompany('mail', e.target.value)}
            />
            {props.validateName &&
              props.isInvalidMailCompany === true &&
              props.validateName.error == '*Champ invalide' && (
                <Text className='error_label label_account_error margin-top'>
                  {props.validateName.error}
                </Text>
              )}
            {props.validateName &&
              props.validateName.error === 'mail already exist!' && (
                <Text className='error_label label_account_error margin-top'>
                  {'*Email existant'}
                </Text>
              )}
            {props.validateMail &&
              props.validateMail.error == '* Validez ce champ' && (
                <Text className='error_label label_account_error margin-top'>
                  {props.validateMail.error}
                </Text>
              )}
            <Input
              className='Input_OrganismInfo'
              value={props.ContactInfo.street}
              onChange={e =>
                props.onChangeInfoCompany('street', e.target.value)
              }
            />
            {props.validateStreet &&
              props.validateStreet.error == '* Validez ce champ' && (
                <Text className='error_label label_account_error margin-top'>
                  {props.validateStreet.error}
                </Text>
              )}
            <Input
              className='Input_OrganismInfo'
              value={props.ContactInfo.zipCode}
              onChange={e =>
                props.onChangeInfoCompany('zipCode', e.target.value)
              }
            />
            {props.validateZipCode &&
              props.validateZipCode.error == '* Validez ce champ' && (
                <Text className='error_label label_account_error margin-top'>
                  {props.validateZipCode.error}
                </Text>
              )}
            <Input
              className='Input_OrganismInfo'
              value={props.ContactInfo.direction}
              onChange={e =>
                props.onChangeInfoCompany('direction', e.target.value)
              }
            />
            {props.validateDirection &&
              props.validateDirection.error == '* Validez ce champ' && (
                <Text className='error_label label_account_error margin-top'>
                  {props.validateDirection.error}
                </Text>
              )}
            <Input
              className='Input_OrganismInfo'
              value={props.ContactInfo.nation}
              onChange={e =>
                props.onChangeInfoCompany('nation', e.target.value)
              }
            />
            {props.validateNation &&
              props.validateNation.error == '* Validez ce champ' && (
                <Text className='error_label label_account_error margin-top'>
                  {props.validateNation.error}
                </Text>
              )}
            <div className='container-btn-validation'>
              <Button
                className='btn-submit-account'
                onClick={() => props.updateCompany()}
              >
                Valider
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <div className='container-description-info'>
              <Text className='Title_OrganismInfo'>EMAIL</Text>
              <Text className='Info_OrganismInfo'>
                {props.ContactInfo && props.ContactInfo.mail}
              </Text>
            </div>
            <div className='container-description-info'>
              <Text className='Title_OrganismInfo'>Adresse de contact</Text>
              <Text className='Info_OrganismInfo'>
                {props.ContactInfo && props.ContactInfo.street} ,
                {props.ContactInfo && props.ContactInfo.zipCode}
                {props.ContactInfo && props.ContactInfo.direction},
                {props.ContactInfo && props.ContactInfo.nation}
              </Text>
            </div>
            <div className='container-btn-validation'>
              <Button
                className='btn-update-account'
                onClick={() => props.onClickModeGestionDroit()}
              >
                Modifier
              </Button>
            </div>
          </div>
        )}
      </div>
      <ModalInfoOrganism
        description={'Les modifications ont bien été enregistrées.'}
        closeModalInfo={props.closeModalInfo}
        sizeIcon='40px'
        classNamedescription={'info-description'}
        deleteIcon={true}
        colorIcon={'#00D98B'}
        iconName={'Success'}
        showModalInfo={props.showModalInfo}
        marginBottonIcon={'28px'}
      />
    </div>
  );
}
