import React, { useEffect, useState } from 'react';
import { CguTemplate } from '../../Templates';
import { EditorState, ContentState, convertToRaw } from 'draft-js';
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import { apiGetCgv, apiUpdateCgv, apiUpload } from '../../Api/Cgu';
import { apiURL } from '../../Config/Config';
export default function Cgu (props) {
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
  async function getCgv () {
    const response = await apiGetCgv();
    const html = response.cgv.html;
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
  useEffect(() => {
    getCgv();
  }, []);
  async function updateCgu () {
    const data = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    const result = JSON.stringify({
      html: data
    });
    const response = await apiUpdateCgv(result);
    if (response) {
      if (response.statusCode === 201) {
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
      <CguTemplate
        onEditorStateChange={onEditorStateChange}
        editorState={editorState}
        uploadImageCallBack={uploadImageCallBack}
        updateCGU={updateCgu}
        classNameButton={classNameButton}
        disabledButton={disabledButton}
        showModalInfo={showModalInfo}
        closeModalInfo={closeModalInfo}
      />
    </div>
  );
}
