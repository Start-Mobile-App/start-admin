import { shallow } from 'enzyme';
import AtomItemDropDown from './AtomItemDropDown';

describe('ItemDropDown', () => {
  const onClick = jest.fn();
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<AtomItemDropDown item={'test'} onClick={onClick} />);
  });

  it('renders ', () => {
    expect(wrapper.find('div')).toHaveLength(1);
  });
  it('click', () => {
    expect(wrapper.find('div').props().onClick).toEqual(onClick);
  });
});
