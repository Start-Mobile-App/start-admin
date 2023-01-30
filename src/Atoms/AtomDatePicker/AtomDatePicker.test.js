import { shallow } from 'enzyme';
import AtomDatePicker from './AtomDatePicker';

describe('AutoComplete', () => {
  const setStartDate = jest.fn();
  const startDate = new Date();
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <AtomDatePicker selected={startDate} onChange={setStartDate} />
    );
  });

  it('renders ', () => {
    expect(wrapper.find('a')).toHaveLength(1);
  });
});
