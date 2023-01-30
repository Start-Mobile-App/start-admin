import React from 'react';
import {
  HeaderOrganism,
  TableUserOrganism,
  ModalValidateDelete,
  ModalInfoOrganism
} from '../../Organisms';
import { Row, Col } from 'react-bootstrap';
import { InputMolecule, Pagination } from '../../Molecules';
import { Icon, Button } from '../../Atoms';
import CsvDownloader from 'react-csv-downloader';
export default function TemplateUser (props) {
  return (
    <div>
      <HeaderOrganism title='Utilisateurs' />
      <Row className='container_row'>
        <Col>
          <InputMolecule
            icons={[<Icon className='IconSearch' icon='Search' size='12px' />]}
            placeholder='Recherche'
            onChange={e => props.setSearch(e.target.value)}
            containerClassname='container_input_search'
            className='input_search'
            value={props.search}
            onKeyPress={e => props.onShearch(e)}
          />
        </Col>
        <Col className='Col_Action_Data'>
          <Button
            className={
              props.activeBtn
                ? ' button_delete active_button second-button'
                : 'button_delete second-button'
            }
            onClick={() => (props.activeBtn ? props.openModalDelete() : null)}
          >
            {'Supprimer'}
          </Button>
          {props.activeBtn ? (
            <div>
              <CsvDownloader
                filename='Utilisateurs.csv'
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
                className='btn_classic_style button_delete button-export active_button second-button'
              />
            </div>
          ) : (
            <Button
              className={
                'btn_classic_style button_delete button-export second-button'
              }
            >
              <Icon icon={'Download'} className={'icon_Export'} size={11} />
              {'Exporter'}
            </Button>
          )}
        </Col>
      </Row>
      <TableUserOrganism
        listColumns={props.listColumns}
        data={props.data}
        columnSort={props.columnSort}
      />
      {parseInt(props.numberOfPage) > 1 ? (
        <Pagination
          page={props.page}
          numberOfPages={props.numberOfPage}
          onChangePagination={props.onChangePagination}
          className='Row_Pagination_Group'
        />
      ) : null}
      <ModalValidateDelete
        showModalValidateDelete={props.showModalValidateDelete}
        setShowModalValidateDelete={props.setShowModalValidateDelete}
        description={[
          'Êtes-vous certain de vouloir supprimer définitivement ces utilisateurs ? Les lots, contacts, documents crées par ces utilisateurs seront également supprimés.'
        ]}
        delete={props.deleteListUser}
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
      <ModalInfoOrganism
        description={'Les utilisateurs ont bien été supprimés'}
        closeModalInfo={() => props.setShowModalInfo(false)}
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
