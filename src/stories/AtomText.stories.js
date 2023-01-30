import React from 'react';

import { Text } from '../Atoms';

import '../../src/style/main.scss';
export default {
  title: 'Design System/Atoms/Text',
  component: Text,
  argTypes: {
    classNameContainer: {
      name: 'classNameContainer',
      control: { type: 'text' },
      table: {
        type: {
          summary: 'apply a style css for container of elements',
          detail: 'type : String'
        },
        defaultValue: { summary: '' }
      }
    },
    icon: {
      name: 'icon',
      control: { type: null },
      table: {
        type: {
          summary: 'icon',
          detail: 'type : node'
        },
        defaultValue: { summary: 'null' }
      }
    },
    text: {
      name: 'text',
      control: { type: null },
      table: {
        type: {
          summary: 'text',
          detail: 'type : node'
        },
        defaultValue: { summary: 'null' }
      }
    }
  }
};

const Template = args => <Text {...args}>TEXT 1</Text>;

export const style = Template.bind({});
style.args = {
  className: 'default_style_text'
};
