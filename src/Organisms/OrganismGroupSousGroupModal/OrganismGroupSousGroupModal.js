import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { IconTextWithClick, InputMolecule } from '../../Molecules/index';
import { Button, Icon, Input, Text } from '../../Atoms';

function OrganismGroupSousGroupModal (props) {
  return (
    <div>
      <Modal
        show={props.show}
        onHide={props.handleClose}
        dialogClassName='modal-dialog-Group'
        contentClassName='modal-content-Group'
      >
        <Icon
          icon='CloseIcon'
          size='14px'
          className='icon-close-modal'
          onClick={() => props.onCloseModal()}
        />
        <div>
          {props.isGroup || props.isModify ? (
            <div>
              <InputMolecule
                placeholder={'Nom du groupe'}
                bsPrefix={'form-control InputGroup'}
                type={'input'}
                value={props.groupName}
                as={'input'}
                onChange={e => props.onChangeGroupName(e.target.value)}
                readOnly={props.editGroupName ? true : false}
                icons={[
                  <Icon
                    icon={props.editGroupName ? 'Edit' : 'Valid'}
                    size='17px'
                    className={
                      'icon-update-group-name icon-update-group-name-classic'
                    }
                    onClick={() =>
                      props.setEditGroupName(
                        props.editGroupName
                          ? false
                          : props.groupName != ''
                          ? true
                          : false
                      )
                    }
                  />
                ]}
                onKeyPress={e => props.enterEditGroupName(e)}
                ErrorMsg={
                  props.validateName.validate === false &&
                  props.validateName.error != null
                    ? props.validateName.error
                    : null
                }
                ErrorMsgClassName={'error_label error_label_group'}
              />
            </div>
          ) : (
            <InputMolecule
              bsPrefix={'form-control style-select-group'}
              as={'select'}
              value={props.groupSelected}
              placeholder={'Groupe'}
              onChange={e => props.changeValueSelectGroup(e.target.value)}
              options={
                props.listGroup &&
                props.listGroup.map(el => (
                  <option value={el._id}>{el.name}</option>
                ))
              }
              ErrorMsg={
                props.validateName.validate === false &&
                props.validateName.error != null
                  ? props.validateName.error
                  : null
              }
              ErrorMsgClassName={'error_label error_label_group'}
            />
          )}
          {props.listSousGroup &&
            props.listSousGroup.map((element, index) =>
              !element.validate ? (
                <div style={{ position: 'relative' }}>
                  <Input
                    placeholder={'Sous-groupe ' + (index + 1)}
                    bsPrefix={
                      'form-control InputGroup Input-Sous-Group padding_input_group'
                    }
                    type={'input'}
                    as={'input'}
                    value={element.name}
                    defaultValue={element.name}
                    onChange={e =>
                      props.onChangeSousGoupWithIndex(e.target.value, index)
                    }
                    onKeyPress={e => props.enterAddSousGroup(e, index)}
                  />
                  {element.name === '' &&
                  element.validate === false &&
                  element.error !== null ? (
                    <Text className='error_label error_label_group'>
                      {' ' + element.error}
                    </Text>
                  ) : null}
                  {element.name ? (
                    <div>
                      <Icon
                        icon='Valid'
                        size='16px'
                        className='icon_Valid_Group'
                        onClick={() => props.addSousGroupbtn(index)}
                      />
                      <Icon
                        icon='CloseIcon'
                        size='14px'
                        className='icon_delete_New_Group'
                        onClick={() => props.onDelete(index)}
                      />
                      {element.validate === false && element.error !== null ? (
                        <Text className='error_label error_label_group'>
                          {' ' + element.error}
                        </Text>
                      ) : null}
                    </div>
                  ) : null}
                </div>
              ) : (
                <InputMolecule
                  placeholder={'Sous-groupe'}
                  bsPrefix={
                    'form-control InputGroup Input-Sous-Group padding_input_group'
                  }
                  type={'input'}
                  value={element.name}
                  as={'input'}
                  readOnly
                  icons={[
                    <Icon
                      icon='Edit'
                      size='17px'
                      className='icon_Edit_Group'
                      onClick={() => props.editSousGroup(index, element)}
                    />,
                    <Icon
                      icon='CloseIcon'
                      size='14px'
                      className='icon_delete_Group'
                      onClick={() => props.onDelete(index)}
                    />
                  ]}
                />
              )
            )}

          <IconTextWithClick
            icon={
              <Icon icon={'Plus'} size={'7px'} className={'icon_Add_Group'} />
            }
            text={'Ajouter un sous-groupe'}
            classNameContainer={'container_Add_Group'}
            onClick={() => props.addSousGroup()}
          />
          <div className='container_Group'>
            <Button
              onClick={() => props.submit()}
              disabled={props.loading}
              bsPrefix='btn_Valid_Add_Group'
            >
              Valider
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default OrganismGroupSousGroupModal;
