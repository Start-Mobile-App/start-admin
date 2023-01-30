import { shallow } from 'enzyme';
import { Icon } from '../../Atoms';
import { IconTextWithClick } from '..';

describe('IconTextWithClick', () => {
  const onclick = jest.fn();
  let wrapperIconText;
  beforeEach(() => {
    wrapperIconText = shallow(
      <IconTextWithClick
        icon={<Icon icon={'Plus'} className={''} />}
        text={<div>hello world</div>}
        onClick={onclick}
      />
    );
  });
  it('renders a molecule icon  text', () => {
    expect(wrapperIconText.find('div')).toHaveLength(3);
  });
  it('onClick', () => {
    expect(
      wrapperIconText
        .find('div')
        .at(0)
        .props().onClick
    ).toEqual(onclick);
  });
});
