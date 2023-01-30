import { shallow } from 'enzyme';
import AtomText from './AtomText';

describe('Text', () => {
  const click = jest.fn();
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<AtomText onClick={click}>{'test'}</AtomText>);
  });

  it('renders ', () => {
    expect(wrapper.find('p')).toHaveLength(1);
  });

  it('test click', () => {
    expect(wrapper.props().onClick).toEqual(click);
  });

  it('render "test" as children', () => {
    expect(wrapper.props()).toEqual({ children: 'test', onClick: click });
  });
});
