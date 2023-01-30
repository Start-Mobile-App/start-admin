import React from 'react';
import { Icon, Button, Img } from '../../Atoms';
import Vector from '../../assets/Vector.png';

export default function OrganismSendMailCard (props) {
  return (
    <div>
      <div className='ForgetPassword-Card-Tittle'>Mot de passe oublié</div>
      <div className='ForgetPassword-Card-Description'>
        <Img
          src={Vector}
          width={'38px'}
          className={'vectorLog'}
          height={'37px'}
        />
        <br></br>
        Email envoyé ! rendez-vous sur votre boîte mail pour obtenir le lien de
        réinitialisation de mot de passe .
      </div>
      <Button
        bsPrefix='ForgetPassword-Card-Button'
        onClick={props.onClickRetour}
      >
        Retour
      </Button>
    </div>
  );
}
