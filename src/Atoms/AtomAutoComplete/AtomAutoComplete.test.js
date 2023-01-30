import { shallow } from 'enzyme';
import AtomAutoComplete from './AtomAutoComplete';

describe('AutoComplete', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <AtomAutoComplete
        suggestions={['test1', 'test2', 'test3']}
        renderSectionTitle={'test'}
        multiSection={true}
      />
    );
  });

  it('renders ', () => {
    expect(wrapper.find('Autosuggest')).toHaveLength(1);
  });
});
