import React from 'react';
import { Table } from '../../Molecules';
OrganismTableGroup.defaultProps = {
  TableClassName: 'tableClassName',
  listColumns: null,
  ContainerClassName: 'Table_Container',
  data: null,
  format: 'DD/MM/YYYY',
  selectElement: null,
  LigneClassName: 'Ligne_Table',
  LigneSelectedClassName: 'Ligne_Selected',
  ligneSelected: null,
  headerclassName: 'header_table'
};
export default function OrganismTableGroup (props) {
  return (
    <div>
      <Table
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
        table={'contact'}
        column={['subGroup', 'nbContacts', 'nbLots', 'nbDocuments']}
        dataOfNullColumn={['Aucun', '0', '0', '0']}
      />
    </div>
  );
}
