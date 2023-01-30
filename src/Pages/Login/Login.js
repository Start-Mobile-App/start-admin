import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../../Redux/actions/authActions';
import { LoginTemplate } from '../../Templates';
import { apiLogin } from '../../Api/Login';
import { cguURL } from '../../Config/Config';

function Login (props) {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [isInvalid, setInvalid] = useState({
    email: false,
    password: false,
    checked: false
  });
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();

  function validateEmail (email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  function validate () {
    let bValidate = isInvalid;
    if (!validateEmail(email) || email === '') {
      bValidate = { ...bValidate, email: true };
    } else {
      bValidate = { ...bValidate, email: false };
    }
    if (password === '') {
      bValidate = { ...bValidate, password: true };
    } else {
      bValidate = { ...bValidate, password: false };
    }
    if (!checked) {
      bValidate = { ...bValidate, checked: true };
    } else {
      bValidate = { ...bValidate, checked: false };
    }
    setInvalid(bValidate);
    return bValidate;
  }

  async function login () {
    const result = validate();
    if (
      result.email === false &&
      result.password === false &&
      result.checked === false
    ) {
      const response = await apiLogin(email, password);
      response.json().then(data => {
        if (data.statusCode === 200 && data.role === 'administrator') {
          dispatch(setUser(data));
          props.history.push('/');
        } else {
          setInvalid({ ...isInvalid, email: true, password: true });
        }
      });
    }
  }
  async function goToCgu () {
    window.open(cguURL);
  }
  async function goToRgpd () {
    props.history.push('/*');
  }
  return (
    <div>
      <LoginTemplate
        Login={login}
        onChangeEmail={onChangeEmail}
        onChangePassword={onChangePassword}
        isInvalidEmail={isInvalid.email}
        isInvalidPassword={isInvalid.password}
        setChecked={setChecked}
        checked={checked}
        isInvalidChecked={isInvalid.checked}
        goToCgu={goToCgu}
        goToRgpd={goToRgpd}
      />
    </div>
  );
}

export default Login;
