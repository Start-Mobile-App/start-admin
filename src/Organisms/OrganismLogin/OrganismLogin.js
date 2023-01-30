import React from 'react';
import { Text, Input, Button } from '../../Atoms';
import { InputMolecule } from '../../Molecules';
import { Link } from 'react-router-dom';
import { Row } from 'react-bootstrap';
OrganismLogin.defaultProps = {
  onChangeEmail: null,
  onChangePassword: null,
  Login: null,
  SignUp: null,
  isInvalidEmail: false,
  isInvalidPassword: false
};

function OrganismLogin (props) {
  return (
    <div className={'OrganismAuth_Container'}>
      <Text className={'Connexion_OrganismLogin'}>Connexion</Text>
      <InputMolecule
        className={'InputEmail_OrganismLogin'}
        type={'email'}
        as={'input'}
        placeholder={'Email'}
        onChange={e => props.onChangeEmail(e.target.value)}
        isInvalid={props.isInvalidEmail}
      />
      {(props.isInvalidPassword || props.isInvalidEmail) && (
        <Text className='error_label label_connexion_error'>
          {'* Email ou mot de passe erronés'}
        </Text>
      )}
      <InputMolecule
        className={'InputPassword_OrganismLogin'}
        type={'password'}
        as={'input'}
        placeholder={'Mot de passe'}
        onChange={e => props.onChangePassword(e.target.value)}
        isInvalid={props.isInvalidPassword}
      />
      <Link to='/forgetpassword' className={'Link_ForgetPassword'}>
        {'Mot de passe oublié ?'}
      </Link>
      <Row className='Checkbox__OrganismLogin'>
        <InputMolecule
          as='checkbox'
          id={'1234'}
          type='checkbox'
          isInvalid={props.isInvalidChecked}
          onClick={() => props.setChecked(!props.checked)}
          checked={props.checked}
        />
        <Text className='label_OrganismLogin'>
          En me connectant j’accepte les
        </Text>
        &nbsp;
        <Text
          className='label_link_OrganismLogin'
          onClick={() => props.goToCgu()}
        >
          cgu
        </Text>
        &nbsp;
        <Text className='label_OrganismLogin'>et</Text>
        &nbsp;
        <Text
          className='label_link_OrganismLogin'
          onClick={() => props.goToRgpd()}
        >
          rgpd
        </Text>
      </Row>
      {props.isInvalidChecked && props.checked !== true && (
        <Text className='error_label label_connexion_error'>
          {'* Veuillez accepter les CGU et RGPD'}
        </Text>
      )}
      <Button
        bsPrefix='btn_SeConnecter_OrganismLogin'
        onClick={() => props.Login()}
      >
        Se connecter
      </Button>
    </div>
  );
}

export default OrganismLogin;
