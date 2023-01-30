import React from 'react';
import { Input, Button } from '../../Atoms';
import { ResetPasswordCardOrganism } from '../../Organisms';
import { Logo } from '../../Molecules';

export default function TemplateResetPassword (props) {
  return (
    <div className='LoginTemplate_Container'>
      <div className='TemplateLogin_Content'>
        <Logo />
        <div className='scale-in-center'>
          <ResetPasswordCardOrganism
            onChangeNewPassword={props.onChangeNewPassword}
            onChangeConfirmPassword={props.onChangeConfirmPassword}
            isInvalidNewPassword={props.isInvalidNewPassword}
            isInvalidConfirmPassword={props.isInvalidConfirmPassword}
            ChangePassword={props.ChangePassword}
            validateName={props.validateName}
          />
        </div>
      </div>
    </div>
  );
}
