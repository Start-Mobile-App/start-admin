import React, { useEffect, useState } from 'react';
import { ConfidentialityTemplate } from '../../Templates';
import { EditorState, ContentState, convertToRaw } from 'draft-js';
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import {
  apiGetConfidentiality,
  apiUpdateConfidentiality,
  apiUpload
} from '../../Api/Confidentiality';
import { apiURL } from '../../Config/Config';
export default function Confidentiality (props) {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [initialEditorState, setInitialEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [classNameButton, setClassNameButton] = useState('button_update');
  const [disabledButton, setDisabledButton] = useState(true);
  const [showModalInfo, setShowModalInfo] = useState(false);

  function closeModalInfo () {
    setShowModalInfo(false);
  }
  const onEditorStateChange = state => {
    if (
      draftToHtml(convertToRaw(initialEditorState.getCurrentContent())) !=
      draftToHtml(convertToRaw(state.getCurrentContent()))
    ) {
      setClassNameButton('btn-active-upadte');
      setDisabledButton(false);
    }
    setEditorState(state);
  };
  async function getConfidentiality () {
    const response = await apiGetConfidentiality();
    if (response.confidentiality != null) {
      const html = response.confidentiality.html;
      setEditorState(
        EditorState.createWithContent(
          ContentState.createFromBlockArray(
            htmlToDraft(`<div>${html}</div>`).contentBlocks
          )
        )
      );
      setInitialEditorState(
        EditorState.createWithContent(
          ContentState.createFromBlockArray(
            htmlToDraft(`<div>${html}</div>`).contentBlocks
          )
        )
      );
    }
  }
  useEffect(() => {
    getConfidentiality();
  }, []);
  async function updateConfidentiality () {
    const data = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    const result = JSON.stringify({
      html: data
    });
    const response = await apiUpdateConfidentiality(result);
    if (response) {
      if (response.statusCode === 200) {
        setShowModalInfo(true);
        setInitialEditorState(editorState);
        setClassNameButton('button_update');
        setDisabledButton(true);
      }
    }
  }

  async function uploadImageCallBack (file) {
    const formData = new FormData();
    formData.append('upload', file);
    const response = await apiUpload(formData);
    return new Promise((resolve, reject) => {
      if (response.status === 200) {
        resolve({ data: { link: apiURL + `file/${response.file}` } });
      }
    });
  }
  return (
    <div>
      <ConfidentialityTemplate
        onEditorStateChange={onEditorStateChange}
        editorState={editorState}
        uploadImageCallBack={uploadImageCallBack}
        updateConfidentiality={updateConfidentiality}
        classNameButton={classNameButton}
        disabledButton={disabledButton}
        showModalInfo={showModalInfo}
        closeModalInfo={closeModalInfo}
      />
    </div>
  );
}
