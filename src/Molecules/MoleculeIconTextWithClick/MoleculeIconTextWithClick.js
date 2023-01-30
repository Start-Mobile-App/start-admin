import React from 'react';
import { PropTypes } from 'prop-types';

MoleculeIconTextWithClick.defaultProps = {
  icon: null,
  text: null,
  classNameContainer: '',
  onClick: null
};
MoleculeIconTextWithClick.prototypes = {
  icon: PropTypes.element,
  text: PropTypes.element,
  onClick: PropTypes.func
};

export default function MoleculeIconTextWithClick (props) {
  return (
    <div onClick={props.onClick} className={props.classNameContainer}>
      <div className='MoleculeIconText-Icon'>{props.icon}</div>
      {props.text}
    </div>
  );
}
