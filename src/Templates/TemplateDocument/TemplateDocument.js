import React from 'react';
import {
  HeaderOrganism,
  TableDocumentOrganism,
  ModalInfoOrganism,
  ModalDetailOrganism
} from '../../Organisms';
import { Row, Col } from 'react-bootstrap';
import { Icon, Button } from '../../Atoms';
import { InputMolecule, Pagination } from '../../Molecules';
import CsvDownloader from 'react-csv-downloader';
export default function TamplateDocument (props) {
  return (
    <div>
      <HeaderOrganism title='Documents' />
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
          {props.activeBtn ? (
            <div onClick={() => props.showModalInfoExport()}>
              <CsvDownloader
                filename='Documents.csv'
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
                  'btn_classic_style button_delete button-export active_button second-button'
                }
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
      <ModalDetailOrganism
        dataDetails={props.dataDetails}
        showDetailModal={props.showDetailModal}
        title={props.title}
        SubTitle={'Catégorie'}
        setShowDetailModal={props.closeModalInfo}
      />
      <TableDocumentOrganism
        listColumns={props.listColumns}
        data={props.data}
        columnSort={props.columnSort}
        ligneSelected={props.ligneSelected}
        selectElement={props.selectElement}
      />
      {parseInt(props.numberOfPage) > 1 ? (
        <Pagination
          page={props.page}
          numberOfPages={props.numberOfPage}
          onChangePagination={props.onChangePagination}
          className='Row_Pagination_Group'
        />
      ) : null}
      <ModalInfoOrganism
        description={
          props.isExport === true ? 'La liste a bien été exportée' : null
        }
        closeModalInfo={props.closeModalExport}
        sizeIcon='40px'
        classNamedescription={'info-description'}
        deleteIcon={true}
        colorIcon={'#00D98B'}
        iconName={'Success'}
        showModalInfo={props.showModalInfo}
        marginBottonIcon={'28px'}
        loading={props.showLoading ? true : false}
      />
    </div>
  );
}
