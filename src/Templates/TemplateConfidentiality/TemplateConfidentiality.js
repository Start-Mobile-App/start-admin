import React from 'react';
import {
  HeaderOrganism,
  EditorOrganism,
  ModalInfoOrganism
} from '../../Organisms';
import { Row, Col } from 'react-bootstrap';
import { Button } from '../../Atoms';
export default function TemplateConfidentiality (props) {
  return (
    <div>
      <HeaderOrganism title='Politique de confidentialité' />
      <Row className='container_row'>
        <Col className='Col_Action_CGU'>
          <Button
            className={props.classNameButton}
            disabled={props.disabledButton}
            onClick={() => props.updateConfidentiality()}
          >
            Sauvegarder
          </Button>
        </Col>
      </Row>
      <EditorOrganism
        editorState={props.editorState}
        onEditorStateChange={props.onEditorStateChange}
        onChange={props.onChange}
        uploadImageCallBack={props.uploadImageCallBack}
      />
      <ModalInfoOrganism
        description={'Les modifications ont bien été enregistrées.'}
        closeModalInfo={props.closeModalInfo}
        sizeIcon='40px'
        classNamedescription={'info-description'}
        deleteIcon={true}
        colorIcon={'#00D98B'}
        iconName={'Success'}
        showModalInfo={props.showModalInfo}
        marginBottonIcon={'28px'}
      />
    </div>
  );
}
