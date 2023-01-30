import { shallow } from 'enzyme';
import OrganismTableGroup from './OrganismTableGroup';

describe('OrganismTableUser', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <OrganismTableGroup listColumns={[]} data={[]} columnSort={''} />
    );
  });
  it('render', () => {
    expect(wrapper.find('MoleculeTable')).toHaveLength(1);
  });
});
