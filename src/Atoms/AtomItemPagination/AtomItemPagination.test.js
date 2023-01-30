import { shallow } from 'enzyme';
import AtomIcon from '../AtomIcon/AtomIcon';
import AtomItemPagination from './AtomItemPagination';

describe('ItemPagination', () => {
  const onClick = jest.fn();
  let wrapper, wrapperIcon;
  beforeEach(() => {
    wrapperIcon = shallow(
      <AtomItemPagination
        onClick={onClick}
        icon={<AtomIcon iconSet={'plus'} />}
      />
    );
    wrapper = shallow(<AtomItemPagination page={2} onClick={onClick} />);
  });

  describe('pagination with page', () => {
    it('renders ', () => {
      expect(wrapper.find('div')).toHaveLength(1);
    });
    it('click', () => {
      expect(wrapper.find('div').props().onClick).toEqual(onClick);
    });
    it('page', () => {
      expect(wrapper.find('span').props().children).toEqual(2);
    });
  });

  describe('pagination with icon', () => {
    it('renders ', () => {
      expect(wrapperIcon.find('div')).toHaveLength(1);
    });
    it('click', () => {
      expect(wrapperIcon.find('div').props().onClick).toEqual(onClick);
    });
    it('page', () => {
      expect(wrapperIcon.find('span').props().children).toEqual(
        <AtomIcon iconSet={'plus'} />
      );
    });
  });
});
