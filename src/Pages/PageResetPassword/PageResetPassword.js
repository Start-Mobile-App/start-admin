import React, { useState } from 'react';
import { ResetPasswordTemplate } from '../../Templates';
import { apiResetPassword } from '../../Api/Password';

export default function PageResetPassword (props) {
  const [isInvalidNewPassword, setInvalidNewPassword] = useState(false);
  const [isInvalidConfirmPassword, setInvalidConfirmPassword] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [validateName, setValidateName] = useState({
    validate: false,
    error: null
  });
  const [ValidationPassword, setValidationPassword] = useState([
    false,
    false,
    false,
    false,
    false
  ]);
  function onChangeNewPassword (value) {
    setNewPassword(value);
    const myVar = { ...ValidationPassword };
    myVar[0] = value.length >= 8;
    myVar[1] = hasUperCase(value);
    myVar[2] = hasLowerCase(value);
    myVar[3] = hasNumber(value);
    myVar[4] = hasSpecialCaracter(value);
    setValidationPassword(myVar);
  }
  function onChangeConfirmPassword (value) {
    setConfirmPassword(value);
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
  function Verification () {
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
      setInvalidNewPassword(true);
      setValidateName({
        validate: false,
        error: '*Format invalide'
      });
    }
    if (newPassword === '' || newPassword === null) {
      setValidateName({
        validate: false,
        error: '*Champ requis'
      });
      setInvalidNewPassword(true);
    } else {
      setInvalidNewPassword(false);
    }
    if (confirmPassword === '' || confirmPassword === null) {
      setValidateName({
        validate: false,
        error: '*Champ requis'
      });
      setInvalidConfirmPassword(true);
    } else {
      setInvalidConfirmPassword(false);
    }
    if (
      newPassword != '' &&
      confirmPassword != '' &&
      newPassword === confirmPassword &&
      conditions == true
    ) {
      ChangePassword();
    } else if (
      newPassword != '' &&
      confirmPassword != '' &&
      newPassword != confirmPassword
    ) {
      setValidateName({
        validate: false,
        error: '*Les deux mots de passe ne sont pas conforme'
      });
    }
  }
  async function ChangePassword () {
    const response = await apiResetPassword(props.match.params.id, newPassword);
    response.json().then(data => {
      if (data.statusCode === 200) {
        props.history.push('/');
      } else if (data.statusCode === 400) {
        if (data.message === 'link not valid') {
          setValidateName({
            validate: false,
            error: '*Lien non valide'
          });
        }
      }
    });
  }
  return (
    <div className='ForgetPasswordPage-container'>
      <ResetPasswordTemplate
        onChangeNewPassword={onChangeNewPassword}
        onChangeConfirmPassword={onChangeConfirmPassword}
        isInvalidNewPassword={isInvalidNewPassword}
        isInvalidConfirmPassword={isInvalidConfirmPassword}
        ChangePassword={Verification}
        validateName={validateName}
      />
    </div>
  );
}
