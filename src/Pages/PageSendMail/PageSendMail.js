import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SendMailTemplate } from '../../Templates';

export default function PageSendMail () {
  function onClickRetour () {
    window.location = '/';
  }
  return (
    <div className='ForgetPasswordPage-container'>
      <SendMailTemplate onClickRetour={onClickRetour} />
    </div>
  );
}
