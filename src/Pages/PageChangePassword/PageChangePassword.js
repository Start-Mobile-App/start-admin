import { ChangePasswordTemplate } from '../../Templates';
import { apiChangePassword } from '../../Api/Password';
import React, { useState } from 'react';
export default function PageChangePassword (props) {
  const [oldPassword, onChangeOldPassword] = useState('');
  const [password, onChangePassword] = useState('');
  const [confirmPassword, onChangeConfirmPassword] = useState('');
  const [isInvalidPassword, setInvalidPassword] = useState(false);
  const [isInvalidOldPassword, setInvalidOldPassword] = useState(false);
  const [isInvalidConfirmPassword, setInvalidConfirmPassword] = useState(false);
  const [disabledLogin, setDisabledLogin] = useState(false);
  const [ValidationPassword, setValidationPassword] = useState([
    false,
    false,
    false,
    false,
    false
  ]);
  const [validateName, setValidateName] = useState({
    validate: false,
    error: null
  });

  function changePassword (value) {
    onChangePassword(value);
    const myVar = { ...ValidationPassword };
    myVar[0] = value.length >= 8;
    myVar[1] = hasUperCase(value);
    myVar[2] = hasLowerCase(value);
    myVar[3] = hasNumber(value);
    myVar[4] = hasSpecialCaracter(value);
    setValidationPassword(myVar);
  }
  function changeOldPassword (value) {
    onChangeOldPassword(value);
  }
  function changeConfirmPassword (value) {
    onChangeConfirmPassword(value);
  }
  function hasUperCase (str) {
    return /[A-Z]/.test(str);
  }
  function hasLowerCase (str) {
    return /[a-z]/.test(str);
  }
  function hasSpecialCaracter (str) {
    return /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(str);
  }
  function hasNumber (str) {
    return /[0-9]/.test(str);
  }
  function verifAndChange () {
    let conditions = false;
    if (
      ValidationPassword[0] == true &&
      ValidationPassword[1] == true &&
      ValidationPassword[2] == true &&
      ValidationPassword[3] == true &&
      ValidationPassword[4] == true
    ) {
      conditions = true;
    } else {
      setInvalidPassword(true);
      setValidateName({
        validate: false,
        error: '*Format invalide'
      });
    }
    if (
      oldPassword === '' ||
      oldPassword === null ||
      oldPassword === undefined
    ) {
      setInvalidOldPassword(true);
      setValidateName({
        validate: false,
        error: '*Champ requis'
      });
    } else {
      setInvalidOldPassword(false);
    }
    if (password === '' || password === null) {
      setInvalidPassword(true);
      setValidateName({
        validate: false,
        error: '*Champ requis'
      });
    } else {
      setInvalidPassword(false);
    }
    if (confirmPassword === '' || confirmPassword === null) {
      setInvalidConfirmPassword(true);
      setValidateName({
        validate: false,
        error: '*Champ requis'
      });
    } else {
      setInvalidConfirmPassword(false);
    }
    if (
      password != '' &&
      confirmPassword != '' &&
      password === confirmPassword &&
      conditions == true
    ) {
      ChangePassword();
    } else if (
      password != '' &&
      confirmPassword != '' &&
      password != confirmPassword
    ) {
      setValidateName({
        validate: false,
        error: 'Les deux mots de passe ne sont pas conforme'
      });
      setInvalidConfirmPassword(false);
    }
  }
  function validateSpace (value) {
    if (!value.replace(/\s/g, '').length) {
      return false;
    }
    return true;
  }
  async function ChangePassword () {
    if (oldPassword != '') {
      const response = await apiChangePassword(
        oldPassword,
        password,
        confirmPassword,
        props.match.params.id
      );
      response.json().then(data => {
        if (data.statusCode === 200) {
          props.history.push('/');
        } else {
          setValidateName({
            validate: true,
            error: data.message
          });
        }
      });
    }
  }
  return (
    <ChangePasswordTemplate
      changeOldPassword={changeOldPassword}
      changePassword={changePassword}
      changeConfirmPassword={changeConfirmPassword}
      disabledLogin={disabledLogin}
      isInvalidPassword={isInvalidPassword}
      isInvalidConfirmPassword={isInvalidConfirmPassword}
      verifAndChange={verifAndChange}
      validateName={validateName}
      isInvalidOldPassword={isInvalidOldPassword}
    />
  );
}
