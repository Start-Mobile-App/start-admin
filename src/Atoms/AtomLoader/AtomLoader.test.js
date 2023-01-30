import { shallow } from 'enzyme';
import AtomLoader from './AtomLoader';

describe('ItemPagination', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<AtomLoader />);
  });

  describe('Loader', () => {
    it('renders ', () => {
      expect(wrapper.find('div')).toHaveLength(1);
    });
  });
});
