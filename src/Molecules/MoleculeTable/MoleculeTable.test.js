import MoleculeTable from './MoleculeTable';
import { shallow } from 'enzyme';
describe('Table', () => {
  const selectElement = jest.fn();
  const sortElement = jest.fn();
  let wrapperTable, wrapper;
  beforeEach(() => {
    wrapperTable = shallow(
      <MoleculeTable
        data={[
          {
            _id: '1',
            name: 'test',
            key: '1'
          },
          {
            _id: '2',
            name: 'test2',
            key: '2'
          }
        ]}
        listColumns={[
          {
            column: 'Name',
            index: 'name'
          }
        ]}
        selectElement={selectElement}
      />
    );
    wrapper = shallow(
      <MoleculeTable
        ligneSelected={1}
        columnSort={'name'}
        data={[
          {
            _id: '1',
            name: 'test',
            date: '01/01/2020',
            key: '1',
            user: { dates: { date: '20/12/2020' } }
          },
          {
            _id: '2',
            name: 'test2',
            date: '01/01/2020',
            key: '2',
            user: { dates: { date: '20/12/2020' } }
          }
        ]}
        listColumns={[
          {
            type: 'action',
            element: (
              <td style={{ width: '20px' }}>
                <input type='checkbox' />
              </td>
            ),
            index: 'select'
          },
          {
            column: 'Name',
            index: 'name'
          },
          {
            type: 'date',
            column: 'Date',
            index: 'date'
          },
          {
            type: 'date',
            column: 'date',
            index: 'user.dates.date'
          }
        ]}
        selectElement={selectElement}
      />
    );
  });
  it('render a table', () => {
    expect(wrapperTable.find('table')).toHaveLength(1);
    expect(wrapper.find('table')).toHaveLength(1);
  });
  it('click selectElement', () => {
    const result = wrapperTable.find('AtomTdTable').at(0);
    result.simulate('click', 1235);
    expect(selectElement).toHaveBeenCalled();
  });
});
