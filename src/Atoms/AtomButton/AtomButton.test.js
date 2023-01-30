import AtomButton from './AtomButton';
import { shallow } from 'enzyme';

describe('Button', () => {
  const click = jest.fn();
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<AtomButton onClick={click}>test</AtomButton>);
  });

  it('renders a button', () => {
    expect(wrapper.find('Button')).toHaveLength(1);
  });

  it('test atom button', () => {
    expect(wrapper.props().onClick).toEqual(click);
  });

  it('render "test" as children', () => {
    expect(wrapper.text()).toEqual('test');
  });
});
