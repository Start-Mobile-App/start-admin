import { shallow } from 'enzyme';
import MoleculeIconText from './MoleculeIconText';
import { Icon } from '../../Atoms';

describe('MoleculeIconText', () => {
  let wrapperIconText;
  beforeEach(() => {
    wrapperIconText = shallow(
      <MoleculeIconText
        icon={<Icon icon={'Plus'} className={''} />}
        text={<div>hello world</div>}
      />
    );
  });
  it('renders a molecule icon  text', () => {
    expect(wrapperIconText.find('div')).toHaveLength(3);
  });
});
