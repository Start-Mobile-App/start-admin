import React from 'react';
import { Table } from '../../Molecules';
OrganismTableDocument.defaultProps = {
  listColumns: null,
  data: null,
  format: 'DD/MM/YYYY',
  headerclassName: 'header_table'
};
export default function OrganismTableDocument (props) {
  return (
    <div>
      <Table
        format='DD/MM/YYYY'
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
        table={'document'}
        column={[
          'category',
          'subCategory',
          'nbContact',
          'nbLot',
          'nbDocument',
          'totalEstimate'
        ]}
        dataOfNullColumn={['Aucun', 'Aucun', '0', '0', '0', '0']}
      />
    </div>
  );
}
