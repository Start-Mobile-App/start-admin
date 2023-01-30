import React from 'react';

import { Icon } from '../Atoms';
import '../../src/style/main.scss';
export default {
  title: 'Design System/Atoms/Icon',
  component: Icon,
  argTypes: {
    className: {
      name: 'className',
      control: { type: 'text' },
      table: {
        type: {
          summary: 'apply a style css',
          detail: 'type : String'
        },
        defaultValue: { summary: 'null' }
      }
    },
    icon: {
      name: 'icon',
      control: {
        type: 'select',
        options: [
          'SortTop',
          'Plus',
          'EnCours',
          'Entreprise',
          'reloade',
          'CloseIcon',
          'FolderFacture',
          'FlecheSuivi',
          'ClientAvatar',
          'Euro',
          'Import'
        ]
      },
      table: {
        type: {
          summary: 'name of icon',
          detail: 'type: String'
        },
        defaultValue: { summary: 'home' }
      }
    },
    size: {
      name: 'size',
      control: { type: 'text' },
      table: {
        type: {
          summary: 'size of icon',
          detail: 'type : Number,String'
        },
        defaultValue: { summary: 'null' }
      }
    },
    onClick: {
      name: 'onClick',
      control: { type: null },
      action: 'yourEvent',
      table: {
        type: {
          summary: 'event called on icon click',
          detail: 'type : function'
        },
        defaultValue: { summary: 'null' }
      }
    },
    color: {
      name: 'color',
      control: { type: 'color' },
      table: {
        type: {
          summary: 'color of icon',
          detail: 'type : String'
        },
        defaultValue: { summary: 'null' }
      }
    },
    style: {
      name: 'style',
      control: { type: 'object' },
      table: {
        type: {
          summary: 'apply a style css',
          detail: 'type : object'
        },
        defaultValue: { summary: 'null' }
      }
    }
  }
};

const Template = args => <Icon {...args} />;

export const iconPlus = Template.bind({});
iconPlus.args = {
  size: '10px',
  icon: 'Plus'
};

export const iconSort = Template.bind({});
iconSort.args = {
  size: '10px',
  icon: 'SortTop'
};
