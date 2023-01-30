import { React, useState } from 'react';
import { ForgertPasswordTemplate } from '../../Templates';
import { apiSendEmailResetPassword } from '../../Api/Password';

export default function PageForgetPassword () {
  const [mail, setMail] = useState('');
  const [disabledEnvoi, setDisabledEnvoi] = useState(false);
  const [isInvalidEmail, setInvalidEmail] = useState(false);
  function onChangeEmail (value) {
    setMail(value);
  }
  async function onClickEnvoyer () {
    setDisabledEnvoi(true);
    const response = await apiSendEmailResetPassword(mail);
    response.json().then(data => {
      if (data.statusCode === 200) {
        window.location = '/forgetpassword/SendMail';
      } else {
        setDisabledEnvoi(false);
        setInvalidEmail(true);
      }
    });
  }
  return (
    <div className='ForgetPasswordPage-container'>
      <ForgertPasswordTemplate
        onChangeEmail={onChangeEmail}
        isInvalidEmail={isInvalidEmail}
        onClickEnvoyer={onClickEnvoyer}
        disabledEnvoyer={disabledEnvoi}
      />
    </div>
  );
}
