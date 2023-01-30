import MoleculeLogo from './MoleculeLogo';
import { shallow } from 'enzyme';
describe('MoleculeLogo', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<MoleculeLogo />);
  });
  it('renders a molecule logo', () => {
    expect(wrapper.find('div')).toHaveLength(1);
  });
});
