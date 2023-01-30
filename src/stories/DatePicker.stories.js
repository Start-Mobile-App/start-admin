import React from 'react';

import { DatePicker } from '../Atoms';
export default {
  title: 'Design System/Atoms/DatePicker',
  component: DatePicker,
  argTypes: {
    classNameContainer: {
      name: 'classNameContainer',
      control: { type: 'text' },
      table: {
        type: {
          summary: 'apply a style to the container of the datePiker',
          detail: 'type : String'
        },
        defaultValue: { summary: 'DatePicker_default_container' }
      }
    },
    className: {
      name: 'className',
      control: { type: 'text' },
      table: {
        type: {
          summary: 'apply a style to the datePicker',
          detail: 'type : String'
        },
        defaultValue: { summary: 'Date_Picker_default_style' }
      }
    },
    placeholder: {
      name: 'placeholder',
      control: { type: 'text' },
      table: {
        type: {
          summary: 'put your placeHolder like date',
          detail: 'type : String'
        },
        defaultValue: { summary: 'Date' }
      }
    },
    minDate: {
      name: 'minDate',
      control: { type: 'date' },
      table: {
        type: {
          summary: 'minimum date format Date or null',
          detail: 'type : Date'
        },
        defaultValue: { summary: 'null' }
      }
    },
    locale: {
      name: 'locale',
      control: { type: 'text' },
      table: {
        type: {
          summary: 'timeZone "en-gb"'
        },
        defaultValue: { summary: 'en-gb' }
      }
    },
    dateFormat: {
      name: 'dateFormat',
      control: { type: 'text' },
      table: {
        type: {
          summary: 'formate your date like "dd/MM/yyyy"'
        },
        defaultValue: { summary: 'dd/MM/yyyy' }
      }
    },
    filterDate: {
      name: 'filterDate',
      control: { type: null },
      table: {
        type: {
          summary: 'pass a function that return a bool to controle your dates',
          detail: 'type : Function'
        },
        defaultValue: { summary: 'null' }
      }
    },
    onChange: {
      name: 'onChange',
      action: 'function onChange',
      control: { type: null },
      table: {
        type: {
          summary: 'function that will call when you change a select',
          detail: 'type : Function'
        },
        defaultValue: { summary: 'null' }
      }
    }
  }
};

const Template = args => <DatePicker {...args} />;

export const BasicUsage = Template.bind({});
BasicUsage.args = {
  dateFormat: 'dd/MM/yyyy',
  minDate: new Date(),
  selected: new Date()
};
