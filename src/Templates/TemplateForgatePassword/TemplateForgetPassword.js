import React from 'react';
import { Input, Button } from '../../Atoms';
import { ForgetPasswordOrganism } from '../../Organisms';
import { Logo } from '../../Molecules';

export default function TemplateForgetPassword (props) {
  return (
    <div className='ForgetPasswordTemplate-container'>
      <div className='flip-horizontal-top'>
        <Logo />
      </div>
      <div className='ForgetPassword-Card-Container scale-up-center'>
        <ForgetPasswordOrganism {...props} />
      </div>
    </div>
  );
}
