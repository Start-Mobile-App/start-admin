import React from 'react';

import { Icon } from '../Atoms';
import { InputMolecule } from '../Molecules';
import '../../src/style/main.scss';
export default {
  title: 'Design System/Molecules/Input',
  component: InputMolecule,
  argTypes: {
    as: {
      name: 'as',
      control: {
        type: 'select',
        options: ['input', 'number', 'select', 'textarea', 'checkbox']
      },
      table: {
        type: {
          summary: 'type of  control',
          detail:
            'type : String, value : (input,checkbox,textarea,select,number)'
        },
        defaultValue: { summary: 'input' }
      }
    },
    disabled: {
      name: 'disabled',
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'Make the control disabled',
          detail: 'type : Boolean'
        },
        defaultValue: { summary: 'false' }
      }
    },
    isInvalid: {
      name: 'isInvalid',
      control: { type: 'boolean' },
      table: {
        type: {
          summary:
            'Add "invalid" validation styles to the control and accompanying label',
          detail: 'type : Boolean'
        },
        defaultValue: { summary: 'false' }
      }
    },
    isValid: {
      name: 'isValid',
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'Add "valid" validation styles to the control',
          detail: 'type : Boolean'
        },
        defaultValue: { summary: 'false' }
      }
    },
    className: {
      name: 'className',
      control: { type: 'text' },
      table: {
        type: {
          summary: 'apply a style css',
          detail: 'type : string'
        },
        defaultValue: { summary: 'null' }
      }
    },
    readOnly: {
      name: 'readOnly',
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'Make the control readonly',
          detail: 'type : Boolean'
        },
        defaultValue: { summary: 'false' }
      }
    },
    value: {
      name: 'value',
      control: { type: 'text' },
      table: {
        type: {
          summary: 'The value attribute of underlying input',
          detail: 'type : Boolean, json'
        },
        defaultValue: { summary: 'null' }
      }
    },
    bsPrefix: {
      name: 'bsPrefix',
      control: { type: 'text' },
      table: {
        type: {
          summary: 'change default class of input( default :form-control)',
          detail: 'type : string'
        },
        defaultValue: { summary: 'null' }
      }
    },
    id: {
      name: 'id',
      control: { type: 'text' },
      table: {
        type: {
          summary: 'unique identifier of control',
          detail: 'type : string'
        },
        defaultValue: { summary: 'null' }
      }
    },
    placeholder: {
      name: 'placeholder',
      control: { type: 'text' },
      table: {
        type: {
          summary: 'placeholder of control',
          detail: 'type : string'
        },
        defaultValue: { summary: 'null' }
      }
    },
    defaultValue: {
      name: 'defaultValue',
      control: { type: 'text' },
      table: {
        type: {
          summary: 'default value of conrtrol',
          detail: 'type : string'
        },
        defaultValue: { summary: 'null' }
      }
    },
    onClick: {
      name: 'onClick',
      action: 'yourEvent',
      description: 'checkbox proprety',
      control: { type: null },
      table: {
        type: {
          summary: 'call on checkbox click',
          detail: 'type : function'
        },
        defaultValue: { summary: 'null' }
      }
    },
    checked: {
      name: 'checked',
      description: 'checkbox proprety',
      control: { type: 'boolean' },
      table: {
        type: {
          summary: ' value of control',
          detail: 'type : boolean'
        },
        defaultValue: { summary: 'null' }
      }
    },
    feedback: {
      name: 'feedback',
      description: 'checkbox proprety',
      control: { type: null },
      table: {
        type: {
          summary:
            'A message to display when the input is in a validation state',
          detail: 'type : node'
        },
        defaultValue: { summary: 'null' }
      }
    },
    feedbackTooltip: {
      name: 'feedbackTooltip',
      description: 'checkbox proprety',
      control: { type: null },
      table: {
        type: {
          summary: 'Display feedback as a tooltip.',
          detail: 'type : boolean'
        },
        defaultValue: { summary: 'null' }
      }
    },
    label: {
      name: 'label',
      description: 'checkbox proprety',
      control: { type: 'text' },
      table: {
        type: {
          summary: 'Label for the control',
          detail: 'type : string,node'
        },
        defaultValue: { summary: '' }
      }
    },
    type: {
      name: 'type',
      description: 'checkbox proprety',
      control: { type: 'text' },
      table: {
        type: {
          summary: 'The type of checkable',
          detail: "type:string , value:'radio' | 'checkbox' | 'switch'"
        },
        defaultValue: { summary: 'checkbox' }
      }
    },
    onChange: {
      name: 'onChange',
      action: 'yourEvent',
      control: { type: null },
      table: {
        type: {
          summary: 'A callback fired when the value changed',
          detail: 'type : function'
        },
        defaultValue: { summary: 'null' }
      }
    },
    options: {
      name: 'options',
      description: 'select proprety',
      control: { type: 'array', options: ',' },
      table: {
        type: {
          summary: 'list of options  in select control',
          detail:
            "type:Array of <option></option>, exemple: <option key='1' value='1'>1</option> "
        },
        defaultValue: { summary: 'null' }
      }
    },
    inputLabel: {
      name: 'inputLabel',
      control: { type: 'text' },
      table: {
        type: {
          summary: 'Label of input',
          detail: 'type : String'
        },
        defaultValue: { summary: 'null' }
      }
    },
    labelClassName: {
      name: 'labelClassName',
      control: { type: 'text' },
      table: {
        type: {
          summary: 'apply a style css for label',
          detail: 'type : String'
        },
        defaultValue: { summary: 'null' }
      }
    },
    containerClassname: {
      name: 'containerClassname',
      control: { type: 'text' },
      table: {
        type: {
          summary: 'apply a style css for container of input',
          detail: 'type : String'
        },
        defaultValue: { summary: 'null' }
      }
    },
    ErrorMsg: {
      name: 'ErrorMsg',
      control: { type: 'text' },
      table: {
        type: {
          summary: 'error message',
          detail: 'type : String'
        },
        defaultValue: { summary: 'null' }
      }
    },
    ErrorMsgClassName: {
      name: 'ErrorMsgClassName',
      control: { type: 'text' },
      table: {
        type: {
          summary: 'apply a style css for error message',
          detail: 'type : String'
        },
        defaultValue: { summary: 'null' }
      }
    },
    icons: {
      name: 'icons',
      control: { type: null },
      table: {
        type: {
          summary: 'list of icons in input',
          detail: 'type : array of icons (icon:node element)'
        },
        defaultValue: { summary: 'null' }
      }
    }
  }
};

