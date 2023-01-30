import React from 'react';
import { Input, Button } from '../../Atoms';
import { ChangePasswordOrganism } from '../../Organisms';
import { Logo } from '../../Molecules';

export default function TemplateChangePassword (props) {
  return (
    <div className='LoginTemplate_Container'>
      <div className='TemplateLogin_Content'>
        <Logo />
        <div className='scale-in-center'>
          <ChangePasswordOrganism
            changeOldPassword={props.changeOldPassword}
            changePassword={props.changePassword}
            changeConfirmPassword={props.changeConfirmPassword}
            disabledLogin={props.disabledLogin}
            isInvalidPassword={props.isInvalidPassword}
            isInvalidConfirmPassword={props.isInvalidConfirmPassword}
            verifAndChange={props.verifAndChange}
            validateName={props.validateName}
            isInvalidOldPassword={props.isInvalidOldPassword}
          />
        </div>
      </div>
    </div>
  );
}
