import React from 'react';
import { Table } from '../../Molecules';
OrganismTableUser.defaultProps = {
  TableClassName: 'table_user',
  listColumns: null,
  ContainerClassName: 'Table_User_Container',
  data: null,
  format: 'DD/MM/YYYY',
  selectElement: null,
  LigneClassName: 'Ligne_Table',
  LigneSelectedClassName: 'Ligne_Selected',
  ligneSelected: null,
  headerclassName: 'header-table'
};
export default function OrganismTableUser (props) {
  return (
    <div>
      <Table
        format='DD/MM/YYYY'
        ContainerClassName='table-container '
        TableClassName='table-content'
        listColumns={props.listColumns}
        data={props.data}
        ligneSelected={props.ligneSelected}
        LigneSelectedClassName={'Ligne_Selected'}
        selectElement={props.selectElement}
        headerclassName={'header-table'}
        columnSort={props.columnSort}
        ColumnSortClassName={'column-sort-table-user'}
        listTable={['lot', 'contact', 'user']}
        table={'user'}
        column={[
          'entreprise.name',
          'subcription',
          'professionalAddress',
          'tel',
          'entreprise.mail',
          'entreprise.tel',
          'entreprise.headOffice',
          'entreprise.siret'
        ]}
        dataOfNullColumn={[
          '- -',
          '- -',
          '- -',
          '- -',
          '- -',
          '- -',
          '- -',
          '- -'
        ]}
      />
    </div>
  );
}
