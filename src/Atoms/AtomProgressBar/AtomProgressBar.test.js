import { shallow } from 'enzyme';
import AtomProgressBar from './AtomProgressBar';

describe('ItemPagination', () => {
  let wrapper, wrapperWithoutLabel;
  beforeEach(() => {
    wrapper = shallow(<AtomProgressBar width={'50%'} label={true} />);
    wrapperWithoutLabel = shallow(
      <AtomProgressBar width={'50%'} label={false} />
    );
  });

  describe('Progress bar', () => {
    it('renders ', () => {
      expect(wrapper.find('div')).toHaveLength(2);
    });
    it('percent', () => {
      expect(
        wrapper
          .find('div')
          .at(1)
          .props().children
      ).toEqual('50%');
      expect(
        wrapperWithoutLabel
          .find('div')
          .at(1)
          .props().children
      ).toEqual(null);
    });
  });
});
