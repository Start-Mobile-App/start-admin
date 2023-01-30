import React from 'react';
import { Text, Input, Button } from '../../Atoms';

export default function OrganismChangePassword (props) {
  return (
    <div className='OrganismAuth_Container'>
      <Text className={'Connexion_OrganismLogin'}>
        Modification <br></br>mot de passe
      </Text>
      <Input
        className='InputPassword_OrganismLogin'
        placeholder='Ancien mot de passe'
        type={'password'}
        onChange={e => props.changeOldPassword(e.target.value)}
      />
      {props.validateName && props.isInvalidOldPassword === true && (
        <Text className='error_label label_connexion_error margin-top'>
          {props.validateName.error}
        </Text>
      )}
      {props.validateName &&
        props.validateName.validate === true &&
        props.validateName.error === 'old mdp not valid !' && (
          <Text className='error_label label_connexion_error margin-top'>
            {'*Ancien mot de passe est incorrect'}
          </Text>
        )}

      <Input
        className='InputPassword_OrganismLogin'
        placeholder='Nouveau mot de passe'
        type={'password'}
        onChange={e => props.changePassword(e.target.value)}
      />
      {props.validateName && props.isInvalidPassword === true && (
        <Text className='error_label label_connexion_error margin-top'>
          {props.validateName.error}
        </Text>
      )}
      {props.validateName &&
        props.validateName.error === '*Format invalide' && (
          <Text className='error_label label_connexion_error margin-top'>
            {'*Format invalide'}
          </Text>
        )}
      <Input
        className='InputPassword_OrganismLogin'
        placeholder='Confirmer mot de passe'
        type={'password'}
        onChange={e => props.changeConfirmPassword(e.target.value)}
      />
      {props.validateName && props.isInvalidConfirmPassword === true && (
        <Text className='error_label label_connexion_error margin-top'>
          {props.validateName.error}
        </Text>
      )}
      {props.validateName &&
        props.validateName.error === 'user not found !' && (
          <Text className='error_label label_connexion_error margin-top'>
            {'*Compte inexistant'}
          </Text>
        )}
      {props.isInvalidPassword === false &&
        props.isInvalidConfirmPassword === false &&
        props.validateName &&
        props.validateName.error ===
          'Les deux mots de passe ne sont pas conforme' && (
          <Text className='error_label label_connexion_error margin-top'>
            {'*Les deux mots de passe doivent être identique'}
          </Text>
        )}
      {props.validateName &&
        props.validateName.validate === true &&
        props.validateName.error === 'link not valid' && (
          <Text className='error_label label_connexion_error margin-top'>
            {'*Lien non valide'}
          </Text>
        )}
      <Button
        bsPrefix='btn_SeConnecter_OrganismLogin'
        onClick={props.verifAndChange}
      >
        Se connecter
      </Button>
    </div>
  );
}
