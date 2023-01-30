import React from 'react';
import { Table } from '../../Molecules';
OrganismTableLot.defaultProps = {
  TableClassName: 'table_Lot',
  listColumns: null,
  ContainerClassName: 'Table_Lot_Container',
  data: null,
  format: 'DD/MM/YYYY',
  selectElement: null,
  LigneClassName: 'Ligne-Table',
  LigneSelectedClassName: 'Ligne_Selected',
  ligneSelected: null,
  headerclassName: 'header-table'
};
export default function OrganismTableLot (props) {
  return (
    <div>
      <Table
        format='MM/DD/YYYY'
        ContainerClassName='table-container'
        TableClassName='table-content'
        listColumns={props.listColumns}
        data={props.data}
        ligneSelected={props.ligneSelected}
        LigneSelectedClassName={'Ligne_Selected'}
        selectElement={props.selectElement}
        headerclassName={'header-table'}
        columnSort={props.columnSort}
        HeaderColumnSortClassName={'table-col-sort-header'}
        table={'lot'}
        column={[
          'subCategory',
          'nbContact',
          'nbLot',
          'lotUnderStudy',
          'lotAtCustomer',
          'number_document'
        ]}
        dataOfNullColumn={['Aucun', '0', '0', '0', '0', '0']}
      />
    </div>
  );
}
