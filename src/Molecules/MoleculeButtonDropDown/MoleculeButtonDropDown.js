import React, { Component } from 'react';
import { ItemDropDown } from '../../Atoms';
import PropTypes from 'prop-types';

MoleculeButtonDropDown.defaultProps = {
  ContainerDropdownClassName: 'dropdown',
  ButtonValue: 'Nouveau',
  ButtonValueClassName: 'Button_DropDown',
  ButtonContainerClassName: 'dropdown-select',
  ButtonContentClassName: 'select',
  ListDropDown: [],
  classNameDropDown: 'dropdown_list',
  icon: null,
  positionLeft: true
};
MoleculeButtonDropDown.propTypes = {
  icon: PropTypes.elementType
};
export default function MoleculeButtonDropDown (props) {
  return (
    <div className={props.ContainerDropdownClassName}>
      <div className={props.ButtonContainerClassName}>
        <span className={props.ButtonContentClassName}>
          {props.positionLeft == true ? props.icon : null}
          <div className={props.ButtonValueClassName}>{props.ButtonValue}</div>
          {props.positionLeft == false ? props.icon : null}
        </span>
      </div>
      {props.ListDropDown.length != 0 ? (
        <div className={props.classNameDropDown}>
          {props.ListDropDown.map(element => (
            <ItemDropDown
              onClick={element.onClick}
              className={element.className}
              item={element.item}
              key={element.key}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
