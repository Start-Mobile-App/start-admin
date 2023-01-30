import { shallow } from 'enzyme';
import AtomTdTable from './AtomTdTable';

describe('td table', () => {
  const onClick = jest.fn();
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<AtomTdTable onClick={onClick}>test</AtomTdTable>);
  });

  it('renders ', () => {
    expect(wrapper.find('td')).toHaveLength(1);
  });
  it('props', () => {
    expect(wrapper.find('td').props().children).toEqual('test');
  });
});
