import { shallow } from 'enzyme';
import AtomIcon from './AtomIcon';

describe('Icon', () => {
  const click = jest.fn();
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<AtomIcon iconSet={'plus'} onClick={click} />);
  });

  it('renders ', () => {
    expect(wrapper.find('IcoMoon')).toHaveLength(1);
  });

  it('test onClick ', () => {
    expect(wrapper.props().onClick).toEqual(click);
  });

  it('props', () => {
    expect(wrapper.find('IcoMoon').props()).toEqual({
      iconSet: 'plus',
      onClick: click
    });
  });
});
