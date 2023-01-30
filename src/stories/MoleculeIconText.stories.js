import React from 'react';

import { Icon, Text } from '../Atoms';
import { IconTextMolecule } from '../Molecules';

import '../../src/style/main.scss';
export default {
  title: 'Design System/Molecules/IconText',
  component: IconTextMolecule,
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

const Template = args => <IconTextMolecule {...args} />;

export const iconText = Template.bind({});
iconText.args = {
  icon: (
    <Icon
      icon='Plus'
      size='12px'
      style={{ marginLeft: '4px', marginTop: '8px' }}
    />
  ),
  text: <Text className={'btn_Title_TemplateProfileModal'}>Description</Text>,
  classNameContainer: 'MoleculeIconText'
};
