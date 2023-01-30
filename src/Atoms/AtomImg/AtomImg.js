import React from 'react';
import PropTypes from 'prop-types';

AtomImg.defaultProps = {
  src: '',
  alt: '',
  onclick: null,
  className: 'img_default_style',
  width: '90px',
  height: '90px'
};

export default function AtomImg (props) {
  return (
    <img
      src={props.src}
      alt={props.alt}
      onClick={props.onclick}
      className={props.className}
      width={props.width}
      height={props.height}
    />
  );
}
