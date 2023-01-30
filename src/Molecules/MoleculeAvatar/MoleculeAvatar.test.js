import MoleculeAvatar from './MoleculeAvatar';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
Enzyme.configure({ adapter: new Adapter() });
describe('MoleculeAvatar', () => {
  let wrapper;

  // const setState = jest.fn();
  // const useStateSpy = jest.spyOn(React, 'useState')
  // useStateSpy.mockImplementation((init) => [init, setState]);

  beforeEach(() => {
    wrapper = shallow(
      <MoleculeAvatar
        iconDropDown={'SortTop'}
        classNameIcon={'IconAvatar'}
        ContainerDropdownClassName={'Container_Molecule_Avatar'}
        ButtonContainerClassName={'Container_Molecule_Avatar-select'}
        classNameDropDown={'Container_Molecule_Avatar_list'}
        classNameDropDownInVisible={'Container_Molecule_Avatar_list_Invisible'}
        ListDropDown={[
          {
            className: 'item_dropdown_list',
            onClick: function () {
              setShowModalEditProfil(true);
            },
            item: 'Mon compte'
          },
          {
            className: 'item_dropdown_list',
            onClick: function () {},
            item: 'Déconnexion'
          }
        ]}
      />
    );
  });
  it('renders', () => {
    expect(wrapper).not.toBeNull();
  });

  it('visible drop down', () => {
    wrapper
      .find('div')
      .at(0)
      .simulate('click');
    expect(
      wrapper
        .find('AtomText')
        .children()
        .text()
    ).toEqual('admin');
  });
  it('visible drop down', () => {
    wrapper
      .find('div')
      .at(0)
      .simulate('click');
    wrapper
      .find('div')
      .at(0)
      .simulate('click');
    expect(
      wrapper
        .find('AtomText')
        .children()
        .text()
    ).toEqual('admin');
  });
});
