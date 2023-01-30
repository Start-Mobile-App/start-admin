import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '../Atoms';
import '../../src/style/main.scss';
export default {
  title: 'Design System/Atoms/Button',
  component: Button,
  argTypes: {
    className: {
      name: 'className',
      control: { type: null },
      table: {
        type: {
          summary: 'apply a style css',
          detail: 'type : String'
        },
        defaultValue: { summary: 'btn_default_style' }
      }
    },
    active: {
      name: 'active',
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'Manually set the visual state of the button to :active',
          detail: 'type:Boolean'
        },
        defaultValue: { summary: 'false' }
      }
    },
    disabled: {
      name: 'disabled',
      control: { type: 'boolean' },
      table: {
        type: {
          summary:
            'Disables the Button, preventing mouse events, even if the underlying component is an <a> element',
          detail: 'type : Boolean'
        },
        defaultValue: { summary: 'false' }
      }
    },
    onClick: {
      name: 'onClick',
      control: { type: null },
      action: 'clicked',
      table: {
        type: {
          summary: 'event caaled on button active',
          detail: 'type : function'
        },
        defaultValue: { summary: 'null' }
      }
    },
    type: {
      name: 'type',
      control: { type: 'text' },
      table: {
        type: {
          summary: 'Defines HTML button type attribute.',
          detail: "type : String , value : 'button' | 'reset' | 'submit' | null"
        },
        defaultValue: { summary: 'null' }
      }
    },
    bsPrefix: {
      name: 'bsPrefix',
      control: { type: 'text' },
      table: {
        type: {
          summary:
            'Change the underlying component CSS base class name and modifier class names prefix. This is an escape hatch for working with heavily customized bootstrap css.',
          detail: 'type : String'
        },
        defaultValue: { summary: 'null' }
      }
    },
    href: {
      name: 'href',
      control: { type: 'text' },
      table: {
        type: {
          summary:
            'Providing a href will render an <a> element, styled as a button.',
          detail: 'type : String'
        },
        defaultValue: { summary: 'null' }
      }
    }
  }
};

const Template = args => <Button {...args}>submit</Button>;

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};
export const Active = Template.bind({});
Active.args = {
  active: true
};

export const Link = Template.bind({});
Link.args = {
  href: 'www.google.com',
  active: true
};

export const click = Template.bind({});
click.args = {
  onClick: action('hi'),
  active: true
};
