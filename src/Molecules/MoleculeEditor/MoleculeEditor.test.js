import { shallow } from 'enzyme';
import MoleculeEditor from './MoleculeEditor';

describe('MoleculePagination', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<MoleculeEditor />);
  });
  it('render', () => {
    expect(wrapper.find('Tr')).toHaveLength(1);
  });
});
