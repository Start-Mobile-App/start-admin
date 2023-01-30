import React, { Component } from 'react';
import { Input, Text } from '../../Atoms';
AtomItemDropDown.defaultProps = {
  className: 'item_dropdown_default_style',
  item: 'test',
  onClick: null
};
export default function AtomItemDropDown (props) {
  return (
    <div className={props.className} onClick={props.onClick}>
      {props.item}
    </div>
  );
}
