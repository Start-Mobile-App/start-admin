import { shallow } from 'enzyme';
import { ModalGroupSousGroupOrganism } from '..';

describe('OrganismGroupSousGroupModal', () => {
  const handleCloseGroup = jest.fn();
  const onChangeGroupName = jest.fn();
  const onChangeSousGoupWithIndex = jest.fn();
  const addSousGroup = jest.fn();
  const enterAddSousGroup = jest.fn();
  const deleteSousGroup = jest.fn();
  const editSousGroup = jest.fn();
  const addSousGroupbtn = jest.fn();
  const validerGroup = jest.fn();
  const changeValueSelectGroup = jest.fn();
  const submit = jest.fn();
  const onCloseModal = jest.fn();
  const listSousGroup = [
    { value: '', new: true },
    { value: 'sous groupe1', new: false }
  ];
  const isInvalid = {
    groupName: false,
    sousGroupName: false
  };
  const event = {
    preventDefault () {},
    target: { value: 'test' }
  };
  const addSousGroupParam = {
    preventDefault () {},
    key: 'Enter',
    index: 0
  };
  let wrapper, wrapperSubGroup;
  beforeEach(() => {
    wrapper = shallow(
      <ModalGroupSousGroupOrganism
        show={true}
        isGroup={true}
        handleClose={handleCloseGroup}
        closeIconButton={handleCloseGroup}
        onChangeGroupName={onChangeGroupName}
        validerGroup={validerGroup}
        isInvalid={isInvalid}
        onChangeSousGoupWithIndex={onChangeSousGoupWithIndex}
        listSousGroup={listSousGroup}
        addSousGroup={addSousGroup}
        enterAddSousGroup={enterAddSousGroup}
        deleteSousGroup={deleteSousGroup}
        editSousGroup={editSousGroup}
        addSousGroupbtn={addSousGroupbtn}
        isvalidationAdd={true}
        validateName={{ validate: false, error: null }}
        submit={submit}
        onCloseModal={onCloseModal}
        loading={false}
      />
    );
    wrapperSubGroup = shallow(
      <ModalGroupSousGroupOrganism
        show={true}
        isGroup={false}
        handleClose={handleCloseGroup}
        closeIconButton={handleCloseGroup}
        onChangeGroupName={onChangeGroupName}
        validerGroup={validerGroup}
        isInvalid={isInvalid}
        onChangeSousGoupWithIndex={onChangeSousGoupWithIndex}
        listSousGroup={listSousGroup}
        addSousGroup={addSousGroup}
        enterAddSousGroup={enterAddSousGroup}
        deleteSousGroup={deleteSousGroup}
        editSousGroup={editSousGroup}
        addSousGroupbtn={addSousGroupbtn}
        isvalidationAdd={true}
        changeValueSelectGroup={changeValueSelectGroup}
        validateName={{ validate: false, error: null }}
        submit={submit}
        onCloseModal={onCloseModal}
        loading={false}
      />
    );
  });
  it('render', () => {
    expect(wrapper.find('div')).toHaveLength(6);
    expect(wrapperSubGroup.find('div')).toHaveLength(5);
  });
  it('close modal button', () => {
    wrapper
      .find('AtomIcon')
      .at(0)
      .simulate('click');
    expect(onCloseModal).toBeCalled();
  });
  it('change groupName input', () => {
    wrapper
      .find('MoleculeInput')
      .at(0)
      .simulate('change', event);
    expect(onChangeGroupName).toBeCalled();
  });
  it('change sousGroupName input', () => {
    wrapper
      .find('AtomInput')
      .at(0)
      .simulate('change', event);
    expect(onChangeSousGoupWithIndex).toBeCalled();
  });
  it('keyPress enter to add sousGroup', () => {
    wrapper
      .find('AtomInput')
      .at(0)
      .simulate('keypress', addSousGroupParam);
    expect(enterAddSousGroup).toBeCalled();
  });
  it('addSousGroup modal button', () => {
    wrapper.find('MoleculeIconTextWithClick').simulate('click');
    expect(addSousGroup).toBeCalled();
  });
  it('AtomButton modal button', () => {
    wrapper.find('AtomButton').simulate('click');
    expect(submit).toBeCalled();
  });
  it('change select group input', () => {
    wrapperSubGroup
      .find('MoleculeInput')
      .at(0)
      .simulate('change', event);
    expect(changeValueSelectGroup).toBeCalled();
  });
});
