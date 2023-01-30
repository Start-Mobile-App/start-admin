import React from 'react';
import { EditorOrganism } from '../Organisms';
import { EditorState } from 'draft-js';
import '../../src/style/main.scss';

export default {
  title: 'Design System/Molecules/Editor',
  component: EditorOrganism,
  argTypes: {
    editHtmlValue: {
      name: 'editHtmlValue',
      control: { type: null },
      action: 'change page',
      table: {
        type: {
          summary: 'The EditorState object to be rendered by the Editor.',
          detail: 'type : function'
        },
        defaultValue: { summary: 'null' }
      }
    },
    onChangeEditor: {
      name: 'onChangeEditor',
      control: { type: null },
      action: 'change page',
      table: {
        type: {
          summary:
            'The onChange function to be executed by the Editor when edits and selection changes occur.',
          detail: 'type : function'
        },
        defaultValue: { summary: 'null' }
      }
    }
  }
};

const Template = args => <EditorOrganism {...args}></EditorOrganism>;

export const editor = Template.bind({});
editor.args = {
  editHtmlValue: EditorState.createEmpty(),
  toolbarClassName: 'toolbarClassName',
  wrapperClassName: 'wrapperClassName',
  editorClassName: 'editorClassName'
};
