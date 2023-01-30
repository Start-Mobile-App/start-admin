import React from 'react';
import { Form } from 'react-bootstrap';
AtomInput.defaultProps = {
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
  feedback: null,
  feedbackTooltip: null,
  type: null,
  label: '',
  options: [],
  onKeyPress: null
};
export default function AtomInput (props) {
  function getPlaceholder () {
    const options = [
      <option key='palceholder' hidden value>
        {props.placeholder}
      </option>
    ];
    props.options !== null &&
      props.options.map(element => {
        options.push(element);
      });
    return options;
  }
  function intFunction (value) {
    if (!isNaN(value)) {
      return props.onChange(value);
    }
  }
  return (
    <div
      className={
        props.as === 'select'
          ? 'AtomSelect'
          : props.as === 'input' || props.as === 'number'
          ? 'AtomInput'
          : props.as === 'textarea'
          ? 'AtomInput'
          : props.as === 'checkbox'
          ? 'AtomCheckbox'
          : null
      }
    >
      {props.as === 'select' ? (
        <Form.Control
          as='select'
          disabled={props.disabled}
          isInvalid={props.isInvalid}
          isValid={props.isValid}
          className={props.className}
          onChange={props.onChange}
          readOnly={props.readOnly}
          value={props.value}
          bsPrefix={props.bsPrefix}
          id={props.id}
          defaultValue={props.defaultValue}
          ref={props.ref}
          autofocus={props.autofocus}
        >
          {props.placeholder != null ? getPlaceholder() : props.options}
        </Form.Control>
      ) : props.as === 'input' ||
        props.as === 'number' ||
        props.as === 'textarea' ? (
        <Form.Control
          as={props.as === 'number' ? 'input' : props.as}
          disabled={props.disabled}
          isInvalid={props.isInvalid}
          isValid={props.isValid}
          className={props.className}
          onChange={
            props.as === 'number'
              ? e => intFunction(e.target.value)
              : props.onChange
          }
          readOnly={props.readOnly}
          value={props.value}
          bsPrefix={props.bsPrefix}
          id={props.id}
          type={props.type === 'password' ? props.type : null}
          placeholder={props.placeholder}
          defaultValue={props.defaultValue}
          onKeyPress={props.onKeyPress}
          ref={props.ref}
        />
      ) : props.as === 'checkbox' ? (
        <Form.Check
          as='input'
          disabled={props.disabled}
          isInvalid={props.isInvalid}
          isValid={props.isValid}
          onClick={props.onClick}
          checked={props.checked}
          bsPrefix={props.bsPrefix}
          id={props.id}
          feedback={props.feedback}
          feedbackTooltip={props.feedbackTooltip}
          label={props.label}
          type={props.type}
          custom
          ref={props.ref}
        />
      ) : null}
    </div>
  );
}
