import React from 'react';
import { Table } from '../Molecules';
import { Input, Button } from '../Atoms';
import '../../src/style/main.scss';
import { action } from '@storybook/addon-actions';
export default {
  title: 'Design System/Molecules/Table',
  component: Table,
  argTypes: {
    format: {
      name: 'format',
      control: { type: 'text' },
      table: {
        type: {
          summary: 'Format of date to apply in moment function',
          detail: 'type : String'
        },
        defaultValue: { summary: 'DD/MM/YYYY' }
      }
    },
    ContainerClassName: {
      name: 'ContainerClassName',
      control: { type: 'text' },
      table: {
        type: {
          summary: 'apply a style css for container of Table',
          detail: 'type:String'
        },
        defaultValue: { summary: 'null' }
      }
    },
    TableClassName: {
      name: 'TableClassName',
      control: { type: 'text' },
      table: {
        type: {
          summary: 'apply a  style css for  table',
          detail: 'type: string'
        },
        defaultValue: { summary: 'null' }
      }
    },
    data: {
      name: 'data',
      control: { type: null },
      table: {
        type: {
          summary: 'list of data',
          detail: 'type: array of object {}'
        },
        defaultValue: { summary: 'null' }
      }
    },
    listColumns: {
      name: 'listColumns',
      control: { type: null },
      table: {
        type: {
          summary: 'list of column',
          detail:
            "type: array of object {type: (use to specific column in table ), value = 'action', element: (use to specific column in table), value = 'prototype => reactNode' column: description of column className: apply a style css for column of table ,   onClick: (type: function),   icon: use to add icon to column(type: string), size: apply a size to  icon(type: string), classNameIcon: use to add a style css to icon(type: string),index: index  use to link data to column"
        },
        defaultValue: { summary: 'null' }
      }
    },
    selectElement: {
      name: 'selectElement',
      control: { type: null },
      table: {
        type: {
          summary: 'function called in click in row of table',
          detail: 'type: function'
        },
        defaultValue: { summary: null }
      }
    },
    LigneClassName: {
      name: 'LigneClassName',
      control: { type: 'text' },
      table: {
        type: {
          summary: 'apply a  style css for row in  table',
          detail: 'type: string'
        },
        defaultValue: { summary: 'Ligne_Table' }
      }
    },
    LigneSelectedClassName: {
      name: 'LigneSelectedClassName',
      control: { type: 'text' },
      table: {
        type: {
          summary: 'apply a  style css for row selected in table',
          detail: 'type: string'
        },
        defaultValue: { summary: 'Ligne_Selected' }
      }
    },
    headerclassName: {
      name: 'headerclassName',
      control: { type: 'text' },
      table: {
        type: {
          summary: 'apply a  style css for header row in table',
          detail: 'type: string'
        },
        defaultValue: { summary: 'header_-able' }
      }
    },
    ligneSelected: {
      name: 'ligneSelected',
      control: { type: 'text' },
      table: {
        type: {
          summary: 'id of row selected',
          detail: 'type: string'
        },
        defaultValue: { summary: null }
      }
    }
  }
};

const Template = args => <Table {...args} />;

export const BaseTable = Template.bind({});
BaseTable.args = {
  format: 'MM/DD/YYYY',
  ContainerClassName: 'Table_Container',
  TableClassName: 'tableClassName',
  listColumns: [
    {
      column: 'Fisrst name',
      className: 'Col_default_style',
      onClick: () => '',
      index: 'firstName'
    },
    {
      column: 'Last name',
      className: 'Col_default_style',
      onClick: () => '',
      index: 'lastName'
    },
    { column: 'E-mail', className: 'Col_default_style', index: 'contact.mail' },
    {
      column: 'Tel 1',
      className: 'Col_default_style',
      index: 'contact.tel.tel1'
    },
    {
      column: 'Tel 2',
      className: 'Col_default_style',
      index: 'contact.tel.tel2'
    },
    {
      column: 'Date',
      className: 'Col_default_style',
      index: 'date',
      type: 'date'
    }
  ],
  data: [
    {
      _id: '1',
      lastName: 'last',
      firstName: 'fisrt',
      date: '11/11/2011',
      contact: {
        mail: 'test mail',
        tel: { tel1: '454545454', tel2: '5656578845' }
      }
    },
    {
      _id: '2',
      lastName: 'last',
      firstName: 'fisrt',
      date: '11/11/2011',
      contact: {
        mail: 'test mail',
        tel: { tel1: '11111111', tel2: '12121212' }
      }
    }
  ]
};

