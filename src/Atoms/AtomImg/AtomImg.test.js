import { shallow } from 'enzyme';
import AtomImg from './AtomImg';

describe('Image', () => {
  const click = jest.fn();
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <AtomImg src={'/test/src'} alt={'test_alt'} onclick={click} />
    );
  });

  it('renders ', () => {
    expect(wrapper.find('img')).toHaveLength(1);
  });

  it('test click', () => {
    expect(wrapper.props().onClick).toEqual(click);
  });

  it('props', () => {
    expect(wrapper.find('img').props()).toEqual({
      alt: 'test_alt',
      src: '/test/src',
      height: '90px',
      width: '90px',
      className: 'img_default_style',
      onClick: click
    });
  });
});