const Template = args => <InputMolecule {...args} />;

export const InputTextLabel = Template.bind({});
InputTextLabel.args = {
  as: 'input',
  placeholder: 'input text',
  inputLabel: 'label'
};

export const CheckboxWithLabel = Template.bind({});
CheckboxWithLabel.args = {
  as: 'checkbox',
  label: 'checkbox',
  inputLabel: 'label'
};
export const SelectWithLabel = Template.bind({});
SelectWithLabel.args = {
  as: 'select',
  placeholder: 'select...',
  options: [
    <option value='1' key='1'>
      1
    </option>,
    <option value='2' key='2'>
      2
    </option>
  ],
  inputLabel: 'Label'
};
export const TextAreaLabel = Template.bind({});
TextAreaLabel.args = {
  as: 'textarea',
  placeholder: 'input text area',
  inputLabel: 'Label'
};
export const NumberWithLabel = Template.bind({});
NumberWithLabel.args = {
  as: 'number',
  placeholder: 'input number',
  inputLabel: 'Label'
};
export const InputTextErrorMsg = Template.bind({});
InputTextErrorMsg.args = {
  as: 'input',
  placeholder: 'input text',
  inputLabel: 'label',
  ErrorMsg: 'Error',
  ErrorMsgClassName: 'Msg_error',
  isInvalid: true
};

export const CheckboxWithErrorMsg = Template.bind({});
CheckboxWithErrorMsg.args = {
  as: 'checkbox',
  label: 'checkbox',
  inputLabel: 'label',
  ErrorMsg: 'Error',
  ErrorMsgClassName: 'Msg_error',
  isInvalid: true
};
export const SelectWithErrorMsg = Template.bind({});
SelectWithErrorMsg.args = {
  as: 'select',
  placeholder: 'select...',
  options: [
    <option value='1' key='1'>
      1
    </option>,
    <option value='2' key='2'>
      2
    </option>
  ],
  inputLabel: 'Label',
  ErrorMsg: 'Error',
  ErrorMsgClassName: 'Msg_error',
  isInvalid: true
};
export const TextAreaErrorMsg = Template.bind({});
TextAreaErrorMsg.args = {
  as: 'textarea',
  placeholder: 'input text area',
  inputLabel: 'Label',
  ErrorMsg: 'Error',
  ErrorMsgClassName: 'Msg_error',
  isInvalid: true
};
export const NumberWithErrorMsg = Template.bind({});
NumberWithErrorMsg.args = {
  as: 'number',
  placeholder: 'input number',
  inputLabel: 'Label',
  ErrorMsg: 'Error',
  ErrorMsgClassName: 'Msg_error',
  isInvalid: true
};
export const InputWithIcon = Template.bind({});
NumberWithErrorMsg.args = {
  as: 'input',
  placeholder: 'input with icon',
  inputLabel: 'Label',
  icons: [
    <Icon
      icon='CloseIcon'
      color='#000000'
      size='12px'
      className='First_Icon_Input_With_Label'
    />,
    <Icon
      icon='Valid'
      color='#000000'
      size='12px'
      className='Second_Icon_Input_With_Label'
    />
  ]
};