export const TableHeaderWithIcon = Template.bind({});
TableHeaderWithIcon.args = {
  format: 'MM/DD/YYYY',
  ContainerClassName: 'Table_Container',
  TableClassName: 'tableClassName',
  listColumns: [
    {
      column: 'Fisrst name',
      className: 'Col_default_style',
      onClick: () => '',
      icon: 'SortTop',
      size: '12px',
      classNameIcon: 'Icon_Sort_Table',
      index: 'firstName'
    },
    {
      column: 'Last name',
      className: 'Col_default_style',
      onClick: () => '',
      index: 'lastName'
    },
    { column: 'E-mail', className: 'Col_default_style', index: 'contact.mail' },
    {
      column: 'Tel 1',
      className: 'Col_default_style',
      index: 'contact.tel.tel1'
    },
    {
      column: 'Tel 2',
      className: 'Col_default_style',
      index: 'contact.tel.tel2'
    },
    {
      column: 'Date',
      className: 'Col_default_style',
      index: 'date',
      type: 'date'
    }
  ],
  data: [
    {
      lastName: 'last',
      firstName: 'fisrt',
      date: '11/11/2011',
      contact: {
        mail: 'test mail',
        tel: { tel1: '454545454', tel2: '5656578845' }
      }
    },
    {
      lastName: 'last',
      firstName: 'fisrt',
      date: '11/11/2011',
      contact: {
        mail: 'test mail',
        tel: { tel1: '11111111', tel2: '12121212' }
      }
    }
  ]
};

export const GeneralTable = Template.bind({});
GeneralTable.args = {
  format: 'MM/DD/YYYY',
  ContainerClassName: 'Table_Container',
  TableClassName: 'tableClassName',
  listColumns: [
    {
      type: 'action',
      element: (
        <td>
          <Input id='1' as='checkbox' onClick={action('selectAllElement')} />
        </td>
      ),
      index: 'select'
    },
    {
      column: 'Fisrst name',
      className: 'Col_default_style',
      onClick: () => '',
      icon: 'SortTop',
      size: '12px',
      classNameIcon: 'Icon_Sort_Table',
      index: 'firstName'
    },
    {
      column: 'Last name',
      className: 'Col_default_style',
      onClick: () => '',
      index: 'lastName'
    },
    { column: 'E-mail', className: 'Col_default_style', index: 'contact.mail' },
    {
      column: 'Tel 1',
      className: 'Col_default_style',
      index: 'contact.tel.tel1'
    },
    {
      column: 'Tel 2',
      className: 'Col_default_style',
      index: 'contact.tel.tel2'
    },
    {
      column: 'Date',
      className: 'Col_default_style',
      index: 'date',
      type: 'date'
    },
    { column: 'Actions', className: 'Col_default_style', index: 'actions' }
  ],
  data: [
    {
      _id: '1',
      lastName: 'last',
      firstName: 'fisrt',
      date: '11/11/2011',
      contact: {
        mail: 'test mail',
        tel: { tel1: '454545454', tel2: '5656578845' }
      },
      select: (
        <td>
          <Input
            id='dkfhjdfb6d5645'
            as='checkbox'
            onClick={action('selectElement')}
          />
        </td>
      ),
      actions: (
        <td>
          <Button>edit</Button> <Button>delete</Button> <Button>view</Button>
        </td>
      )
    },
    {
      _id: '2',
      lastName: 'last',
      firstName: 'fisrt',
      date: '11/11/2011',
      contact: {
        mail: 'test mail',
        tel: { tel1: '11111111', tel2: '12121212' }
      },
      select: (
        <td>
          <Input
            id='dkfhjdffddb65645'
            as='checkbox'
            onClick={action('selectElement')}
          />
        </td>
      ),
      actions: (
        <td>
          <Button>edit</Button> <Button>delete</Button> <Button>view</Button>
        </td>
      )
    }
  ]
};
