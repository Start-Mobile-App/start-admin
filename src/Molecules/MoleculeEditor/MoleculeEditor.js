import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
MoleculeEditor.defaultProps = {
  editor: null,
  data: '<p>Hello from CKEditor 5!</p>',
  onReady: '',
  onChange: '',
  onBlur: '',
  onFocus: ''
};
export default function MoleculeEditor (props) {
  return (
    <CKEditor
      editor={props.editor}
      data={props.data}
      onReady={props.onReady}
      onChange={props.onChange}
      onBlur={props.onBlur}
      onFocus={props.onFocus}
    />
  );
}
