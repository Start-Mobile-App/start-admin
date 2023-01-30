import React from 'react';
import { Input, Text } from '../../Atoms';
import PropTypes from 'prop-types';
MoleculeInput.defaultProps = {
  as: 'input',
  disabled: false,
  isInvalid: false,
  isValid: false,
  className: null,
  onChange: null,
  readOnly: false,
  value: null,
  bsPrefix: null,
  id: null,
  placeholder: null,
  defaultValue: null,
  onClick: null,
  checked: null,
  feedback: false,
  feedbackTooltip: false,
  type: null,
  label: '',
  containerClassname: 'containerMoleculeInput',
  labelClassName: null,
  inputLabel: null,
  icons: null,
  ErrorMsg: null,
  ErrorMsgClassName: null,
  options: null,
  onKeyPress: null
};
MoleculeInput.propTypes = {
  icons: PropTypes.arrayOf(PropTypes.elementType)
};
export default function MoleculeInput (props) {
  return (
    <div className={props.containerClassname}>
      {props.inputLabel !== null ? (
        <Text className={props.labelClassName}>{props.inputLabel}</Text>
      ) : null}
      {props.icons !== null ? (
        <div style={{ position: 'relative' }}>
          <Input
            ref={props.ref}
            as={props.as}
            disabled={props.disabled}
            isInvalid={props.isInvalid}
            isValid={props.isValid}
            className={props.className}
            onChange={props.onChange}
            readOnly={props.readOnly}
            value={props.value}
            bsPrefix={props.bsPrefix}
            id={props.id}
            placeholder={props.placeholder}
            defaultValue={props.defaultValue}
            onClick={props.onClick}
            checked={props.checked}
            feedback={props.feedback}
            feedbackTooltip={props.feedbackTooltip}
            type={props.type}
            label={props.label}
            options={props.options}
            onKeyPress={props.onKeyPress}
          />
          {props.icons !== null ? props.icons.map(element => element) : null}
        </div>
      ) : (
        <Input
          ref={props.ref}
          as={props.as}
          disabled={props.disabled}
          isInvalid={props.isInvalid}
          isValid={props.isValid}
          className={props.className}
          onChange={props.onChange}
          readOnly={props.readOnly}
          value={props.value}
          bsPrefix={props.bsPrefix}
          id={props.id}
          placeholder={props.placeholder}
          defaultValue={props.defaultValue}
          onClick={props.onClick}
          checked={props.checked}
          feedback={props.feedback}
          feedbackTooltip={props.feedbackTooltip}
          type={props.type}
          label={props.label}
          options={props.options}
          onKeyPress={props.onKeyPress}
        />
      )}

      {props.ErrorMsg !== null ? (
        <Text className={props.ErrorMsgClassName}>{props.ErrorMsg}</Text>
      ) : null}
    </div>
  );
}
