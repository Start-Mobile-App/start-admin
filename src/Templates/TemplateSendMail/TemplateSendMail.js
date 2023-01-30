import React from 'react';
import { Input, Button } from '../../Atoms';
import { SendMailCardOrganism } from '../../Organisms';
import { Logo } from '../../Molecules';

export default function TemplateSendMail (props) {
  return (
    <div className='ForgetPasswordTemplate-container'>
      <div className='flip-horizontal-top'>
        <Logo />
      </div>
      <div className='ForgetPassword-Card-Container scale-up-center'>
        <div className={'scale-in-center'}>
          <SendMailCardOrganism {...props} />
        </div>
      </div>
    </div>
  );
}
