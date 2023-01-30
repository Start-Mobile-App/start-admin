import { shallow } from 'enzyme';
import TemplateGroup from './TemplateGroup';

describe('TemplateGroup', () => {
  const setSearch = jest.fn();
  const onChangePagination = jest.fn();
  const getListGroup = jest.fn();
  const onShearch = jest.fn();
  let wrapper, wrapperPag;
  beforeEach(() => {
    wrapper = shallow(
      <TemplateGroup
        search={''}
        setSearch={setSearch}
        listColumns={[]}
        data={[]}
        columnSort={''}
        page={'1'}
        numberOfPages={'2'}
        onChangePagination={onChangePagination}
        getListUser={getListGroup}
        onShearch={onShearch}
      />
    );
    wrapperPag = shallow(
      <TemplateGroup
        search={''}
        setSearch={setSearch}
        listColumns={[]}
        data={[]}
        columnSort={''}
        page={'1'}
        numberOfPages={'1'}
        onChangePagination={onChangePagination}
        getListUser={getListGroup}
        onShearch={onShearch}
      />
    );
  });
  it('render', () => {
    expect(wrapper.find('div')).toHaveLength(1);
    expect(wrapperPag.find('div')).toHaveLength(1);
  });
  it('Organism Header', () => {
    expect(wrapper.find('OrganismHeader')).toHaveLength(1);
  });
  it('Organism table user', () => {
    expect(wrapper.find('OrganismTableGroup')).toHaveLength(1);
  });
  it('Molecule input', () => {
    expect(wrapper.find('MoleculeInput')).toHaveLength(1);
  });
  it('Atom button', () => {
    expect(wrapper.find('AtomButton')).toHaveLength(2);
  });
  it('input  search placeholder', () => {
    expect(wrapper.find('MoleculeInput').props().placeholder).toEqual(
      'Recherche'
    );
  });
  it('input  search containerClassname', () => {
    expect(wrapper.find('MoleculeInput').props().containerClassname).toEqual(
      'container_input_search'
    );
  });
  it('onChange input search', () => {
    const event = {
      preventDefault () {},
      target: { value: 'test' }
    };
    wrapper.find('MoleculeInput').simulate('change', event);
    expect(setSearch).toBeCalledWith('test');
  });
  it('onKeyPress input search', () => {
    wrapper.find('MoleculeInput').simulate('keypress', { key: 'Enter' });
    expect(setSearch);
  });
  it('Molecule pagination', () => {
    expect(wrapper.find('MoleculePagination')).toHaveLength(1);
  });
  it('Molecule pagination  page', () => {
    expect(wrapper.find('MoleculePagination').props().page).toEqual('1');
  });
  it('Molecule pagination  numberOfPages', () => {
    expect(wrapper.find('MoleculePagination').props().numberOfPages).toEqual(
      '2'
    );
  });
  it('Molecule pagination  onChangePagination', () => {
    expect(
      wrapper.find('MoleculePagination').props().onChangePagination
    ).toEqual(onChangePagination);
  });
  it('Molecule pagination  numberOfPages 3', () => {
    expect(
      wrapper.find('MoleculePagination').props().onChangePagination
    ).toEqual(onChangePagination);
  });
});
