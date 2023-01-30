import React from 'react';

import { ButtonDropDown } from '../Molecules';
import { Icon } from '../Atoms';
import '../../src/style/main.scss';
export default {
  title: 'Design System/Molecules/DropDown',
  component: ButtonDropDown,
  argTypes: {
    ContainerDropdownClassName: {
      name: 'ContainerDropdownClassName',
      control: { type: 'text' },
      table: {
        type: {
          summary: 'apply a style css for container  of  element',
          detail: 'type : String'
        },
        defaultValue: { summary: 'dropdown' }
      }
    },
    ButtonContainerClassName: {
      name: 'ButtonContainerClassName',
      control: { type: 'text' },
      table: {
        type: {
          summary: 'apply a style css for container  of  button',
          detail: 'type : String'
        },
        defaultValue: { summary: 'dropdown-select' }
      }
    },
    ButtonContentClassName: {
      name: 'ButtonContentClassName',
      control: { type: 'text' },
      table: {
        type: {
          summary: 'apply a style css for content  of  button',
          detail: 'type : String'
        },
        defaultValue: { summary: 'select' }
      }
    },
    ButtonValueClassName: {
      name: 'ButtonValueClassName',
      control: { type: 'text' },
      table: {
        type: {
          summary: 'apply a style css for button',
          detail: 'type : String'
        },
        defaultValue: { summary: 'Button_DropDown' }
      }
    },
    ButtonValue: {
      name: 'ButtonValue',
      control: { type: 'text' },
      table: {
        type: {
          summary: 'button value',
          detail: 'type : String'
        },
        defaultValue: { summary: 'Nouveau' }
      }
    },
    classNameDropDown: {
      name: 'classNameDropDown',
      control: { type: 'text' },
      table: {
        type: {
          summary: 'apply a style css for container of list  dropdown element',
          detail: 'type : String'
        },
        defaultValue: { summary: 'dropdown_list' }
      }
    },
    ListDropDown: {
      name: 'ListDropDown',
      control: { type: null },
      table: {
        type: {
          summary: 'list of element dropdown',
          detail:
            'type : array of object {className:apply a style css,item:description of element ,onClick:function}'
        },
        defaultValue: { summary: 'null' }
      }
    },
    icon: {
      name: 'icon',
      control: { type: null },
      table: {
        type: {
          summary: 'add icon to  button',
          detail: 'type : node'
        },
        defaultValue: { summary: 'null' }
      }
    },
    positionLeft: {
      name: 'positionLeft',
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'position of  icon',
          detail:
            'type : Boolean, positionLeft==true =>position left; position==false=> position rigth;position==null=>no icon'
        },
        defaultValue: { summary: 'true' }
      }
    }
  }
};

const Template = args => <ButtonDropDown {...args} />;

export const DropDown = Template.bind({});
DropDown.args = {
  ListDropDown: [
    {
      className: 'item_dropdown_list',
      onClick: function () {},
      item: 'Item1'
    },
    {
      className: 'item_dropdown_list',
      onClick: function () {},
      item: 'Item2'
    }
  ]
};

export const DropDownValue = Template.bind({});
DropDownValue.args = {
  ListDropDown: [
    {
      className: 'item_dropdown_list',
      onClick: function () {},
      item: 'Item1'
    },
    {
      className: 'item_dropdown_list',
      onClick: function () {},
      item: 'Item2'
    }
  ],
  ButtonValue: 'button'
};

export const DropDownRightIcon = Template.bind({});
DropDownRightIcon.args = {
  ListDropDown: [
    {
      className: 'item_dropdown_list',
      onClick: function () {},
      item: 'Item1'
    },
    {
      className: 'item_dropdown_list',
      onClick: function () {},
      item: 'Item2'
    }
  ],
  ButtonValue: 'Nouveau',
  icon: <Icon icon='Plus' size='8px' className='' />,
  positionLeft: false
};

export const DropDownLeftIcon = Template.bind({});
DropDownLeftIcon.args = {
  ListDropDown: [
    {
      className: 'item_dropdown_list',
      onClick: function () {},
      item: 'Item1'
    },
    {
      className: 'item_dropdown_list',
      onClick: function () {},
      item: 'Item2'
    }
  ],
  ButtonValue: 'Nouveau',
  icon: <Icon icon='Plus' size='8px' className='' />,
  positionLeft: true
};
