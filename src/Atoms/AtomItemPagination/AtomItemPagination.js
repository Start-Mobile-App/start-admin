import React, { Component } from 'react';
import { Input, Text, Icon } from '../../Atoms';
import PropTypes from 'prop-types';

AtomItemPagination.defaultProps = {
  className: 'ItemPagination',
  onClick: null,
  NumberClassName: 'NumberItemPagination',
  page: null,
  icon: null
};
AtomItemPagination.propTypes = {
  icon: PropTypes.elementType
};
export default function AtomItemPagination (props) {
  return (
    <div className={props.className} onClick={props.onClick}>
      <span className={props.NumberClassName}>
        {props.icon != null ? props.icon : props.page}
      </span>
    </div>
  );
}
