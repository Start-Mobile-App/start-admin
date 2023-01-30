import MoleculeTdTableWithIcon from './MoleculeTdTableWithIcon';
import { shallow } from 'enzyme';

describe('TdTableWithIcon', () => {
  const onClick = jest.fn();
  let wrapperTdTable;
  beforeEach(() => {
    wrapperTdTable = shallow(
      <MoleculeTdTableWithIcon
        text={'Name'}
        onClick={onClick}
        classNameIcon={''}
        icon={'SortTop'}
        size={'10px'}
      />
    );
  });
  it('render a td table with icon', () => {
    expect(wrapperTdTable.find('AtomTdTable')).toHaveLength(1);
  });
});
