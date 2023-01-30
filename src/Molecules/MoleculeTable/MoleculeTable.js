import React from 'react';
import { TdTableWithIcon } from '..';
import { TdTable } from '../../Atoms';
import PropTypes from 'prop-types';
import moment from 'moment';

MoleculeTable.defaultProps = {
  TableClassName: 'table-content',
  listColumns: null,
  ContainerClassName: 'table-container',
  data: null,
  format: 'DD/MM/YYYY',
  selectElement: null,
  LigneClassName: 'Ligne_Table',
  LigneSelectedClassName: 'Ligne_Selected',
  ligneSelected: null,
  headerclassName: 'header-table',
  columnSort: null,
  HeaderColumnSortClassName: 'table-col-sort-header',
  ColumnSortClassName: 'column-sort',
  table: null,
  listTable: ['lot', 'contact'],
  column: null,
  dataOfNullColumn: null
};
MoleculeTable.propTypes = {
  listColumns: PropTypes.arrayOf(
    PropTypes.shape({
      element: PropTypes.elementType
    })
  ),
  data: PropTypes.arrayOf(
    PropTypes.shape({
      select: PropTypes.elementType,
      actions: PropTypes.elementType
    })
  ),
  column: PropTypes.arrayOf(PropTypes.string),
  dataOfNullColumn: PropTypes.arrayOf(PropTypes.string),
  listTable: PropTypes.arrayOf(PropTypes.string)
};
export default function MoleculeTable (props) {
  function showData () {
    const list = props.data.map(element => {
      const listColumns = defineRow(element, props.listColumns);
      return (
        <tr
          className={
            props.ligneSelected !== null && props.ligneSelected == element._id
              ? props.LigneSelectedClassName
              : props.LigneClassName
          }
        >
          {listColumns}
        </tr>
      );
    });
    return list;
  }
  function defineRow (element, listColumns) {
    const list = listColumns.map(el => {
      if (el.index === 'select' || el.index === 'actions') {
        return element[el.index];
      } else {
        return (
          <TdTable
            onClick={() =>
              props.selectElement !== null && props.selectElement(element._id)
            }
            className={
              props.columnSort === el.index ? props.ColumnSortClassName : null
            }
          >
            {view(el, element) ? view(el, element) : viewelementTable(el)}
          </TdTable>
        );
      }
    });
    return list;
  }
  function viewelementTable (col) {
    if (
      props.table !== null &&
      props.listTable !== null &&
      props.column !== null &&
      props.dataOfNullColumn !== null
    ) {
      const indexTable = props.listTable.indexOf(props.table);
      if (indexTable !== -1) {
        const indexColumn = props.column.indexOf(col.index);
        if (indexColumn !== -1) {
          if (props.dataOfNullColumn[indexColumn]) {
            return props.dataOfNullColumn[indexColumn];
          }
        }
      }
    }
    return null;
  }
  function view (index, data) {
    if (index.index.split('.').length === 1) {
      if (data[index.index.split('.')[0]]) {
        if (index.type === 'date') {
          return moment(data[index.index]).format(props.format);
        } else {
          return data[index.index];
        }
      }
    } else if (index.index.split('.').length === 2) {
      if (
        data[index.index.split('.')[0]] &&
        data[index.index.split('.')[0]][index.index.split('.')[1]]
      ) {
        if (index.type === 'date') {
          return moment(
            data[index.index.split('.')[0]][index.index.split('.')[1]]
          ).format(props.format);
        } else {
          return data[index.index.split('.')[0]][index.index.split('.')[1]];
        }
      }
    } else if (index.index.split('.').length === 3) {
      if (
        data[index.index.split('.')[0]] &&
        data[index.index.split('.')[0]][index.index.split('.')[1]] &&
        data[index.index.split('.')[0]][index.index.split('.')[1]][
          index.index.split('.')[2]
        ]
      ) {
        if (index.type === 'date') {
          return moment(
            data[index.index.split('.')[0]][index.index.split('.')[1]][
              index.index.split('.')[2]
            ]
          ).format(props.format);
        } else {
          return data[index.index.split('.')[0]][index.index.split('.')[1]][
            index.index.split('.')[3]
          ];
        }
      }
    }
  }
  return (
    <div className={props.ContainerClassName}>
      <table className={props.TableClassName}>
        <tbody>
          <tr className={props.headerclassName}>
            {props.listColumns.map(element =>
              element.type === 'action' ? (
                element.element
              ) : (
                <TdTableWithIcon
                  text={element.column}
                  className={
                    props.columnSort === element.index
                      ? props.HeaderColumnSortClassName
                      : element.className
                  }
                  onClick={element.onClick}
                  classNameIcon={element.classNameIcon}
                  icon={element.icon}
                  size={element.size}
                />
              )
            )}
          </tr>
          {showData()}
        </tbody>
      </table>
    </div>
  );
}
