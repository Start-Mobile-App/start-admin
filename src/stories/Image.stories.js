import React from 'react';
import Tweeety from '../assets/tweety.jfif';
import { Img } from '../Atoms';

export default {
  title: 'Design System/Atoms/Image',
  component: Img,
  argTypes: {
    src: {
      name: 'src',
      control: { type: 'text' },
      table: {
        type: {
          summary: 'content of the image',
          detail: 'type : String'
        },
        defaultValue: { summary: '' }
      }
    },
    alt: {
      name: 'alt',
      control: { type: 'text' },
      table: {
        type: {
          summary: 'Manually set the visual state of the button to :active',
          detail: 'type:Boolean'
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
        defaultValue: { summary: 'img_default_style' }
      }
    },
    onclick: {
      name: 'onclick',
      action: 'function onclick',
      control: { type: null },
      table: {
        type: {
          summary: 'event when clicked in image',
          detail: 'type : function'
        },
        defaultValue: { summary: 'null' }
      }
    },
    width: {
      name: 'width',
      control: { type: 'text' },
      table: {
        type: {
          summary: 'width image'
        },
        defaultValue: { summary: '90px' }
      }
    },
    height: {
      name: 'height',
      control: { type: 'text' },
      table: {
        type: {
          summary: 'height image'
        },
        defaultValue: { summary: '90px' }
      }
    }
  }
};

const Template = args => <Img {...args}>submit</Img>;

export const BasicUsage = Template.bind({});
BasicUsage.args = {
  src: Tweeety,
  alt: 'hi',
  width: '120 px',
  height: '120 px'
};
