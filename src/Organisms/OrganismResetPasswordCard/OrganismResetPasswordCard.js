import React from 'react';
import { Input, Button, Text } from '../../Atoms';
export default function OrganismResetPasswordCard (props) {
  return (
    <div className='OrganismAuth_Container'>
      <Text className={'Connexion_OrganismLogin'}>
        Réinitialisation <br></br>mot de passe
      </Text>
      <Input
        className='InputPassword_OrganismLogin'
        placeholder='Nouveau mot de passe'
        type={'password'}
        onChange={e => props.onChangeNewPassword(e.target.value)}
      />
      {props.validateName && props.isInvalidNewPassword === true && (
        <Text className='error_label label_connexion_error margin-top'>
          {props.validateName.error}
        </Text>
      )}
      {props.validateName &&
        props.validateName.error === '*Format invalide' && (
          <Text className='error_label label_connexion_error margin-top'>
            {props.validateName.error}
          </Text>
        )}
      <Input
        className='InputPassword_OrganismLogin'
        type={'password'}
        placeholder={'Confirmer mot de passe'}
        onChange={e => props.onChangeConfirmPassword(e.target.value)}
      />
      {props.validateName && props.isInvalidConfirmPassword === true && (
        <Text className='error_label label_connexion_error margin-top'>
          {props.validateName.error}
        </Text>
      )}
      {props.isInvalidNewPassword === false &&
        props.isInvalidConfirmPassword === false &&
        props.validateName &&
        props.validateName.error ===
          '*Les deux mots de passe ne sont pas conforme' && (
          <Text className='error_label label_connexion_error margin-top'>
            {'Les deux mots de passe doivent être identique'}
          </Text>
        )}
      <Button
        bsPrefix='btn_SeConnecter_OrganismLogin'
        onClick={props.ChangePassword}
      >
        Se connecter
      </Button>
    </div>
  );
}
