import React from 'react';
import { ItemDropDown } from '../Atoms';

export default {
  title: 'Design System/Atoms/ItemDropDown',
  component: ItemDropDown,
  argTypes: {
    item: {
      name: 'item',
      control: { type: 'text' },
      table: {
        type: {
          summary: 'value of element',
          detail: 'type : function'
        },
        defaultValue: { summary: '' }
      }
    },
    className: {
      name: 'className',
      control: { type: 'text' },
      table: {
        type: {
          summary: 'apply a style css',
          detail: 'type : String'
        },
        defaultValue: { summary: 'item_dropdown_default_style' }
      }
    },
    onClick: {
      name: 'onClick',
      action: 'function onClick',
      control: { type: null },
      table: {
        type: {
          summary: 'event when clicked',
          detail: 'type : function'
        },
        defaultValue: { summary: 'null' }
      }
    }
  }
};
const Template = args => <ItemDropDown {...args}></ItemDropDown>;

export const BasicUsage = Template.bind({});
BasicUsage.args = {};
