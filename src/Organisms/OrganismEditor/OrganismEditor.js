import React, { useState } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
OrganismEditor.defaultProps = {
  editorState: EditorState.createEmpty(),
  onChangeEditor: null,
  toolbarClassName: 'toolbarClassName',
  wrapperClassName: 'wrapperClassName',
  editorClassName: 'editorClassName'
};
export default function OrganismEditor (props) {
  return (
    <div className='OrganismEditor_Container'>
      <Editor
        editorState={props.editorState}
        toolbarClassName={props.toolbarClassName}
        wrapperClassName={props.wrapperClassName}
        editorClassName={props.editorClassName}
        defaultEditorState={props.editHtmlValue}
        onEditorStateChange={props.onEditorStateChange}
        onChange={props.onChange}
        toolbar={{
          inline: {
            inDropdown: true
          },
          image: { uploadCallback: props.uploadImageCallBack },

          inputAccept:
            'application/pdf,text/plain,application/vnd.openxmlformatsofficedocument.wordprocessingml.document,application/msword,application/vnd.ms-excel'
        }}
      />
    </div>
  );
}
