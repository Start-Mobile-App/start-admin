import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
AtomButton.defaultProps = {
  active: false,
  disabled: false,
  className: 'btn_default_style',
  onClick: null,
  type: null,
  bsPrefix: 'btn_classic_style',
  href: null
};
function AtomButton (props) {
  return (
    <Button
      active={props.active}
      disabled={props.disabled}
      className={props.className}
      onClick={props.onClick}
      type={props.type}
      bsPrefix={props.bsPrefix}
      href={props.href}
    >
      {props.children}
    </Button>
  );
}
export default AtomButton;
