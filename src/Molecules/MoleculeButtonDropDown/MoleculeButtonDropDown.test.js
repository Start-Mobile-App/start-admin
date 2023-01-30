import { shallow } from 'enzyme';
import MoleculeButtonDropDown from './MoleculeButtonDropDown';

describe('MoleculeButtonDropDown', () => {
  const changeValue = jest.fn();
  const onClick = jest.fn();
  let wrapperDropDown, wrapperDropDownLeftIcon, wrapperDropDownRigthIcon;
  beforeEach(() => {
    wrapperDropDown = shallow(
      <MoleculeButtonDropDown
        ButtonValue={'test'}
        ListDropDown={[
          {
            className: 'item_dropdown_list',
            item: 'test1',
            key: '1'
          },
          {
            className: 'item_dropdown_list',
            item: 'test2',
            key: '2'
          }
        ]}
        icon={'Icon'}
        positionLeft={true}
      />
    );
    wrapperDropDownLeftIcon = shallow(
      <MoleculeButtonDropDown
        ButtonValue={'test'}
        ListDropDown={[
          {
            className: 'item_dropdown_list',
            item: 'test1',
            key: '1'
          },
          {
            className: 'item_dropdown_list',
            item: 'test2',
            key: '2'
          }
        ]}
        icon={'Icon'}
        positionLeft={true}
      />
    );
    wrapperDropDownRigthIcon = shallow(
      <MoleculeButtonDropDown
        ButtonValue={'test'}
        ListDropDown={[
          {
            className: 'item_dropdown_list',
            item: 'test1',
            key: '1'
          },
          {
            className: 'item_dropdown_list',
            item: 'test2',
            key: '2'
          }
        ]}
        icon={'Icon'}
        positionLeft={true}
      />
    );
  });
  it('renders a dropdown', () => {
    expect(wrapperDropDown.find('span')).toHaveLength(1);
  });
  it('renders a dropdown Left Icon', () => {
    expect(wrapperDropDownLeftIcon.find('span')).toHaveLength(1);
  });
  it('renders a dropdown rigth Icon', () => {
    expect(wrapperDropDownRigthIcon.find('span')).toHaveLength(1);
  });
});
