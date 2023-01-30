import React from 'react';
import { Input, Button, Text } from '../../Atoms';
OrganismForgetPasswordCard.defaultProps = {
  onChangeEmail: null,
  isInvalidEmail: false,
  onClickEnvoyer: null,
  disabledEnvoyer: false
};
export default function OrganismForgetPasswordCard (props) {
  return (
    <div>
      <div className='ForgetPassword-Card-Tittle'>Mot de passe oublié</div>
      <div className='ForgetPassword-Card-Description'>
        Veuillez renseigner votre adresse mail d’utilisateur pour obtenir un
        lien de réinitialisation de mot de passe
      </div>
      <Input
        className='InputEmail_OrganismForgetPassword'
        placeholder='Email'
        onChange={e => props.onChangeEmail(e.target.value)}
        isInvalid={props.isInvalidEmail}
      />
      <Button
        bsPrefix='ForgetPassword-Card-Button'
        onClick={props.onClickEnvoyer}
        disabled={props.disabledEnvoyer}
      >
        Envoyer
      </Button>
    </div>
  );
}
