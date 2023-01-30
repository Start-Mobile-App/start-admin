import React from 'react';
import { LoginOrganism } from '../../Organisms';
import { Logo } from '../../Molecules';

function TemplateLogin (props) {
  return (
    <div className='LoginTemplate_Container'>
      <div className='TemplateLogin_Content'>
        <Logo />
        <div className='scale-in-center'>
          <LoginOrganism {...props} />
        </div>
      </div>
    </div>
  );
}

export default TemplateLogin;
