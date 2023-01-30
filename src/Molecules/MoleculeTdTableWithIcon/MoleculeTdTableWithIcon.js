import React from 'react';
import { TdTable, Icon } from '../../Atoms';

MoleculeTdTableWithIcon.defaultProps = {
  onClick: null,
  IconClassName: '',
  size: '8px'
};
export default function MoleculeTdTableWithIcon (props) {
  return (
    <TdTable className={props.className} onClick={props.onClick}>
      {props.text}
      <Icon
        className={props.classNameIcon}
        icon={props.icon}
        size={props.size}
      />
    </TdTable>
  );
}
