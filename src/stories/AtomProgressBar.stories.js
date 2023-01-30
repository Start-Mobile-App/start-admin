import React from 'react';
import { action } from '@storybook/addon-actions';
import { ProgressBar } from '../Atoms';
import '../../src/style/main.scss';
export default {
  title: 'Design System/Atoms/ProgressBar',
  component: ProgressBar,
  argTypes: {
    classNameprogressBar: {
      name: 'classNameprogressBar',
      control: { type: null },
      table: {
        type: {
          summary: 'apply a style css',
          detail: 'type : String'
        },
        defaultValue: { summary: 'progressBar_default_style' }
      }
    },
    classNameContainer_ProgressBar: {
      name: 'classNameContainer_ProgressBar',
      control: { type: null },
      table: {
        type: {
          summary: 'apply a style css',
          detail: 'type : String'
        },
        defaultValue: { summary: 'container_ProgressBar_default_style' }
      }
    },
    label: {
      name: 'label',
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'show the percent or not in the progressBar true or false',
          detail: 'type : Boolean'
        },
        defaultValue: { summary: 'false' }
      }
    },
    width: {
      name: 'width',
      control: { type: null },
      table: {
        type: {
          summary: 'value width',
          detail: 'type : string'
        },
        defaultValue: { summary: '0%' }
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

const Template = args => <ProgressBar {...args}>submit</ProgressBar>;
export const Usages = Template.bind({});
Usages.args = {
  width: '30%',
  label: true
};
