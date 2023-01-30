import React from 'react';
import { Icon } from '../Atoms';
import { Pagination } from '../Molecules';
import '../../src/style/main.scss';
export default {
  title: 'Design System/Molecules/Pagination',
  component: Pagination,
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
    NumberClassName: {
      name: 'NumberClassName',
      control: { type: null },
      table: {
        type: {
          summary: 'apply a style css',
          detail: 'type : String'
        }
      }
    },
    numberOfPages: {
      name: 'numberOfPages',
      control: { type: 'boolean' },
      table: {
        type: {
          control: { type: 'text' },
          detail: 'type : string'
        }
      }
    },
    onChangePagination: {
      name: 'onChangePagination',
      control: { type: null },
      action: 'change page',
      table: {
        type: {
          summary: 'event called on clicked in number page',
          detail: 'type : function'
        },
        defaultValue: { summary: 'null' }
      }
    },
    page: {
      name: 'page',
      control: { type: 'text' },
      table: {
        type: {
          summary: 'value of page'
        }
      }
    },
    ItemPaginationSelectedClassName: {
      name: 'ItemPaginationSelectedClassName',
      control: { type: null },
      table: {
        type: {
          summary: 'apply a style css for select element',
          detail: 'type : String'
        }
      }
    }
  }
};

const Template = args => <Pagination {...args}></Pagination>;

export const itemPagination = Template.bind({});
itemPagination.args = {
  page: 5,
  numberOfPages: 15,
  className: 'Row_Pagination'
};
