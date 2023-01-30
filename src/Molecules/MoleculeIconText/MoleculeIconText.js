import React from 'react';
import { PropTypes } from 'prop-types';

MoleculeIconText.defaultProps = {
  icon: null,
  text: null,
  classNameContainer: ''
};
MoleculeIconText.prototypes = {
  icon: PropTypes.element,
  text: PropTypes.element
};

export default function MoleculeIconText (props) {
  return (
    <div className={props.classNameContainer}>
      <div className='MoleculeIconText-Icon'>{props.icon}</div>
      {props.text}
    </div>
  );
}
