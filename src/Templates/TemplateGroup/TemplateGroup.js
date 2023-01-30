import React from 'react';
import {
  HeaderOrganism,
  ModalDetailOrganism,
  ModalGroupSousGroupOrganism,
  ModalInfoOrganism,
  ModalValidateDelete,
  TableGroupOrganism
} from '../../Organisms';
import { Row, Col } from 'react-bootstrap';
import { InputMolecule, ButtonDropDown, Pagination } from '../../Molecules';
import { Icon, Button } from '../../Atoms';
import CsvDownloader from 'react-csv-downloader';

export default function TemplateGroup (props) {
  const listDropDown = [
    {
      className: 'item_dropdown_list',
      onClick: props.handleShowGroup,
      item: 'Nouveau groupe'
    },
    {
      className: 'item_dropdown_list',
      onClick: props.handleShowSousGroup,
      item: 'Nouveau sous-groupe'
    }
  ];
  return (
    <div>
      <HeaderOrganism title='Contacts' />
      <Row className='container_row'>
        <Col>
          <InputMolecule
            icons={[
              <Icon
                className='IconSearch'
                icon='Search'
                size='12px'
                onClick={() => props.getListGroup()}
              />
            ]}
            placeholder='Recherche'
            onChange={e => props.setSearch(e.target.value)}
            containerClassname='container_input_search'
            className='input_search'
            onKeyPress={e => props.onShearch(e)}
          />
        </Col>
        <Col className='Col_Action_Data'>
          <Button
            className={
              props.activeBtn ? ' button_delete active_button' : 'button_delete'
            }
            onClick={() =>
              props.activeBtn ? props.deleteListSubGroup() : null
            }
          >
            Supprimer
          </Button>
          {props.activeBtn ? (
            <div onClick={() => props.showModalInfoExport()}>
              <CsvDownloader
                filename='contacts.csv'
                separator=';'
                wrapColumnChar=''
                columns={props.headersExport}
                datas={props.dataExport}
                text={
                  <div>
                    <Icon
                      icon={'Download'}
                      className={'icon_Export active_button'}
                      size={11}
                    />
                    Exporter
                  </div>
                }
                className={
                  'btn_classic_style button_delete button-export active_button'
                }
              />
            </div>
          ) : (
            <Button
              className={'btn_classic_style button_delete button-export '}
            >
              <Icon icon={'Download'} className={'icon_Export'} size={11} />
              Exporter
            </Button>
          )}

          <ButtonDropDown
            ListDropDown={listDropDown}
            ButtonValue='Nouveau'
            ButtonValueClassName='button_new'
            ContainerDropdownClassName='dropdown_new'
            icon={<Icon icon='Plus' size='10px' className='icon_plus_group' />}
            positionLeft={true}
            classNameDropDown='dropdown_list dropdown_list_new'
          />
        </Col>
      </Row>
      <TableGroupOrganism
        listColumns={props.listColumns}
        data={props.data}
        ligneSelected={props.ligneSelected}
        selectElement={props.selectElement}
        columnSort={props.columnSort}
      />
      {parseInt(props.numberOfPages) > 1 ? (
        <Pagination
          numberOfPages={props.numberOfPages}
          className={'Row_Pagination_Group'}
          page={props.page}
          onChangePagination={props.onChangePagination}
          versArray={[1]}
        />
      ) : null}
      <ModalGroupSousGroupOrganism
        show={props.show}
        isGroup={props.isGroup}
        isModify={props.isModify}
        handleClose={props.handleClose}
        onChangeGroupName={props.onChangeGroupName}
        listSousGroup={props.listSousGroup}
        addSousGroup={props.addSousGroup}
        enterAddSousGroup={props.enterAddSousGroup}
        groupName={props.groupName}
        editSousGroup={props.editSousGroup}
        addSousGroupbtn={props.addSousGroupbtn}
        listGroup={props.listGroup}
        changeValueSelectGroup={props.changeValueSelectGroup}
        groupSelected={props.groupSelected}
        CloseIconButtonSubGroup={props.CloseIconButtonSubGroup}
        onChangeSousGoupWithIndex={props.onChangeSousGoupWithIndex}
        setEditGroupName={props.setEditGroupName}
        editGroupName={props.editGroupName}
        enterEditGroupName={props.enterEditGroupName}
        addGroupNamebtn={props.addGroupNamebtn}
        submit={props.submit}
        validateName={props.validateName}
        onCloseModal={props.onCloseModal}
        onDelete={props.onDelete}
      />
      <ModalValidateDelete
        showModalValidateDelete={props.showModalDeleteValidate}
        setShowModalValidateDelete={props.setShowModalDeleteValidate}
        description={[
          props.activeBtn === true
            ? 'Êtes-vous certain de vouloir supprimer définitivement ces sous-groupes'
            : 'Êtes-vous certain de vouloir supprimer définitivement ce sous-groupe',
          ' de contacts ? Tous les contacts associés à ces sous-groupes seront',
          'également supprimés.'
        ]}
        delete={() => props.deleteSousGroupApi(props.buttonDelete)}
        valid={'Valider'}
        cancel={'Annuler'}
        contentClassName={'modal_delete_group'}
        sizeIcon={'42px'}
        classNamedescription={'style_description_delete_group'}
        classNameCancelButton={'cancel_button_group'}
        classNameValidButton={'valid_button_group'}
        deleteIcon={true}
        marginBottonIconReclamation={'28px'}
      />
      <ModalDetailOrganism
        dataDetails={props.dataDetails}
        showDetailModal={props.showDetailModal}
        title={props.title}
        SubTitle={'Groupe'}
        setShowDetailModal={props.setShowDetailModal}
        modify={props.modify}
      />
      <ModalInfoOrganism
        description={
          props.isExport
            ? 'La liste a bien été exportée'
            : props.isModify
            ? props.responseInfo
              ? 'Les modifications ont bien été enregistrées.'
              : null
            : props.responseInfo
            ? 'Les sous-groupes ont bien été supprimés'
            : 'Sous-groupe contient des informations'
        }
        closeModalInfo={props.closeModalInfo}
        sizeIcon='40px'
        classNamedescription={'info-description'}
        deleteIcon={true}
        colorIcon={props.responseInfo ? '#00D98B' : '#FF8577'}
        iconName={props.responseInfo ? 'Success' : 'Reclamation'}
        showModalInfo={props.showModalInfo}
        marginBottonIcon={'28px'}
        loading={props.showLoading ? true : false}
      />
    </div>
  );
}
